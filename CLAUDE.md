# [Project Name]

[One-line description of the project.]

## Repository

| Key | Value |
|-----|-------|
| **Local path** | `~/Documents/github/[repo-name]` |
| **Remote** | `https://github.com/[org]/[repo-name].git` |
| **GitHub account** | `[account]` |
| **Production URL** | `[url or N/A]` |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [e.g. React 18, TypeScript, Vite] |
| Styling | [e.g. Tailwind CSS, Shadcn/ui] |
| Routing | [e.g. React Router v7] |
| State | [e.g. TanStack React Query] |
| Backend | [e.g. Supabase, Firebase, N/A] |
| Deployment | [e.g. Lovable Cloud, Vercel, N/A] |

## Commands

```bash
# [Adjust to your stack]
npm run dev          # Dev server
npm run build        # Production build
npm run lint         # Linter
npm run test         # Tests
# [deploy command]   # e.g. vercel deploy, fly deploy, gh workflow run deploy.yml
```

## Project Structure

```
src/
├── components/      # UI components
├── pages/           # Route-level pages
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── ...
```

## Architecture

### Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | [description] |

### Key Patterns

- [Document key architectural decisions here]

## Environment Variables

```
# Frontend
VITE_EXAMPLE_KEY=

# Backend (if applicable)
SERVICE_KEY=
```

## Git Workflow

> **NEVER push directly to `main`.**

1. Create a feature branch: `git checkout -b feat/description`
2. Ensure build and tests pass
3. Push: `git push -u origin feat/description`
4. Open PR: `gh pr create`
5. Wait for review and approval before merging

## Context Loading Policy

Before starting any task, load only the files relevant to that task type. Do not load all `/docs/` files by default.

| Task type | Load | Skip |
|---|---|---|
| Code — feature or fix | `docs/0_GROUND_RULES.md`, `docs/2_ARCHITECTURE.md` | `docs/1_BUSINESS_CONTEXT.md`, `docs/4_SEO_AND_AEO.md`, `docs/6_CONTENT_AND_SOCIAL.md` |
| Code — UI component | `docs/0_GROUND_RULES.md`, `docs/2_ARCHITECTURE.md`, `docs/3_UI_UX_GUIDELINES.md`, `docs/prompts.md` | `docs/1_BUSINESS_CONTEXT.md`, `docs/4_SEO_AND_AEO.md` |
| Code — UI copy / i18n | `docs/0_GROUND_RULES.md`, `docs/7_CONTENT_I18N.md` | `docs/2_ARCHITECTURE.md`, `docs/4_SEO_AND_AEO.md`, `docs/6_CONTENT_AND_SOCIAL.md` |
| Code — data / analysis | `docs/0_GROUND_RULES.md`, `docs/8_DATA_AND_ANALYSIS.md` | `docs/3_UI_UX_GUIDELINES.md`, `docs/4_SEO_AND_AEO.md`, `docs/6_CONTENT_AND_SOCIAL.md` |
| Code — DB / schema | `docs/0_GROUND_RULES.md`, `docs/2_ARCHITECTURE.md` | `docs/3_UI_UX_GUIDELINES.md`, `docs/4_SEO_AND_AEO.md`, `docs/6_CONTENT_AND_SOCIAL.md` |
| Security review | `docs/0_GROUND_RULES.md`, `SECURITY.md` | All others |
| SEO / copy / content | `docs/1_BUSINESS_CONTEXT.md`, `docs/4_SEO_AND_AEO.md`, `docs/6_CONTENT_AND_SOCIAL.md` | `docs/2_ARCHITECTURE.md`, `docs/3_UI_UX_GUIDELINES.md` |
| Roadmap / planning | `docs/5_ROADMAP_AND_TASKS.md`, `docs/1_BUSINESS_CONTEXT.md` | All others |
| Weekly health check | `docs/6_HEALTH_CHECK.md` | All others |
| Agent skill — create/edit | `docs/9_AGENT_SKILLS.md`, `skills/template/SKILL.md` | All others |
| Agent safety review | `docs/10_AGENT_SAFETY.md`, `SYSTEM_PROMPT.md` | All others |

> Always load `docs/0_GROUND_RULES.md` for any code task — it is the override document.

## Agent Skills

Este repo inclui um directório `skills/` com templates para criar Agent Skills específicas ao projecto. Skills globais (usadas em múltiplos repos) vivem em `~/.claude/skills/`.

Ver `docs/9_AGENT_SKILLS.md` para o guia completo (framework KEPT, estrutura, regras).

## INDEX.md — mandatory governance file

**Every repo governed by this template must have an `INDEX.md` at the root.** It is a live map of active initiatives, folder purpose, and archived work. Treat it with the same priority as `CHANGELOG.md` and `docs/5_ROADMAP_AND_TASKS.md`.

### How agents must use it

1. **Always read `INDEX.md` first** when entering a repo, before exploring with `find`/`grep`. It saves tokens and gives the canonical map.
2. **If `INDEX.md` has `[preencher]` placeholders** (never populated), offer to auto-populate it from the roadmap, stakeholder folder, and folder structure — before continuing with the user's task.
3. **If `INDEX.md` is stale** (date > 30 days or missing recent initiatives visible in roadmap/commits), flag it and offer to refresh.

### Maintenance obligations

- `/sync-repos` audits presence and auto-populates on first creation
- `/sync-docs` refreshes the INDEX on every sync (active initiatives from roadmap, archive from completed items, updates "Last updated")
- Every PR that adds, moves, or removes artifacts in `stakeholders/`, `pitches/`, `research/`, `decisions/`, `meetings/` (or equivalent) must update `INDEX.md` — same rule as CHANGELOG and roadmap

See `INDEX.md` for the current map.

## Related Projects

| Project | Relationship |
|---------|-------------|
| [repo] | [description] |
