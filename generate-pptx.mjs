import PptxGenJS from 'pptxgenjs'

const pptx = new PptxGenJS()
pptx.layout = 'LAYOUT_WIDE' // 13.333 x 7.5 inches

// ─── Color constants (6-digit hex only) ─────────────────────────────────────
const NAVY    = '0A44A1'
const UNICEF  = '009EDB'
const PINK    = 'E86EA6'
const WHITE   = 'FFFFFF'
const DARK    = '1a202c'
const RED     = 'EF4444'
const GREEN   = '16A34A'
const AMBER   = 'D97706'
const GRAY50  = 'F9FAFB'
const GRAY100 = 'F3F4F6'
const GRAY200 = 'E5E7EB'
const GRAY400 = '9CA3AF'
const GRAY500 = '6B7280'
const GRAY600 = '4B5563'
const BLUE50  = 'EFF6FF'
const BLUE100 = 'DBEAFE'
const BLUE200 = 'BFDBFE'
const BLUE300 = '93C5FD'
const PINK50  = 'FDF2F8'
const PINK100 = 'FCE7F3'
const AMBER50 = 'FFFBEB'
const AMBER100 = 'FEF3C7'
const RED50   = 'FEF2F2'
const RED100  = 'FEE2E2'
const GREEN50 = 'F0FDF4'
const GREEN100 = 'DCFCE7'
const INDIGO50  = 'EEF2FF'
const INDIGO100 = 'E0E7FF'
const NAVY_LIGHT = '1a5bd4'

// ─── Helper: header bar ──────────────────────────────────────────────────────
function addHeader(slide, opts = {}) {
  const {
    bgColor = NAVY,
    category = '',
    title = '',
    subtitle = '',
    categoryColor = BLUE300,
    h = 1.35,
  } = opts

  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h,
    fill: { color: bgColor },
    line: { type: 'none' },
  })

  let yOff = 0.22
  if (category) {
    slide.addText(category.toUpperCase(), {
      x: 0.9, y: yOff, w: 11.5, h: 0.22,
      fontSize: 8, bold: true, color: categoryColor, charSpacing: 2,
    })
    yOff += 0.26
  }

  slide.addText(title, {
    x: 0.9, y: yOff, w: 11.5, h: 0.52,
    fontSize: 26, bold: true, color: WHITE,
  })

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.9, y: yOff + 0.54, w: 11.5, h: 0.26,
      fontSize: 10, color: BLUE200,
    })
  }
}

// ─── Helper: source line ─────────────────────────────────────────────────────
function addSource(slide, text) {
  slide.addText(text, {
    x: 0.9, y: 7.1, w: 11.5, h: 0.22,
    fontSize: 7.5, color: GRAY400, italic: true,
  })
}

// ─── Helper: rounded rect card ───────────────────────────────────────────────
function addCard(slide, opts) {
  const { x, y, w, h, fill, borderColor = GRAY100 } = opts
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: borderColor, width: 1 },
    rectRadius: 0.1,
  })
}

// ─── Slide 01 — Cover ────────────────────────────────────────────────────────
function slide01() {
  const slide = pptx.addSlide()
  slide.background = { color: NAVY }

  // Decorative circles (semi-transparent look via light-colored fills)
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 10.5, y: -1.2, w: 3.2, h: 3.2,
    fill: { color: PINK, transparency: 85 },
    line: { type: 'none' },
  })
  slide.addShape(pptx.ShapeType.ellipse, {
    x: -1.5, y: 5.5, w: 3.2, h: 3.2,
    fill: { color: UNICEF, transparency: 85 },
    line: { type: 'none' },
  })

  // Logo circle
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 5.92, y: 1.15, w: 1.5, h: 1.5,
    fill: { color: PINK },
    line: { type: 'none' },
  })
  slide.addText('AS', {
    x: 5.92, y: 1.2, w: 1.5, h: 1.4,
    fontSize: 26, bold: true, color: WHITE, align: 'center', valign: 'middle',
  })

  slide.addText('All Shanti', {
    x: 1, y: 2.85, w: 11.3, h: 0.95,
    fontSize: 52, bold: true, color: WHITE, align: 'center',
  })

  slide.addText('Proposta de Investigação Clínica no Contexto de Tratamento de Suporte Contra a Malária', {
    x: 1.5, y: 3.9, w: 10.3, h: 0.6,
    fontSize: 14, color: BLUE200, align: 'center', charSpacing: 1,
  })

  // Pink divider
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.92, y: 4.65, w: 1.5, h: 0.07,
    fill: { color: PINK }, line: { type: 'none' },
  })

  slide.addText('Águas de São Silvestre, SA', {
    x: 1, y: 4.85, w: 11.3, h: 0.32,
    fontSize: 12, bold: true, color: BLUE200, align: 'center',
  })
  slide.addText('Apresentação à UNICEF • 2026', {
    x: 1, y: 5.2, w: 11.3, h: 0.28,
    fontSize: 10, color: BLUE300, align: 'center',
  })
  slide.addText('CONFIDENCIAL', {
    x: 1, y: 6.85, w: 11.3, h: 0.22,
    fontSize: 8, color: BLUE300, align: 'center', charSpacing: 3,
  })
}

