const pillars = [
  { icon: '🔬', title: 'Co-investigação clínica', desc: 'Protocolo conjunto fase I/II com supervisão UNICEF/OMS — rigor científico e independência garantidos' },
  { icon: '💰', title: 'Co-financiamento de ensaios', desc: 'Acesso a fundos de investigação (Gavi, GFATM, PMI) para conduzir os ensaios clínicos necessários' },
  { icon: '📊', title: 'Recolha e análise de dados', desc: 'Sistemas UNICEF de monitorização para recolha robusta de dados clínicos em contexto africano' },
  { icon: '🏛️', title: 'Credibilidade regulatória', desc: 'O envolvimento UNICEF reforça a credibilidade junto de SRAs e acelera o processo WHO Prequalification' },
]

export default function Slide12Partnership() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-gradient-to-br from-unicef to-navy flex-1 flex flex-col justify-center px-12 py-8">
        <div className="text-center text-white mb-10">
          <p className="text-xs uppercase tracking-widest text-blue-200 font-medium mb-3">Proposta</p>
          <h2 className="text-4xl font-black mb-3">
            All Shanti <span className="text-pink">+</span> UNICEF
          </h2>
          <p className="text-lg text-blue-100">
            Uma parceria de investigação para determinar o potencial clínico do All Shanti
          </p>
          <div className="w-16 h-1 bg-pink mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 text-white">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{p.title}</p>
                  <p className="text-xs text-blue-100 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            Objectivo: <span className="font-bold text-white">Determinar, com rigor científico, o potencial do All Shanti como ferramenta antimalárica — e, se validado, levá-lo a quem mais precisa</span>
          </p>
        </div>
      </div>
    </div>
  )
}
