# Changelog — All Shanti UNICEF Pitch

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