// ─── Slide 02 — Crisis ───────────────────────────────────────────────────────
function slide02() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: NAVY, category: 'Contexto', title: 'A Crise de Malária em África', categoryColor: BLUE300 })

  const stats = [
    { value: '282M',  label: 'casos globais em 2024',                      color: UNICEF },
    { value: '610K',  label: 'mortes registadas em 2024',                   color: PINK   },
    { value: '95%',   label: 'dos casos mundiais ocorrem em África',         color: NAVY   },
    { value: '75%',   label: 'das vítimas mortais são crianças < 5 anos',   color: PINK   },
  ]

  const positions = [
    { x: 0.4,  y: 1.5  },
    { x: 6.85, y: 1.5  },
    { x: 0.4,  y: 4.0  },
    { x: 6.85, y: 4.0  },
  ]

  stats.forEach((s, i) => {
    const p = positions[i]
    addCard(slide, { x: p.x, y: p.y, w: 6.1, h: 2.2, fill: GRAY50 })
    slide.addText(s.value, { x: p.x + 0.3, y: p.y + 0.2, w: 5.5, h: 1.1, fontSize: 44, bold: true, color: s.color })
    slide.addText(s.label, { x: p.x + 0.3, y: p.y + 1.3, w: 5.5, h: 0.55, fontSize: 12, color: DARK, bold: true })
  })

  slide.addText(
    'A malária é causada por parasitas Plasmodium, transmitidos pela picada de mosquitos Anopheles fêmea. As duas espécies principais são P. falciparum — a mais letal, dominante em África — e P. vivax, a mais comum fora de África subsariana. A distribuição geográfica concentra-se em África (~94% dos casos), seguida do Sudeste Asiático (~2%) e das regiões do Mediterrâneo Oriental e Américas.',
    { x: 0.4, y: 6.2, w: 12.5, h: 0.65, fontSize: 9, color: GRAY500, wrap: true }
  )

  addSource(slide, 'Fonte: WHO World Malaria Report 2025')
}

// ─── Slide 03 — Countries ────────────────────────────────────────────────────
function slide03() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, {
    bgColor: UNICEF, category: 'Epidemiologia', title: 'Países Mais Afetados',
    subtitle: '% das mortes na região africana — WHO 2025', categoryColor: BLUE100, h: 1.45,
  })

  const countries = [
    { name: 'Nigéria',                     pct: 31.9, color: UNICEF  },
    { name: 'RDCongo',                     pct: 11.7, color: PINK    },
    { name: 'Niger',                       pct: 6.1,  color: NAVY    },
    { name: 'Uganda, Moçambique e outros', pct: 50.3, color: '94A3B8' },
  ]

  const barAreaW = 8.5
  const maxPct   = 50.3
  const barStartX = 1.9
  const barH      = 0.42

  countries.forEach((c, i) => {
    const y = 1.6 + i * 0.68
    slide.addText(c.name, { x: 0.3, y: y + 0.02, w: 1.5, h: barH, fontSize: 10, bold: true, color: DARK, align: 'right' })
    slide.addShape(pptx.ShapeType.roundRect, {
      x: barStartX, y, w: barAreaW, h: barH,
      fill: { color: GRAY100 }, line: { type: 'none' }, rectRadius: 0.08,
    })
    const filledW = Math.max(0.8, (c.pct / maxPct) * barAreaW)
    slide.addShape(pptx.ShapeType.roundRect, {
      x: barStartX, y, w: filledW, h: barH,
      fill: { color: c.color }, line: { type: 'none' }, rectRadius: 0.08,
    })
    slide.addText(`${c.pct}%`, {
      x: barStartX + filledW - 0.75, y: y + 0.02, w: 0.7, h: barH - 0.04,
      fontSize: 10, bold: true, color: WHITE, align: 'right',
    })
  })

  // Blue callout
  addCard(slide, { x: 0.3, y: 4.52, w: 12.7, h: 0.72, fill: BLUE50, borderColor: BLUE100 })
  slide.addText('3 países — Nigéria, RDCongo e Niger — representam ~50% de todas as mortes por malária em África.', {
    x: 0.5, y: 4.6, w: 12.3, h: 0.56, fontSize: 11, color: NAVY, bold: true,
  })

  // Pink callout
  addCard(slide, { x: 0.3, y: 5.35, w: 12.7, h: 1.05, fill: PINK50, borderColor: PINK100 })
  slide.addText('78% das mortes por malária são crianças com menos de 5 anos — a cada minuto, uma criança morre de malária.', {
    x: 0.5, y: 5.42, w: 12.3, h: 0.34, fontSize: 10, bold: true, color: PINK,
  })
  slide.addText('As vacinas RTS,S e R21 estão agora em fase de rollout em mais de 20 países africanos, com resultados significativos na redução da mortalidade grave.', {
    x: 0.5, y: 5.78, w: 12.3, h: 0.48, fontSize: 9.5, color: GRAY600, wrap: true,
  })

  addSource(slide, 'Fonte: WHO World Malaria Report 2025')
}

