# Changelog — All Shanti UNICEF Pitch

## 2026-09-23 — `ci.yml` actualizado para o template v5

Propagação depois de a organização `q-liri` esgotar os 2 000 minutos de Actions a 20/09. A causa não era daquele repo: o template já tinha, desde 09/09, o gate que impede um push a `main` de repetir a suite inteira — e a auditoria do `/sync-repos` verificava *features presentes* e não *versão*, por isso não via repos atrasados. Daí o `ci-template-version` no cabeçalho.

O que a v5 traz: o job `detect` passa a dizer também **o que mudou**, não só que stack existe, e os jobs caros só correm quando algo relevante mudou; um `typecheck` que não existia (os bundlers transpilam sem verificar tipos); e o passo de testes na forma honesta — corre quando o script existe, avisa quando não existe, em vez de a ausência passar por sucesso.

O `gitleaks` continua sem `needs` e sem filtro: corre em todos os eventos e todos os caminhos.

**E o gate revelou três vulnerabilidades `high` que ninguém via.** O `ci.yml` anterior não tinha auditoria nenhuma; o do template bloqueia. `nanoid` (dois avisos de ciclo infinito), `postcss` (leitura arbitrária de ficheiros `.map` por `sourceMappingURL` controlado) e `postcss-selector-parser` (negação de serviço por recursão). As três corrigem-se **dentro dos ranges declarados** — `npm audit fix` sobre o lockfile, sem tocar numa única dependência directa. Verificado a seguir: `npm audit` a zero e o `npm run build` a passar.
## 2026-09-10

### Changed

- Synced the shared AI-product governance baseline to policy v3.1 from template commit `5df996a`, preserving project-specific instructions and declared profile exceptions.


## 2026-09-01 — Piloto de redução do GitHub Actions

- Centralizada a detecção de Node/Deno num único job e movidos os portões para o nível do job, evitando runners que arrancavam apenas para fazer skip.
- `build-test` e `deno-check` passam a executar apenas em pull requests; `gitleaks` mantém a cobertura em pull requests e em pushes directos para `main`.

## [1.18] — 2026-07-19

### Changed

- Declared the product-and-evidence contract and profile.

---

## 2026-05-07 — Migração path local: ~/Documents/github → ~/devs/github (#19)

- Repo movido localmente para fora do iCloud Drive (eviction provocava falhas de acesso)
- Path references actualizadas em CLAUDE.md (mergeada em PR #19)

## [2026-04-07] — Integração de notas de revisão do colega (PR #9)

### Alterado
- Slide 01 (Cover): título actualizado para "Proposta de Investigação Clínica no Contexto de Tratamento de Suporte Contra a Malária"
- Slide 02 (Crise): contexto epidemiológico — parasitas Plasmodium, vector Anopheles, espécies P. falciparum/vivax, distribuição geográfica (~94% África)
- Slide 03 (Países): callout vulnerabilidade infantil (78% mortes são crianças <5, UNICEF 2025), vacinas RTS,S e R21 em rollout em 20+ países africanos
- Slide 04 (Económico): card impacto social — ~608K mortes anuais, 17,8M grávidas assistidas, meta erradicação 2050 (Lancet Commission, Global Fund Results Report 2025)

---

## [2026-04-02] — Liability-minimized rewrite + verificação de fontes (PRs #3–#6)

### Reescrita (PR #3)
- Slides 6, 7, 10, 11, 12 reescritos com framing de investigação clínica
- Removidos todos os claims de eficácia comprovada e segurança pediátrica sem base
- Timeline convertida de distribuição para roadmap clínico fase I/II
- Projecções de impacto (50K/500K/1M crianças) substituídas por marcos científicos

### Novo conteúdo (PR #4)
- Novo slide "Base Científica" com referências peer-reviewed:
  - Cinchona calisaya: Cano et al. (2017) PMC5360753; Gachelin et al. (2017) PMC5298425
  - Pau d'Arco: Andrade-Neto et al. (2004) PMID14980653; MDPI Molecules (2020) PMC7571111
  - Lycopodium clavatum: posicionado como ingrediente de suporte sem evidência antimalárica
- Correcção de expressões exageradas: slides 01, 08, 09, 13, 14
- Navegação mobile: setas overlay (md:hidden) + swipe touch

### Correcções (PRs #5–#6)
- Removidos contactos fictícios (contact@allshanti.com, allshanti.pt) — slide 14
- Slide 02: 94% → 95% Africa burden (WHO World Malaria Report 2025)
- Slide 04: substituídas projecções GDP não verificáveis por dados reais:
  - US$12 mil M/ano em perdas directas (RBM confirmado)
  - US$4,3 mil M funding gap em 2023 (WHO 2024 confirmado)
  - Removido rácio 1:40 não verificado

---

## [2026-03-31] — Build inicial + investigação de compliance

### Adicionado
- Apresentação web completa: 14 slides React/Vite/Tailwind/shadcn
- Dados actualizados WHO World Malaria Report 2025
- Paleta UNICEF + Águas de São Silvestre
- Navegação por teclado (←→), fullscreen (F), progress dots
- Deploy GitHub Pages: https://gtcuco-q-liri.github.io/all-shanti-unicef-pitch/
- Documentação inicial (ROADMAP, BUSINESS_CONTEXT, CHANGELOG)

### Investigação
- Análise multi-LLM de compliance regulatório
- Identificação de obstáculos críticos para parceria UNICEF
- Plano de reescrita liability-minimized documentado
