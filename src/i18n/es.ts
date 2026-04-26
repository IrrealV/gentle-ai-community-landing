import type { Dictionary } from './en';

/**
 * Spanish mirror — Rioplatense voseo where natural, neutral elsewhere.
 * Must keep key parity with `./en.ts`. CI smoke tests will enforce it.
 */
export const es: Dictionary = {
  meta: {
    title: 'Gentle AI — Un comando. Cualquier agente. Cualquier OS.',
    description:
      'El ecosistema Gentle AI configurado y listo. Memoria Engram, pipelines SDD, Skills y Persona — instalados en segundos en todos los agentes principales.',
  },

  nav: {
    problem: 'Problema',
    solution: 'Solución',
    howItWorks: 'Cómo funciona',
    agents: 'Agentes',
    buildAgent: 'Crea tu agente',
    presets: 'Presets',
    install: 'Instalación',
    community: 'Comunidad',
    switchLang: 'English',
    ctaInstall: 'Instalar',
  },

  hero: {
    badge: 'Open Source · Licencia MIT',
    headlineLines: ['Un comando.', 'Cualquier agente.', 'Cualquier OS.'],
    subheadline: 'El ecosistema Gentle AI configurado y listo.',
    ctaInstall: 'Instalá ahora',
    ctaGithub: 'Ver en GitHub',
    versionBadgePrefix: 'Disponible',
    installWidgetTitle: 'gentle-ai',
    osHints: {
      mac: 'macOS detectado',
      linux: 'Linux detectado',
      windows: 'Windows detectado',
      unknown: 'Elegí tu plataforma',
    },
  },

  problem: {
    eyebrow: 'El dolor',
    headline: 'Todos los proyectos empiezan igual.',
    intro:
      'Abrís un repo nuevo, abrís tu agente de IA y pasás la próxima hora configurando las mismas cosas que configuraste la semana pasada.',
    points: [
      {
        title: 'Pegás los mismos prompts una y otra vez',
        description:
          'La memoria no persiste. Cada sesión empieza de cero. Volvés a explicar tus convenciones, tu stack, tus preferencias — una y otra vez.',
      },
      {
        title: 'Cada agente se comporta distinto',
        description:
          'Claude, Gemini, Cursor, Copilot — cada uno necesita configuración diferente. Mantener consistencia entre herramientas es un trabajo de tiempo completo.',
      },
      {
        title: 'Sin estructura para cambios grandes',
        description:
          'Los agentes alucinan cuando el scope es amplio. Sin un workflow claro — spec, design, tasks, apply — derivan y producen basura.',
      },
    ],
  },

  solution: {
    eyebrow: 'La solución',
    headline: 'Una config. Todos los agentes. Listo para producción.',
    intro:
      'Gentle AI es la capa que faltaba entre tu codebase y tus agentes de IA. Configurás una vez y compartís en todos lados.',
    pillars: [
      {
        id: 'engram',
        title: 'Engram — Memoria persistente',
        description:
          'Decisiones, convenciones, bugs resueltos y descubrimientos persisten entre sesiones y compactaciones. Tus agentes recuerdan todo.',
      },
      {
        id: 'sdd',
        title: 'SDD — Entrega estructurada',
        description:
          'Spec-Driven Development divide los cambios grandes en propose → spec → design → tasks → apply → verify. Sin alucinaciones en tareas complejas.',
      },
      {
        id: 'skills',
        title: 'Skills — Expertise reutilizable',
        description:
          'Instrucciones de agente empaquetadas para testing, creación de PRs, code review y más. Instalás una vez y todos tus agentes se benefician.',
      },
      // PENDING-LEAD-REVIEW.
      {
        id: 'persona',
        title: 'Persona — Voz pedagógica',
        description:
          'Todos los agentes hablan con la misma voz a lo largo del pipeline — directa, apasionada, enfocada en el crecimiento, no solo en el código.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'El flujo',
    headline: 'De la instalación al deploy en minutos.',
    steps: [
      {
        number: '01',
        title: 'Instalá Gentle AI',
        description:
          'Un comando vía Homebrew, curl, Scoop o Go. Gentle AI corre en macOS, Linux y Windows.',
      },
      {
        number: '02',
        title: 'Elegí un preset',
        description:
          'Usá full-gentleman para todo, ecosystem-only para el stack principal, o minimal para lo esencial. También podés combinar componentes a medida.',
      },
      {
        number: '03',
        title: 'Abrí tu agente',
        description:
          'Claude Code, Gemini CLI, Cursor — tu agente ya tiene memoria Engram, pipelines SDD, Skills y tus convenciones pre-cargadas.',
      },
      {
        number: '04',
        title: 'Enviá más rápido',
        description:
          'Sin repetir contexto. Sin alucinaciones en tareas grandes. Solo desarrollo limpio, estructurado y potenciado por IA.',
      },
    ],
  },

  agents: {
    eyebrow: 'Los agentes',
    headline: 'Funciona con tu agente.',
    intro:
      'Gentle AI soporta todos los agentes de IA principales. Delegación completa significa que el agente puede correr el pipeline SDD de forma autónoma.',
    badges: {
      full: 'Delegación completa',
      solo: 'Agente solo',
    },
    visitLabel: 'Visitar',
  },

  buildAgent: {
    eyebrow: 'Extender',
    headline: 'Creá tu propio agente.',
    intro:
      'Gentle AI no es solo un instalador de presets — es una plataforma extensible. Escribís un archivo Markdown y tu agente personalizado se instala en todas tus herramientas de IA automáticamente.',
    codeBlockTitle: 'agents/mi-agente.md',
    codeBlock:
      '# Mi agente personalizado\n\n## Trigger\nCuando el usuario mencione migraciones, el agente se activa.\n\n## Instructions\nDescribí la tarea, las restricciones y el criterio de éxito.\nGentle AI maneja el registro en cada herramienta soportada.',
    features: [
      {
        id: 'file-tools',
        title: 'Un archivo, todas las herramientas',
        description:
          'Lo escribís una vez y se instala automáticamente en Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex, Antigravity y Windsurf.',
      },
      {
        id: 'sdd-integration',
        title: 'Integración con SDD',
        description:
          'Los agentes personalizados pueden mejorar fases SDD existentes, agregar nuevas fases al DAG, o correr de forma completamente independiente.',
      },
      {
        id: 'registry',
        title: 'Registry sin colisiones',
        description:
          'El registry integrado evita conflictos de nombres con las skills built-in. Rollback automático ante cualquier falla.',
      },
    ],
  },

  presets: {
    eyebrow: 'Presets',
    headline: 'Elegí tu nivel de setup.',
    intro:
      'De cero a todo en un comando. Volvé a correr el instalador cuando quieras para cambiar la config.',
    cliLabel: 'Flag CLI',
    includesLabel: 'Incluye',
    badges: {
      recommended: 'Recomendado',
      popular: 'Popular',
      lightweight: 'Liviano',
      flexible: 'Flexible',
    },
    items: {
      'full-gentleman': {
        name: 'Full Gentleman',
        tagline: 'La experiencia completa',
        description:
          'Los 8 componentes + todas las skills + persona Gentleman. Máximo poder, máximo aprendizaje.',
      },
      'ecosystem-only': {
        name: 'Solo ecosistema',
        tagline: 'Stack principal, sin tema',
        description:
          'Componentes principales + todas las skills + persona Gentleman. Saltate el tema visual si lo preferís.',
      },
      minimal: {
        name: 'Mínimo',
        tagline: 'Solo lo esencial',
        description:
          'Memoria Engram + skills SDD. Para quienes quieren el workflow sin extras.',
      },
      custom: {
        name: 'Personalizado',
        tagline: 'Tu elección, tus reglas',
        description:
          'Elegí exactamente qué componentes, skills y persona querés. Control total sobre el stack.',
      },
    },
  },

  install: {
    eyebrow: 'Instalación',
    headline: 'Instalá en segundos.',
    intro: 'Elegí tu plataforma. Un comando.',
    copy: 'Copiar',
    copied: '¡Copiado!',
    postInstall: {
      headline: 'Después de instalar',
      intro:
        'Dos comandos mantienen tu stack honesto: `sync` trae los últimos agentes y skills, y `auto-update` mantiene la instalación al día en background.',
    },
    sync: {
      label: 'Sync',
      description:
        'Trae los últimos agentes, skills y presets desde el registro. Ejecutalo después de cada instalación o cuando quieras refrescar tu stack.',
    },
    autoUpdate: {
      label: 'Auto-update',
      description:
        'Mantiene tu instalación al día sin sync manual. Lo activás una vez y Gentle AI maneja el resto en background.',
    },
  },

  community: {
    eyebrow: 'Comunidad',
    headline: 'Construido con la comunidad.',
    intro:
      'Gentle AI es open source y está impulsado por la comunidad. Sumate a quienes envían código más rápido con IA.',
    discord: 'Sumate al Discord',
    starOnGithub: 'Dejá una estrella en GitHub',
    contributorsLabel: 'Contribuidores',
    statsLabels: {
      stars: 'GitHub Stars',
      forks: 'Forks',
      contributors: 'Contribuidores',
      version: 'Última versión',
    },
    tribute: {
      quote:
        '"Así es como debería sentirse cualquier setup de coding con IA — opinionado, estructurado y fuera de tu camino."',
      attribution: 'Construido y curado por la comunidad Gentleman Programming',
    },
  },

  finalCta: {
    eyebrow: '¿Listo?',
    headlineLines: ['Dejá de configurar.', 'Empezá a enviar.'],
    subheadline:
      'Un comando. Cualquier agente. Cualquier OS. El ecosistema Gentle AI configurado y listo.',
    ctaInstall: 'Instalá Gentle AI',
    ctaGithub: 'Dejá una estrella en GitHub',
  },

  // ─── Phase 2 — Páginas de soporte ──────────────────────────────────────
  nav2: {
    home: 'Inicio',
    features: 'Features',
    howItWorksPage: 'Cómo funciona',
    demo: 'Demo',
  },

  featuresPage: {
    meta: {
      title: 'Features — Gentle AI',
      description:
        'El catálogo completo de componentes y skills del ecosistema Gentle AI.',
    },
    hero: {
      eyebrow: 'Features',
      headline: 'Todo lo que viene en un solo comando.',
      subheadline:
        'Ocho componentes, tres familias de skills y todos los agentes soportados — conectados por un único instalador.',
    },
    components: {
      eyebrow: 'Componentes',
      headline: 'Combiná lo que necesites.',
      intro:
        'Gentle AI es modular. Empezás con un preset y agregás o sacás componentes individualmente.',
      items: [
        {
          id: 'engram',
          name: 'Engram',
          description:
            'Memoria persistente entre sesiones, compactaciones y máquinas. Decisiones, convenciones y bugs resueltos sobreviven para siempre.',
        },
        {
          id: 'sdd',
          name: 'SDD',
          description:
            'Spec-Driven Development — propose → spec → design → tasks → apply → verify. Estructura para cambios complejos.',
        },
        {
          id: 'skills',
          name: 'Skills',
          description:
            'Instrucciones de agente empaquetadas que se activan por contexto — testing, creación de PRs, code review, scaffolding.',
        },
        {
          id: 'persona',
          name: 'Persona',
          description:
            'Voz pedagógica consistente en cada fase. Directa, apasionada, enfocada en el crecimiento.',
        },
        {
          id: 'context7',
          name: 'Context7',
          description:
            'Documentación viva, pinned a versión, inyectada en el contexto del agente. Sin training data desactualizada.',
        },
        {
          id: 'gga',
          name: 'GGA',
          description:
            'Gentleman GitHub Agent — creación de issues, review de PRs, manejo de branches con workflows estructurados.',
        },
        {
          id: 'permissions',
          name: 'Permissions',
          description:
            'Allowlists granulares de qué herramientas puede correr el agente. Default-deny, opt-in para operaciones riesgosas.',
        },
        {
          id: 'theme',
          name: 'Theme',
          description:
            'Temas de terminal + editor curados que matchean la estética Gentleman en cada herramienta soportada.',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      headline: 'Tres familias de skills curadas.',
      intro:
        'Las Skills son instrucciones de agente reutilizables — las instalás una vez y todos los agentes soportados ganan la capacidad.',
      groups: [
        {
          id: 'sdd',
          name: 'Skills SDD',
          description:
            'Skills fase por fase que orquestan Spec-Driven Development de punta a punta.',
          examples: ['sdd-init', 'sdd-explore', 'sdd-propose', 'sdd-spec', 'sdd-design', 'sdd-tasks', 'sdd-apply', 'sdd-verify', 'sdd-archive'],
        },
        {
          id: 'foundation',
          name: 'Foundation Skills',
          description:
            'Tooling que beneficia a cualquier proyecto — registry, workflow de branch & PR, judgment day reviews.',
          examples: ['skill-creator', 'skill-registry', 'branch-pr', 'issue-creation', 'judgment-day'],
        },
        {
          id: 'community',
          name: 'Community Skills',
          description:
            'Aportadas por la comunidad para stacks y herramientas específicas. Versionadas, sandboxed, opt-in.',
          examples: ['go-testing', 'pest-testing', 'blade-alpine', 'permissions', 'sdd-onboard'],
        },
      ],
    },
    cta: {
      headline: '¿Listo para instalar?',
      subheadline:
        'Un comando trae todo lo de arriba. Elegí un preset y cambiás piezas después.',
      ctaInstall: 'Ver métodos de instalación',
      ctaHome: 'Volver al home',
    },
  },

  howItWorksPage: {
    meta: {
      title: 'Cómo funciona — Gentle AI',
      description:
        'El pipeline SDD, la capa de memoria Engram y el sistema de Skills que hacen que cualquier agente envíe código más rápido.',
    },
    hero: {
      eyebrow: 'Cómo funciona',
      headline: 'Estructura para shipping con IA.',
      subheadline:
        'Tres primitivas hacen el trabajo: un pipeline estructurado (SDD), una capa de memoria persistente (Engram) y un registro curado de skills. Juntas hacen que cualquier agente opere a calidad de producción.',
    },
    sddPipeline: {
      eyebrow: 'Pipeline SDD',
      headline: 'Nueve fases. Una sola dirección.',
      intro:
        'Spec-Driven Development es la capa de planificación estructurada para cambios sustanciales. Cada fase tiene una entrada, salida y responsabilidad claras — los agentes siguen el DAG, no sus alucinaciones.',
      phases: [
        { id: 'init', label: 'Init', description: 'Inicializa el contexto SDD en un proyecto. Detecta stack, convenciones, capacidades de testing.' },
        { id: 'explore', label: 'Explore', description: 'Investiga el codebase antes de comprometerte. Expone tradeoffs sin crear artefactos.' },
        { id: 'propose', label: 'Propose', description: 'Define qué querés hacer y por qué. Entry point de cualquier cambio sustancial.' },
        { id: 'spec', label: 'Spec', description: 'Escribe requisitos y escenarios. Define cómo se ve el éxito antes de tocar código.' },
        { id: 'design', label: 'Design', description: 'Decisiones de arquitectura y contratos de componentes. El plano, con los riesgos nombrados.' },
        { id: 'tasks', label: 'Tasks', description: 'Checklist ordenado con dependencias claras. Slicable, resumible.' },
        { id: 'apply', label: 'Apply', description: 'Implementa en lotes. Multi-sesión safe, progreso persistido.' },
        { id: 'verify', label: 'Verify', description: 'Valida contra spec. Reporta CRITICAL / WARNING / SUGGESTION antes del merge.' },
        { id: 'archive', label: 'Archive', description: 'Persiste el estado final y cierra el cambio. Los deltas de spec se mergean al main.' },
      ],
    },
    engram: {
      eyebrow: 'Engram',
      headline: 'Memoria que nunca se pierde.',
      intro:
        'Engram le da a tus agentes memoria persistente entre sesiones, compactaciones y máquinas. Decisiones, convenciones, bugs resueltos — los guardás una vez y los recordás siempre.',
      features: [
        {
          id: 'cross-session',
          label: 'Entre sesiones',
          description: 'Decisiones, bugs y convenciones persisten para siempre — basta de re-explicar contexto.',
        },
        {
          id: 'cross-tool',
          label: 'Entre herramientas',
          description: 'Funciona con Claude Code, OpenCode, Gemini CLI, Cursor y cualquier herramienta MCP-compatible.',
        },
        {
          id: 'cross-machine',
          label: 'Entre máquinas',
          description: 'Sync vía Git para compartir memoria entre todos tus dispositivos.',
        },
      ],
    },
    skillsCallout: {
      eyebrow: 'Skills',
      headline: 'Expertise reutilizable, a un install de distancia.',
      description:
        'Las Skills empaquetan instrucciones de agente para testing, creación de PRs, code review, scaffolding y más. Las instalás una vez — todos los agentes soportados ganan la capacidad automáticamente.',
      ctaSeeFeatures: 'Ver el catálogo completo',
    },
    cta: {
      headline: 'Vélo en acción.',
      subheadline:
        'Abrí el demo keyboard-driven y viví el flujo de instalación sin tocar tu terminal.',
      ctaDemo: 'Abrir el demo',
      ctaInstall: 'O saltá a instalación',
    },
  },

  demoPage: {
    meta: {
      title: 'Demo — Gentle AI',
      description:
        'Reconstrucción keyboard-driven del TUI de instalación de Gentle AI, en el navegador.',
    },
    hero: {
      eyebrow: 'Demo',
      headline: 'Probá el install sin instalar.',
      subheadline:
        'Reconstrucción del TUI real de `gentle-ai` en el navegador. Keyboard-driven. Honesto sobre ser una reconstrucción.',
    },
    honest: {
      label: 'Sobre este demo',
      body:
        'Esto es una reconstrucción en el navegador — la terminal real es más rápida, más linda y corre en tu máquina. Usalo para entender el flujo; instalá para tenerlo de verdad.',
    },
    mobileWarning: {
      title: 'Este demo es keyboard-driven.',
      body:
        'Abrilo en un navegador desktop para usar las teclas de abajo. La narrativa funciona en mobile, pero no podés manejarla.',
    },
    shortcuts: {
      label: 'Atajos',
      items: [
        { keys: ['↑', '↓'], description: 'Moverse entre opciones' },
        { keys: ['Enter'], description: 'Seleccionar / confirmar' },
        { keys: ['Esc'], description: 'Reiniciar el demo' },
        { keys: ['?'], description: 'Mostrar este panel' },
      ],
    },
    cta: {
      headline: '¿Te gustó?',
      subheadline: 'Instalá gentle-ai y corré la versión real en segundos.',
      ctaInstall: 'Ver métodos de instalación',
    },
  },

  footer: {
    tagline: 'Un comando. Cualquier agente. Cualquier OS.',
    copyright: '© 2026 Gentleman Programming. Licencia MIT.',
    columns: {
      sections: {
        label: 'Secciones',
        items: [
          { label: 'Cómo funciona', url: '#how-it-works' },
          { label: 'Agentes', url: '#agents' },
          { label: 'Presets', url: '#presets' },
          { label: 'Instalación', url: '#install' },
          { label: 'Comunidad', url: '#community' },
        ],
      },
      community: {
        label: 'Comunidad',
        items: [
          { label: 'GitHub', url: 'https://github.com/Gentleman-Programming/gentle-ai' },
          { label: 'Discord', url: 'https://discord.com/invite/3QVhF5vRsR' },
          { label: 'YouTube', url: 'https://www.youtube.com/@GentlemanProgramming' },
        ],
      },
      ecosystem: {
        label: 'Ecosistema',
        items: [
          {
            label: 'Gentleman.Dots',
            url: 'https://github.com/Gentleman-Programming/Gentleman.Dots',
          },
          {
            label: 'GGA — GitHub Agent',
            url: 'https://github.com/Gentleman-Programming/GGA',
          },
          {
            label: 'Gentleman Academy',
            url: 'https://gentleman-programming.com',
          },
        ],
      },
    },
    socialAria: {
      github: 'Abrir el repositorio de Gentle AI en GitHub',
      discord: 'Sumarse al Discord de Gentleman Programming',
      youtube: 'Abrir el canal de YouTube de Gentleman Programming',
    },
  },
} as const;