// ─── Slide 04 — Economic ─────────────────────────────────────────────────────
function slide04() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: NAVY, category: 'Impacto', title: 'Impacto Económico Devastador', categoryColor: BLUE300 })

  // Red card
  addCard(slide, { x: 0.35, y: 1.55, w: 6.05, h: 2.55, fill: RED50, borderColor: RED100 })
  slide.addText('CUSTO ANUAL DA MALÁRIA', { x: 0.55, y: 1.68, w: 5.6, h: 0.22, fontSize: 8, bold: true, color: RED, charSpacing: 1 })
  slide.addText('US$ 12 mil M', { x: 0.55, y: 1.92, w: 5.6, h: 0.7, fontSize: 34, bold: true, color: RED })
  slide.addText('em perdas directas por ano em África', { x: 0.55, y: 2.64, w: 5.6, h: 0.3, fontSize: 10, color: GRAY600 })
  slide.addText('• Perdas de produtividade laboral\n• Custos de saúde e investimento perdido', { x: 0.55, y: 3.0, w: 5.6, h: 0.82, fontSize: 10, color: GRAY600, breakLine: true })

  // Green card
  addCard(slide, { x: 6.95, y: 1.55, w: 6.0, h: 2.55, fill: GREEN50, borderColor: GREEN100 })
  slide.addText('GAP DE FINANCIAMENTO (2023)', { x: 7.15, y: 1.68, w: 5.6, h: 0.22, fontSize: 8, bold: true, color: GREEN, charSpacing: 1 })
  slide.addText('US$ 4,3 mil M', { x: 7.15, y: 1.92, w: 5.6, h: 0.7, fontSize: 34, bold: true, color: GREEN })
  slide.addText('em falta para atingir metas WHO 2030', { x: 7.15, y: 2.64, w: 5.6, h: 0.3, fontSize: 10, color: GRAY600 })
  slide.addText('• Fundos disponíveis: US$ 4 mil M em 2023\n• Necessidade estimada: US$ 8,3 mil M/ano', { x: 7.15, y: 3.0, w: 5.6, h: 0.82, fontSize: 10, color: GRAY600, breakLine: true })

  // Amber social impact card
  addCard(slide, { x: 0.35, y: 4.28, w: 12.6, h: 1.55, fill: AMBER50, borderColor: AMBER100 })
  slide.addText('IMPACTO SOCIAL', { x: 0.55, y: 4.38, w: 5, h: 0.22, fontSize: 8, bold: true, color: AMBER, charSpacing: 1 })

  const cols = [
    { val: '~608 000', desc: 'mortes anuais — concentradas em populações com acesso limitado a cuidados de saúde, sobretudo crianças e grávidas' },
    { val: '17,8M',    desc: 'mulheres grávidas assistidas em 2025 através de intervenções de prevenção e tratamento' },
    { val: '2050',     desc: 'meta de erradicação global — requer inovação urgente em redes mosquiteiras de nova geração e novos fármacos face à resistência crescente e ao impacto de conflitos' },
  ]
  cols.forEach((c, i) => {
    const cx = 0.55 + i * 4.18
    slide.addText(c.val, { x: cx, y: 4.62, w: 4.0, h: 0.46, fontSize: 22, bold: true, color: AMBER })
    slide.addText(c.desc, { x: cx, y: 5.12, w: 4.0, h: 0.58, fontSize: 8.5, color: GRAY600, wrap: true })
  })

  // Dark banner
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.35, y: 6.0, w: 12.6, h: 0.52,
    fill: { color: NAVY }, line: { type: 'none' }, rectRadius: 0.08,
  })
  slide.addText('Investigação em novas abordagens terapêuticas é URGENTE E SUBFINANCIADA face à resistência crescente', {
    x: 0.55, y: 6.05, w: 12.2, h: 0.44, fontSize: 12, bold: true, color: WHITE, align: 'center',
  })

  addSource(slide, 'Fonte: RBM Partnership to End Malaria; WHO World Malaria Report 2024; The Lancet Commission; Global Fund Results Report 2025')
}

// ─── Slide 05 — Treatment ────────────────────────────────────────────────────
function slide05() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: UNICEF, category: 'Problema', title: 'Custos e Limitações dos Tratamentos Atuais', categoryColor: BLUE100 })

  const items = [
    { icon: '💊', title: 'Artemisina (standard)',  value: 'US$ 1–3',        desc: 'por tratamento completo',                                            borderColor: UNICEF },
    { icon: '🧪', title: 'ACT combinadas',          value: 'US$ 0,25–1,50', desc: 'por dose adulto no sector público',                                   borderColor: NAVY   },
    { icon: '🚫', title: 'Acesso limitado',          value: '43%',           desc: 'da pop. subsaariana sem proteção adequada',                           borderColor: PINK   },
    { icon: '⚠️', title: 'Resistência crescente',   value: '8 países',      desc: 'com resistência parcial confirmada ou suspeita em África (WHO 2025)',  borderColor: RED    },
  ]

  const positions = [
    { x: 0.35, y: 1.55 },
    { x: 6.85, y: 1.55 },
    { x: 0.35, y: 4.3  },
    { x: 6.85, y: 4.3  },
  ]

  items.forEach((item, i) => {
    const p = positions[i]
    slide.addShape(pptx.ShapeType.rect, {
      x: p.x, y: p.y, w: 0.1, h: 2.45,
      fill: { color: item.borderColor }, line: { type: 'none' },
    })
    slide.addShape(pptx.ShapeType.roundRect, {
      x: p.x + 0.1, y: p.y, w: 5.95, h: 2.45,
      fill: { color: GRAY50 }, line: { color: GRAY100, width: 1 }, rectRadius: 0.1,
    })
    slide.addText(item.icon + '  ' + item.title.toUpperCase(), { x: p.x + 0.3, y: p.y + 0.2, w: 5.5, h: 0.3, fontSize: 9, bold: true, color: GRAY500, charSpacing: 0.5 })
    slide.addText(item.value, { x: p.x + 0.3, y: p.y + 0.55, w: 5.5, h: 0.8, fontSize: 30, bold: true, color: DARK })
    slide.addText(item.desc, { x: p.x + 0.3, y: p.y + 1.45, w: 5.5, h: 0.72, fontSize: 10, color: GRAY600 })
  })

  addSource(slide, 'Fonte: WHO Malaria Treatment Guidelines 2025; WHO World Malaria Report 2025')
}

