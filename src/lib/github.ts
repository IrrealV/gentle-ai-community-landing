/**
 * Build-time GitHub fetch (Gerardo pattern).
 *
 * Resolves stars, forks, latest release, and contributors at BUILD time only.
 * Never call this from a client island — it would expose `GITHUB_TOKEN` and
 * blow the anonymous rate limit for every visitor.
 *
 * Auth: reads `GITHUB_TOKEN` from env when present (5000 req/hr).
 * Anonymous fallback: 60 req/hr per IP — fine for build, painful in dev loops.
 *
 * In-build memoization: repeated calls for the same (owner, repo) inside a
 * single Astro build reuse the first response. Astro's module graph already
 * caches import results, but we add an explicit map for clarity.
 */

const API = 'https://api.github.com';

export interface LatestRelease {
  tag: string;
  name: string | null;
  url: string;
  publishedAt: string;
}

export interface Contributor {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
  contributions: number;
}

export interface RepoStats {
  owner: string;
  repo: string;
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  defaultBranch: string;
  description: string | null;
  htmlUrl: string;
  latestRelease: LatestRelease | null;
  contributors: Contributor[];
  fetchedAt: string;
}

const cache = new Map<string, Promise<RepoStats>>();

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'gentle-ai-community-landing-build',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function gh<T>(path: string, allowMissing = false): Promise<T | null> {
  const res = await fetch(`${API}${path}`, { headers: headers() });
  if (res.status === 404 && allowMissing) return null;
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(
      `GitHub ${path} failed: ${res.status} ${res.statusText}\n${body}`,
    );
  }
  return (await res.json()) as T;
}

interface RepoResponse {
  stargazers_count: number;
  forks_count: number;
  subscribers_count: number;
  open_issues_count: number;
  default_branch: string;
  description: string | null;
  html_url: string;
}

interface ReleaseResponse {
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string;
}

interface ContributorResponse {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export function fetchRepoStats(owner: string, repo: string): Promise<RepoStats> {
  const key = `${owner}/${repo}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const promise = (async (): Promise<RepoStats> => {
    const [info, release, contributors] = await Promise.all([
      gh<RepoResponse>(`/repos/${owner}/${repo}`),
      gh<ReleaseResponse>(`/repos/${owner}/${repo}/releases/latest`, true),
      gh<ContributorResponse[]>(`/repos/${owner}/${repo}/contributors?per_page=100`, true),
    ]);
    if (!info) throw new Error(`GitHub returned no data for ${key}`);

    return {
      owner,
      repo,
      stars: info.stargazers_count,
      forks: info.forks_count,
      watchers: info.subscribers_count,
      openIssues: info.open_issues_count,
      defaultBranch: info.default_branch,
      description: info.description,
      htmlUrl: info.html_url,
      latestRelease: release
        ? {
            tag: release.tag_name,
            name: release.name,
            url: release.html_url,
            publishedAt: release.published_at,
          }
        : null,
      contributors:
        contributors?.map((c) => ({
          login: c.login,
          avatarUrl: c.avatar_url,
          htmlUrl: c.html_url,
          contributions: c.contributions,
        })) ?? [],
      fetchedAt: new Date().toISOString(),
    };
  })();

  cache.set(key, promise);
  return promise;
}
