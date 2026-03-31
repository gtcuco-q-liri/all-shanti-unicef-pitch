const alignments = [
  {
    priority: 'Proteção infantil',
    desc: '75% das vítimas mortais africanas são crianças < 5 anos (WHO 2025)',
    match: 'All Shanti é adequado para crianças, formulação segura',
    icon: '👶',
  },
  {
    priority: 'Redução da mortalidade',
    desc: 'Reduzir mortalidade infantil na África Subsaariana — ODS 3',
    match: 'Impacto directo: >1M crianças protegidas até 2030',
    icon: '📉',
  },
  {
    priority: 'Equidade no acesso',
    desc: '43% da população sem proteção adequada — foco em comunidades remotas',
    match: 'Distribuição de água sem cadeia de frio alcança contextos remotos',
    icon: '⚖️',
  },
  {
    priority: 'Resposta à resistência',
    desc: 'Resistência à artemisina confirmada em 8 países africanos — necessidade urgente de alternativas',
    match: 'Formulação natural diferenciada — mecanismo de acção complementar',
    icon: '🧬',
  },
]

export default function Slide08Alignment() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-navy px-12 py-8">
        <p className="text-xs text-blue-300 uppercase tracking-widest mb-1 font-medium">Parceria</p>
        <h2 className="text-3xl font-bold text-white">Alinhamento com Prioridades UNICEF</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-6 gap-4">
        {alignments.map((a, i) => (
          <div key={i} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <div className="text-2xl pt-1">{a.icon}</div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-bold text-dark text-sm mb-1">{a.priority}</p>
                  <p className="text-xs text-gray-500">{a.desc}</p>
                </div>
                <div className="flex-1 bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-xs text-navy font-medium">✓ {a.match}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