// ─── Slide 06 — Solution ─────────────────────────────────────────────────────
function slide06() {
  const slide = pptx.addSlide()
  slide.background = { color: PINK }

  // Navy overlay
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: '100%',
    fill: { color: NAVY, transparency: 55 }, line: { type: 'none' },
  })

  // Divider top
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.42, y: 0.85, w: 2.5, h: 0.06,
    fill: { color: BLUE200, transparency: 50 }, line: { type: 'none' },
  })

  slide.addText('All Shanti', {
    x: 1, y: 1.1, w: 11.3, h: 1.1,
    fontSize: 48, bold: true, color: WHITE, align: 'center',
  })
  slide.addText('Uma Candidatura à Investigação Clínica', {
    x: 1, y: 2.2, w: 11.3, h: 0.5,
    fontSize: 20, color: PINK100, align: 'center',
  })

  slide.addText(
    'Suplemento alimentar desenvolvido pela Águas de São Silvestre, SA, com base em evidência histórica da Cinchona calisaya — proposto para investigação clínica formal em parceria internacional.',
    { x: 2, y: 2.9, w: 9.3, h: 0.75, fontSize: 13, color: WHITE, align: 'center', wrap: true }
  )

  const cards = [
    { label: 'Base',      value: 'Água Mineral Natural' },
    { label: 'Origem',    value: 'Plantas medicinais naturais' },
    { label: 'Logística', value: 'Sem cadeia de frio' },
  ]
  cards.forEach((card, i) => {
    const cx = 0.9 + i * 3.9
    slide.addShape(pptx.ShapeType.roundRect, {
      x: cx, y: 3.88, w: 3.6, h: 1.1,
      fill: { color: WHITE, transparency: 88 },
      line: { color: BLUE200, width: 1 },
      rectRadius: 0.1,
    })
    slide.addText(card.label.toUpperCase(), { x: cx + 0.1, y: 3.95, w: 3.4, h: 0.25, fontSize: 8, color: BLUE300, align: 'center', charSpacing: 1 })
    slide.addText(card.value, { x: cx + 0.1, y: 4.25, w: 3.4, h: 0.55, fontSize: 12, bold: true, color: WHITE, align: 'center' })
  })

  // Bottom divider
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.42, y: 5.2, w: 2.5, h: 0.06,
    fill: { color: BLUE200, transparency: 50 }, line: { type: 'none' },
  })
}

// ─── Slide 07 — Advantages ───────────────────────────────────────────────────
function slide07() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: PINK, category: 'Produto', title: 'Vantagens do All Shanti', categoryColor: PINK100 })

  const advantages = [
    { icon: '📜', title: 'Evidência histórica documentada', desc: 'A Cinchona calisaya tem uso antimalárico documentado desde o século XVII — base para protocolo de investigação' },
    { icon: '💡', title: 'Formulação singular',              desc: 'Combinação única de ingredientes naturais em água mineral de São Silvestre — a investigar em ensaios controlados' },
    { icon: '🔍', title: 'Perfil de segurança a determinar', desc: 'Testes de segurança e tolerância — incluindo populações pediátricas — a realizar no âmbito do programa clínico' },
    { icon: '🚀', title: 'Potencial de escalabilidade',      desc: 'Se validado clinicamente, produção escalável para contexto africano de alta carga' },
    { icon: '🚛', title: 'Sem cadeia de frio',               desc: 'Distribuição simplificada — vantagem logística relevante para regiões remotas, sujeita a validação operacional' },
    { icon: '📄', title: 'Revisão bibliográfica em curso',   desc: 'Literatura sobre alcalóides quinínicos como fundamento do protocolo de ensaios fase I/II' },
  ]

  const cols  = 3
  const cardW = 4.05
  const cardH = 2.3

  advantages.forEach((a, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const cx  = 0.35 + col * (cardW + 0.2)
    const cy  = 1.55 + row * (cardH + 0.18)

    addCard(slide, { x: cx, y: cy, w: cardW, h: cardH, fill: GRAY50 })
    slide.addText(a.icon, { x: cx + 0.2, y: cy + 0.2, w: 0.55, h: 0.55, fontSize: 22 })
    slide.addText(a.title, { x: cx + 0.2, y: cy + 0.82, w: cardW - 0.4, h: 0.44, fontSize: 11, bold: true, color: DARK })
    slide.addText(a.desc, { x: cx + 0.2, y: cy + 1.3, w: cardW - 0.4, h: 0.82, fontSize: 9, color: GRAY500, wrap: true })
  })
}

