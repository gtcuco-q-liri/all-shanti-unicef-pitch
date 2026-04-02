const phases = [
  {
    period: 'SET–DEZ 2026',
    title: 'Protocolo & Ética',
    items: ['Desenho do protocolo de investigação fase I/II', 'Submissão a comités de ética (NG, UG, MZ)', 'Parceria com universidades e centros clínicos locais'],
    color: '#009EDB',
    phase: '01',
  },
  {
    period: 'JAN–JUN 2027',
    title: 'Ensaio Fase I — Segurança',
    items: ['Recrutamento de participantes adultos (coorte inicial)', 'Avaliação de segurança, tolerância e farmacocinética', 'Supervisão independente OMS / IRB'],
    color: '#E86EA6',
    phase: '02',
  },
  {
    period: 'JUL–DEZ 2027',
    title: 'Análise Intermédia',
    items: ['Relatório de segurança independente', 'Decisão baseada em dados: avançar, ajustar ou parar', 'Partilha de resultados com UNICEF e parceiros'],
    color: '#0A44A1',
    phase: '03',
  },
  {
    period: '2028',
    title: 'Ensaio Fase II — Eficácia',
    items: ['Se fase I aprovada: ensaio de eficácia controlado', 'Expansão a populações vulneráveis (sujeito a dados de segurança)', 'Primeira publicação peer-review'],
    color: '#009EDB',
    phase: '04',
  },
  {
    period: '2029',
    title: 'Avaliação Regulatória',
    items: ['Submissão a SRA (EMA/FDA) ou equivalente regional', 'Processo WHO Prequalification (se resultados positivos)', 'Publicações científicas adicionais'],
    color: '#E86EA6',
    phase: '05',
  },
  {
    period: '2030',
    title: 'Decisão de Escala',
    items: ['Avaliação de viabilidade para procurement UNICEF', 'Plano de acesso a países de alta carga (condicionado a aprovação)', 'Relatório ODS e impacto documentado'],
    color: '#0A44A1',
    phase: '06',
  },
]

export default function Slide10Timeline() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-gradient-to-r from-navy to-unicef px-12 py-7">
        <p className="text-xs text-blue-200 uppercase tracking-widest mb-1 font-medium">Calendário</p>
        <h2 className="text-3xl font-bold text-white">Roadmap de Investigação Clínica</h2>
        <p className="text-blue-100 text-sm mt-1">Início: Setembro 2026 → Decisão de escala: 2030 (condicionada a resultados)</p>
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
