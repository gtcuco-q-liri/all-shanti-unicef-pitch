# all-shanti-unicef-pitch — Index

> **Last updated:** 2026-05-17
> **Mandatory governance file.** Must be updated in every PR that adds, moves, or removes content in `src/`, `docs/`, or equivalent artifact folders. Refreshed automatically by `/sync-docs` and created by `/sync-repos` where missing.

## Purpose

Mapa rápido do que existe e onde está. Duas audiências:
1. **Humano** — encontrar artifacts sem `grep` (slides, assets, decisões, research)
2. **Claude / agents** — ler UM ficheiro antes de explorar, poupando tokens

## 🟢 Active initiatives

[preencher]

## 📁 Folder map

- `src/` — código fonte React (componentes, páginas, slides)
- `docs/` — governance: roadmap, ground rules, health check, architecture
- `public/` — assets estáticos
- `.githooks/` — pre-commit secrets scanner (gitleaks)
- `tasks/` — `lessons.md` para correcções de sessão

## 🗄️ Archive

[preencher]

## Convention

Governance rules para este ficheiro:

1. **Obrigatório** em todos os repos governados por `ai-product-architecture-template`
2. Cada PR que adiciona, move ou remove conteúdo deve actualizar esta INDEX
3. A data "Last updated" deve reflectir o último update
4. Iniciativas movem de "Active" para "Archive" quando completas — não são removidas
5. Se uma entrada tiver >5 links, considerar README.md dedicado na pasta da iniciativa
6. `/sync-docs` refresca automaticamente este ficheiro a cada run
7. `/sync-repos` audita a presença e auto-popula onde falta