// ─── Slide Science — Scientific Evidence ────────────────────────────────────
function slideScience() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, {
    bgColor: NAVY, category: 'Evidência', title: 'Base Científica Publicada',
    subtitle: 'O que a literatura peer-reviewed documenta sobre os ingredientes activos',
    categoryColor: BLUE200, h: 1.45,
  })

  const evidence = [
    {
      ingredient: 'Cinchona calisaya', color: UNICEF, bg: BLUE50, borderColor: BLUE200,
      level: 'Forte',
      claims: [
        'Fonte botânica da quinina — até 6,5% de alcalóides totais (Cano et al., Frontiers in Plant Science, 2017)',
        'Quinina: mecanismo de acção contra P. falciparum documentado (inibição da hemozoína)',
        'Quinina na Lista de Medicamentos Essenciais da OMS — 2ª linha para malária grave',
        'Uso antimalárico documentado desde o séc. XVII — revista JRSM (Gachelin et al., 2017)',
      ],
      gap: 'Sem ensaios modernos do extracto completo (não da quinina isolada)',
    },
    {
      ingredient: "Pau d'Arco (Tabebuia)", color: PINK, bg: PINK50, borderColor: PINK100,
      level: 'Moderada',
      claims: [
        'Lapachol e beta-lapachona: actividade antiplasmodial in vitro documentada',
        'Mecanismo: inibição da cadeia respiratória mitocondrial do parasita (análogo ao atovaquone)',
        'Andrade-Neto et al., Phytomedicine (2004) — IC50 1,67–9,44 μM vs. P. falciparum resistente',
        'Revisão sistemática: MDPI Molecules (2020) — PMC7571111',
      ],
      gap: 'Sem ensaios clínicos humanos; selectividade vs. células humanas a confirmar',
    },
    {
      ingredient: 'Lycopodium clavatum', color: GRAY500, bg: GRAY50, borderColor: GRAY200,
      level: 'Limitada',
      claims: [
        'Actividade antioxidante e anti-inflamatória documentada em literatura revisada',
        'Uso tradicional como tónico digestivo e adaptogénico',
      ],
      gap: 'Sem evidência antimalárica publicada — posicionado como ingrediente de suporte',
    },
  ]

  const cardH    = [1.55, 1.55, 1.05]
  const yOffsets = [1.55, 3.2, 4.85]

  evidence.forEach((e, idx) => {
    const cy = yOffsets[idx]
    const ch = cardH[idx]

    addCard(slide, { x: 0.35, y: cy, w: 12.6, h: ch, fill: e.bg, borderColor: e.borderColor })
    slide.addText(e.ingredient, { x: 0.55, y: cy + 0.12, w: 2.2, h: 0.3, fontSize: 11, bold: true, italic: true, color: e.color })
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.55, y: cy + 0.48, w: 1.3, h: 0.28,
      fill: { color: e.bg }, line: { color: e.borderColor, width: 1 }, rectRadius: 0.06,
    })
    slide.addText('Evidência ' + e.level, { x: 0.55, y: cy + 0.49, w: 1.3, h: 0.26, fontSize: 8, bold: true, color: e.color, align: 'center' })

    e.claims.forEach((c, j) => {
      slide.addText('›  ' + c, { x: 2.95, y: cy + 0.1 + j * 0.3, w: 9.8, h: 0.28, fontSize: 9, color: GRAY600 })
    })

    slide.addText('Lacuna: ' + e.gap, {
      x: 2.95, y: cy + ch - 0.32, w: 9.8, h: 0.28, fontSize: 8.5, italic: true, color: GRAY500,
    })
  })

  addSource(slide, 'Fontes: Cano et al. (2017) PMC5360753 · Gachelin et al. (2017) PMC5298425 · Andrade-Neto et al. (2004) PMID14980653 · MDPI Molecules (2020) PMC7571111')
}

// ─── Slide 08 — Alignment ────────────────────────────────────────────────────
function slide08() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: NAVY, category: 'Parceria', title: 'Alinhamento com Prioridades UNICEF', categoryColor: BLUE300 })

  const alignments = [
    { icon: '👶', priority: 'Proteção infantil',      desc: '75% das vítimas mortais africanas são crianças < 5 anos (WHO 2025)',                                    match: 'Perfil de segurança pediátrica a estabelecer — incluso no protocolo fase I/II' },
    { icon: '📉', priority: 'Redução da mortalidade', desc: 'Reduzir mortalidade infantil na África Subsaariana — ODS 3',                                            match: 'Se validado clinicamente: potencial de escala às populações mais afectadas' },
    { icon: '⚖️', priority: 'Equidade no acesso',     desc: '43% da população sem proteção adequada — foco em comunidades remotas',                                  match: 'Vantagem logística a confirmar: formulação aquosa sem cadeia de frio' },
    { icon: '🧬', priority: 'Resposta à resistência', desc: 'Resistência à artemisina confirmada em 8 países africanos — necessidade urgente de alternativas',        match: 'Alcalóides quinínicos da Cinchona: mecanismo de acção distinto da artemisina (documentado)' },
  ]

  alignments.forEach((a, i) => {
    const cy = 1.55 + i * 1.32
    addCard(slide, { x: 0.35, y: cy, w: 12.6, h: 1.15, fill: GRAY50 })
    slide.addText(a.icon, { x: 0.5, y: cy + 0.2, w: 0.55, h: 0.55, fontSize: 22 })
    slide.addText(a.priority, { x: 1.15, y: cy + 0.12, w: 5.2, h: 0.3, fontSize: 11, bold: true, color: DARK })
    slide.addText(a.desc, { x: 1.15, y: cy + 0.46, w: 5.2, h: 0.55, fontSize: 9, color: GRAY500, wrap: true })
    addCard(slide, { x: 6.6, y: cy + 0.12, w: 6.05, h: 0.88, fill: BLUE50, borderColor: BLUE100 })
    slide.addText('✓  ' + a.match, { x: 6.75, y: cy + 0.18, w: 5.75, h: 0.76, fontSize: 9.5, color: NAVY, wrap: true })
  })
}

