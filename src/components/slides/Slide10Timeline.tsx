const phases = [
  {
    period: 'SET–DEZ 2026',
    title: 'Aprovações & Parcerias',
    items: ['Submissão NAFDAC (NG), NDDA (UG), INFARMED equivalente (MZ)', 'Negociação formal UNICEF/OMS', 'Definição de KPIs e protocolos clínicos'],
    color: '#009EDB',
    phase: '01',
  },
  {
    period: 'JAN–MAR 2027',
    title: 'Formação & Distribuição Piloto',
    items: ['Formação de 500+ profissionais de saúde', 'Distribuição kit piloto — 50.000 doses', 'Activação plataformas digitais locais'],
    color: '#E86EA6',
    phase: '02',
  },
  {
    period: 'ABR–JUN 2027',
    title: 'Piloto 3 Regiões',
    items: ['Cobertura: 50.000 crianças < 5 anos', 'Recolha dados eficácia + segurança', 'Supervisão independente OMS'],
    color: '#0A44A1',
    phase: '03',
  },
  {
    period: 'JUL–DEZ 2027',
    title: 'Avaliação & Expansão Nacional',
    items: ['Relatório de eficácia independente', 'Expansão nacional Nigéria: 500.000 crianças', 'Início processo Uganda + Moçambique'],
    color: '#009EDB',
    phase: '04',
  },
  {
    period: '2028',
    title: 'Replicação Regional',
    items: ['Escala Uganda + Moçambique', 'Registo em 4.º país (Niger ou Etiópia)', 'Publicações científicas peer-review'],
    color: '#E86EA6',
    phase: '05',
  },
  {
    period: '2029–2030',
    title: 'Escala Regional',
    items: ['11 países de alta carga de malária', '1M+ crianças protegidas', 'Avaliação ODS e relatório UNICEF'],
    color: '#0A44A1',
    phase: '06',
  },
]

export default function Slide10Timeline() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-gradient-to-r from-navy to-unicef px-12 py-7">
        <p className="text-xs text-blue-200 uppercase tracking-widest mb-1 font-medium">Calendário</p>
        <h2 className="text-3xl font-bold text-white">Timeline de Implementação</h2>
        <p className="text-blue-100 text-sm mt-1">Início: Setembro 2026 → Escala regional: 2030</p>
      </div>

      <div className="flex-1 overflow-auto px-10 py-6">
        <div className="grid grid-cols-3 gap-4">
          {phases.map((p, i) => (
            <div key={i} className="relative flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-100">
              {/* Phase number */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md"
                style={{ backgroundColor: p.color }}
              >
                {p.phase}
              </div>

              <p className="text-xs font-bold uppercase tracking-wide mb-1 mt-1" style={{ color: p.color }}>
                {p.period}
              </p>
              <p className="font-bold text-dark text-sm mb-3">{p.title}</p>
              <ul className="space-y-1">
                {p.items.map((item, j) => (
                  <li key={j} className="text-xs text-gray-600 flex gap-2">
                    <span style={{ color: p.color }} className="flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
