const steps = [
  {
    num: '01',
    title: 'Reunião técnica',
    desc: 'Apresentação detalhada dos estudos de eficácia e segurança ao departamento de saúde da UNICEF',
    deadline: 'Abril 2026',
    color: '#009EDB',
  },
  {
    num: '02',
    title: 'Avaliação de parceria',
    desc: 'Avaliação formal do potencial de parceria UNICEF–All Shanti e definição de termos',
    deadline: 'Maio 2026',
    color: '#E86EA6',
  },
  {
    num: '03',
    title: 'Países piloto prioritários',
    desc: 'Definição final dos 3 países piloto e início das diligências regulatórias locais',
    deadline: 'Jun–Jul 2026',
    color: '#0A44A1',
  },
  {
    num: '04',
    title: 'MOU & Financiamento',
    desc: 'Assinatura de Memorando de Entendimento e identificação de fontes de financiamento (Gavi, GFATM)',
    deadline: 'Ago–Set 2026',
    color: '#009EDB',
  },
]

export default function Slide13NextSteps() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-navy px-12 py-8">
        <p className="text-xs text-blue-300 uppercase tracking-widest mb-1 font-medium">Acção</p>
        <h2 className="text-3xl font-bold text-white">Próximos Passos</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-8 gap-5">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-5">
            {/* Number */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-md"
              style={{ backgroundColor: s.color }}
            >
              {s.num}
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-dark text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.deadline}
                </span>
              </div>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute ml-6 mt-12 w-0.5 h-5 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