// ─── Slide 09 — Strategy ─────────────────────────────────────────────────────
function slide09() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, {
    bgColor: UNICEF, category: 'Investigação', title: 'Países Piloto para Investigação Clínica',
    subtitle: '3 países seleccionados por carga de malária, capacidade regulatória e presença UNICEF',
    categoryColor: BLUE100, h: 1.45,
  })

  const countries = [
    { flag: '🇳🇬', name: 'Nigéria',    borderColor: UNICEF, bgColor: BLUE50,
      why: '31.9% das mortes africanas — maior carga global. UNICEF e Gavi activos desde 2024. NAFDAC com track record de aprovação ágil.' },
    { flag: '🇺🇬', name: 'Uganda',    borderColor: PINK,  bgColor: PINK50,
      why: 'Maior rollout de vacina anti-malária de África (Abr 2025, 19º país). Malaria Consortium + UNICEF activos em 25 distritos. Forte capacidade regulatória.' },
    { flag: '🇲🇿', name: 'Moçambique', borderColor: NAVY,  bgColor: BLUE50,
      why: 'Vacina introduzida em 2024. Sul de África — diversidade geográfica. Plataforma digital upSCALE para suporte a trabalhadores de saúde.' },
  ]

  countries.forEach((c, i) => {
    const cy = 1.55 + i * 1.45
    slide.addShape(pptx.ShapeType.rect, { x: 0.35, y: cy, w: 0.1, h: 1.2, fill: { color: c.borderColor }, line: { type: 'none' } })
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.45, y: cy, w: 12.5, h: 1.2,
      fill: { color: c.bgColor }, line: { color: GRAY100, width: 1 }, rectRadius: 0.1,
    })
    slide.addText(c.flag, { x: 0.6, y: cy + 0.22, w: 0.7, h: 0.6, fontSize: 26 })
    slide.addText(c.name, { x: 1.4, y: cy + 0.1, w: 3.0, h: 0.34, fontSize: 13, bold: true, color: DARK })
    slide.addText(c.why, { x: 1.4, y: cy + 0.5, w: 11.2, h: 0.6, fontSize: 10, color: GRAY600, wrap: true })
  })

  addCard(slide, { x: 0.35, y: 6.0, w: 12.6, h: 0.62, fill: GRAY50, borderColor: GRAY200 })
  slide.addText(
    'Centros clínicos parceiros em cada país  •  Comités de ética locais e supervisão OMS/UNICEF  •  Plataforma de dados para recolha e análise clínica',
    { x: 0.55, y: 6.08, w: 12.2, h: 0.46, fontSize: 10, bold: true, color: DARK, align: 'center' }
  )
}

// ─── Slide 10 — Timeline ─────────────────────────────────────────────────────
function slide10() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, {
    bgColor: NAVY, category: 'Calendário', title: 'Roadmap de Investigação Clínica',
    subtitle: 'Início: Setembro 2026 → Decisão de escala: 2030 (condicionada a resultados)',
    categoryColor: BLUE200, h: 1.45,
  })

  const phases = [
    { period: 'SET–DEZ 2026', title: 'Protocolo & Ética',         color: UNICEF, phase: '01',
      items: ['Desenho do protocolo de investigação fase I/II', 'Submissão a comités de ética (NG, UG, MZ)', 'Parceria com universidades e centros clínicos locais'] },
    { period: 'JAN–JUN 2027', title: 'Ensaio Fase I — Segurança', color: PINK,   phase: '02',
      items: ['Recrutamento de participantes adultos (coorte inicial)', 'Avaliação de segurança, tolerância e farmacocinética', 'Supervisão independente OMS / IRB'] },
    { period: 'JUL–DEZ 2027', title: 'Análise Intermédia',        color: NAVY,   phase: '03',
      items: ['Relatório de segurança independente', 'Decisão baseada em dados: avançar, ajustar ou parar', 'Partilha de resultados com UNICEF e parceiros'] },
    { period: '2028',          title: 'Ensaio Fase II — Eficácia', color: UNICEF, phase: '04',
      items: ['Se fase I aprovada: ensaio de eficácia controlado', 'Expansão a populações vulneráveis (sujeito a dados de segurança)', 'Primeira publicação peer-review'] },
    { period: '2029',          title: 'Avaliação Regulatória',     color: PINK,   phase: '05',
      items: ['Submissão a SRA (EMA/FDA) ou equivalente regional', 'Processo WHO Prequalification (se resultados positivos)', 'Publicações científicas adicionais'] },
    { period: '2030',          title: 'Decisão de Escala',         color: NAVY,   phase: '06',
      items: ['Avaliação de viabilidade para procurement UNICEF', 'Plano de acesso a países de alta carga (condicionado a aprovação)', 'Relatório ODS e impacto documentado'] },
  ]

  const cardW = 4.0
  const cardH = 2.35

  phases.forEach((p, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const cx  = 0.35 + col * (cardW + 0.22)
    const cy  = 1.55 + row * (cardH + 0.15)

    addCard(slide, { x: cx, y: cy, w: cardW, h: cardH, fill: GRAY50 })

    slide.addShape(pptx.ShapeType.ellipse, { x: cx - 0.18, y: cy - 0.2, w: 0.42, h: 0.42, fill: { color: p.color }, line: { type: 'none' } })
    slide.addText(p.phase, { x: cx - 0.18, y: cy - 0.19, w: 0.42, h: 0.4, fontSize: 9, bold: true, color: WHITE, align: 'center' })

    slide.addText(p.period, { x: cx + 0.15, y: cy + 0.12, w: cardW - 0.3, h: 0.28, fontSize: 9, bold: true, color: p.color, charSpacing: 0.5 })
    slide.addText(p.title, { x: cx + 0.15, y: cy + 0.42, w: cardW - 0.3, h: 0.35, fontSize: 11, bold: true, color: DARK })

    p.items.forEach((item, j) => {
      slide.addText('›  ' + item, { x: cx + 0.15, y: cy + 0.82 + j * 0.47, w: cardW - 0.3, h: 0.44, fontSize: 8.5, color: GRAY600, wrap: true })
    })
  })
}

