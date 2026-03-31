const pillars = [
  { icon: '🤝', title: 'Distribuição', desc: 'Rede global UNICEF para alcançar comunidades remotas em 11 países de alta carga' },
  { icon: '📊', title: 'Monitorização', desc: 'Sistemas UNICEF de reporting e avaliação de impacto alinhados com ODS 3' },
  { icon: '💰', title: 'Financiamento', desc: 'Acesso a fundos multilaterais (Gavi, GFATM, PMI) através da rede UNICEF' },
  { icon: '🔬', title: 'Validação científica', desc: 'Endorsement de organismos internacionais — chave para aprovação regulatória em escala' },
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
            Juntos pelos Objectivos de Desenvolvimento Sustentável
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
            Objectivo: <span className="font-bold text-white">Reduzir significativamente a mortalidade por malária em crianças até 2030</span>
          </p>
        </div>
      </div>
    </div>
  )
}