// ─── Slide 11 — Impact ───────────────────────────────────────────────────────
function slide11() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: PINK, category: 'Resultados', title: 'Marcos Científicos e Regulatórios', categoryColor: PINK100 })

  const metrics = [
    { value: 'Fase I',  label: 'Dados de segurança e tolerância', sub: '2027 — adultos, coorte inicial',    color: UNICEF, bg: BLUE50,   border: BLUE100   },
    { value: 'Fase II', label: 'Dados de eficácia controlada',    sub: '2028 — sujeito a fase I aprovada',  color: PINK,   bg: PINK50,   border: PINK100   },
    { value: 'Reg.',    label: 'Avaliação regulatória WHO',        sub: '2029–2030 — se resultados positivos', color: NAVY, bg: INDIGO50, border: INDIGO100 },
  ]

  metrics.forEach((m, i) => {
    const cx = 0.35 + i * 4.35
    addCard(slide, { x: cx, y: 1.55, w: 4.05, h: 2.5, fill: m.bg, borderColor: m.border })
    slide.addText(m.value, { x: cx, y: 1.8, w: 4.05, h: 1.0, fontSize: 44, bold: true, color: m.color, align: 'center' })
    slide.addText(m.label, { x: cx + 0.1, y: 2.9, w: 3.85, h: 0.36, fontSize: 11, bold: true, color: DARK, align: 'center' })
    slide.addText(m.sub, { x: cx + 0.1, y: 3.3, w: 3.85, h: 0.5, fontSize: 9.5, color: GRAY500, align: 'center', wrap: true })
  })

  // Progress bar section
  addCard(slide, { x: 0.35, y: 4.3, w: 12.6, h: 2.42, fill: GRAY50 })
  slide.addText('FASES DE INVESTIGAÇÃO — DECISÕES CONDICIONADAS A DADOS', {
    x: 0.55, y: 4.42, w: 12.2, h: 0.25, fontSize: 8, bold: true, color: GRAY500, charSpacing: 0.5,
  })

  const bars    = [
    { pct: 5,   color: NAVY },
    { pct: 20,  color: NAVY },
    { pct: 50,  color: PINK },
    { pct: 100, color: UNICEF },
  ]
  const labels  = ['2026', '2027', '2028–29', '2030']
  const barH    = 1.3

  bars.forEach((b, i) => {
    const bx = 0.55 + i * 3.12
    const bh = barH * (b.pct / 100)
    const by = 4.78 + (barH - bh)
    slide.addShape(pptx.ShapeType.roundRect, {
      x: bx, y: by, w: 2.85, h: bh,
      fill: { color: b.color }, line: { type: 'none' }, rectRadius: 0.04,
    })
    slide.addText(labels[i], { x: bx, y: 6.15, w: 2.85, h: 0.3, fontSize: 9, color: GRAY400, align: 'center' })
  })
}

// ─── Slide 12 — Partnership ──────────────────────────────────────────────────
function slide12() {
  const slide = pptx.addSlide()
  slide.background = { color: UNICEF }

  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: '100%',
    fill: { color: NAVY, transparency: 55 }, line: { type: 'none' },
  })

  slide.addText('PROPOSTA', { x: 1, y: 0.4, w: 11.3, h: 0.28, fontSize: 8, color: BLUE200, align: 'center', charSpacing: 2 })
  slide.addText('All Shanti  +  UNICEF', { x: 1, y: 0.75, w: 11.3, h: 0.95, fontSize: 36, bold: true, color: WHITE, align: 'center' })
  slide.addText('Uma parceria de investigação para determinar o potencial clínico do All Shanti', {
    x: 1.5, y: 1.72, w: 10.3, h: 0.5, fontSize: 13, color: BLUE100, align: 'center',
  })

  slide.addShape(pptx.ShapeType.rect, { x: 6.17, y: 2.3, w: 1.0, h: 0.06, fill: { color: PINK }, line: { type: 'none' } })

  const pillars = [
    { icon: '🔬', title: 'Co-investigação clínica',     desc: 'Protocolo conjunto fase I/II com supervisão UNICEF/OMS — rigor científico e independência garantidos' },
    { icon: '💰', title: 'Co-financiamento de ensaios', desc: 'Acesso a fundos de investigação (Gavi, GFATM, PMI) para conduzir os ensaios clínicos necessários' },
    { icon: '📊', title: 'Recolha e análise de dados',   desc: 'Sistemas UNICEF de monitorização para recolha robusta de dados clínicos em contexto africano' },
    { icon: '🏛️', title: 'Credibilidade regulatória',   desc: 'O envolvimento UNICEF reforça a credibilidade junto de SRAs e acelera o processo WHO Prequalification' },
  ]

  pillars.forEach((p, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const cx  = 0.35 + col * 6.5
    const cy  = 2.5 + row * 1.55

    slide.addShape(pptx.ShapeType.roundRect, {
      x: cx, y: cy, w: 6.2, h: 1.35,
      fill: { color: WHITE, transparency: 88 },
      line: { color: BLUE200, width: 1 },
      rectRadius: 0.1,
    })
    slide.addText(p.icon, { x: cx + 0.2, y: cy + 0.2, w: 0.55, h: 0.6, fontSize: 22 })
    slide.addText(p.title, { x: cx + 0.85, y: cy + 0.14, w: 5.1, h: 0.34, fontSize: 11, bold: true, color: WHITE })
    slide.addText(p.desc, { x: cx + 0.85, y: cy + 0.5, w: 5.1, h: 0.7, fontSize: 9, color: BLUE100, wrap: true })
  })

  slide.addText(
    'Objectivo: Determinar, com rigor científico, o potencial do All Shanti como ferramenta antimalárica — e, se validado, levá-lo a quem mais precisa',
    { x: 0.6, y: 5.75, w: 12.1, h: 0.65, fontSize: 10.5, color: BLUE200, align: 'center', wrap: true }
  )
}

// ─── Slide 13 — Next Steps ───────────────────────────────────────────────────
function slide13() {
  const slide = pptx.addSlide()
  slide.background = { color: WHITE }

  addHeader(slide, { bgColor: NAVY, category: 'Acção', title: 'Próximos Passos', categoryColor: BLUE300 })

  const steps = [
    { num: '01', title: 'Reunião técnica',             color: UNICEF, deadline: 'Abril 2026',
      desc: 'Apresentação da revisão bibliográfica e plano de investigação clínica ao departamento de saúde da UNICEF' },
    { num: '02', title: 'Avaliação de parceria',       color: PINK,   deadline: 'Maio 2026',
      desc: 'Avaliação formal do potencial de parceria UNICEF–All Shanti e definição de termos' },
    { num: '03', title: 'Países piloto prioritários',  color: NAVY,   deadline: 'Jun–Jul 2026',
      desc: 'Definição final dos 3 países piloto e início das diligências regulatórias locais' },
    { num: '04', title: 'MOU & Financiamento',         color: UNICEF, deadline: 'Ago–Set 2026',
      desc: 'Assinatura de Memorando de Entendimento e identificação de fontes de financiamento (Gavi, GFATM)' },
  ]

  steps.forEach((s, i) => {
    const cy = 1.55 + i * 1.32
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.35, y: cy + 0.12, w: 0.7, h: 0.7, fill: { color: s.color }, line: { type: 'none' } })
    slide.addText(s.num, { x: 0.35, y: cy + 0.13, w: 0.7, h: 0.68, fontSize: 12, bold: true, color: WHITE, align: 'center' })

    addCard(slide, { x: 1.25, y: cy, w: 11.7, h: 1.08, fill: GRAY50 })
    slide.addText(s.title, { x: 1.45, y: cy + 0.08, w: 8.5, h: 0.32, fontSize: 12, bold: true, color: DARK })
    slide.addText(s.desc, { x: 1.45, y: cy + 0.44, w: 8.5, h: 0.52, fontSize: 9.5, color: GRAY500, wrap: true })

    slide.addShape(pptx.ShapeType.roundRect, { x: 10.1, y: cy + 0.26, w: 2.65, h: 0.36, fill: { color: s.color }, line: { type: 'none' }, rectRadius: 0.1 })
    slide.addText(s.deadline, { x: 10.1, y: cy + 0.27, w: 2.65, h: 0.35, fontSize: 9.5, bold: true, color: WHITE, align: 'center' })
  })
}

// ─── Slide 14 — Thanks ───────────────────────────────────────────────────────
function slide14() {
  const slide = pptx.addSlide()
  slide.background = { color: NAVY }

  slide.addShape(pptx.ShapeType.ellipse, { x: 8.5, y: 0.8, w: 3.5, h: 3.5, fill: { color: PINK, transparency: 88 }, line: { type: 'none' } })
  slide.addShape(pptx.ShapeType.ellipse, { x: 2.5, y: 4.2, w: 2.5, h: 2.5, fill: { color: UNICEF, transparency: 88 }, line: { type: 'none' } })

  slide.addShape(pptx.ShapeType.ellipse, { x: 5.92, y: 0.65, w: 1.5, h: 1.5, fill: { color: PINK }, line: { type: 'none' } })
  slide.addText('AS', { x: 5.92, y: 0.72, w: 1.5, h: 1.36, fontSize: 28, bold: true, color: WHITE, align: 'center' })

  slide.addText('Obrigado', { x: 1, y: 2.3, w: 11.3, h: 1.1, fontSize: 52, bold: true, color: WHITE, align: 'center' })
  slide.addText('All Shanti — Em investigação para combater a malária', { x: 1, y: 3.5, w: 11.3, h: 0.46, fontSize: 15, color: BLUE100, align: 'center' })
  slide.addText('Águas de São Silvestre, SA', { x: 1, y: 4.0, w: 11.3, h: 0.38, fontSize: 12, color: BLUE200, align: 'center' })

  slide.addShape(pptx.ShapeType.rect, { x: 5.92, y: 4.55, w: 1.5, h: 0.06, fill: { color: PINK }, line: { type: 'none' } })

  slide.addText('Águas de São Silvestre, SA', { x: 1, y: 4.78, w: 11.3, h: 0.3, fontSize: 10, color: BLUE300, align: 'center' })
  slide.addText('Pernes, Santarém — Portugal', { x: 1, y: 5.1, w: 11.3, h: 0.28, fontSize: 9, color: BLUE300, align: 'center' })
  slide.addText('APRESENTAÇÃO CONFIDENCIAL — UNICEF 2026', { x: 1, y: 6.6, w: 11.3, h: 0.28, fontSize: 8, color: BLUE300, align: 'center', charSpacing: 2 })
}

// ─── Build presentation ───────────────────────────────────────────────────────
slide01()
slide02()
slide03()
slide04()
slide05()
slide06()
slide07()
slideScience()
slide08()
slide09()
slide10()
slide11()
slide12()
slide13()
slide14()

// ─── Write file ───────────────────────────────────────────────────────────────
const outputPath = '/Users/gustavoteixeiracuco/Documents/github/all-shanti-unicef-pitch/All_Shanti_UNICEF_Pitch_2026.pptx'
pptx.writeFile({ fileName: outputPath })
  .then(() => console.log('PPTX generated: ' + outputPath))
  .catch(err => { console.error('Error:', err); process.exit(1) })
