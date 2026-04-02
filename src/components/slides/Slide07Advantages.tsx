const advantages = [
  {
    icon: '📜',
    title: 'Evidência histórica documentada',
    desc: 'A Cinchona calisaya tem uso antimalárico documentado desde o século XVII — base para protocolo de investigação',
  },
  {
    icon: '💡',
    title: 'Formulação singular',
    desc: 'Combinação única de ingredientes naturais em água mineral de São Silvestre — a investigar em ensaios controlados',
  },
  {
    icon: '🔍',
    title: 'Perfil de segurança a determinar',
    desc: 'Testes de segurança e tolerância — incluindo populações pediátricas — a realizar no âmbito do programa clínico',
  },
  {
    icon: '🚀',
    title: 'Potencial de escalabilidade',
    desc: 'Se validado clinicamente, produção escalável para contexto africano de alta carga',
  },
  {
    icon: '🚛',
    title: 'Sem cadeia de frio',
    desc: 'Distribuição simplificada — vantagem logística relevante para regiões remotas, sujeita a validação operacional',
  },
  {
    icon: '📄',
    title: 'Revisão bibliográfica em curso',
    desc: 'Literatura sobre alcalóides quinínicos como fundamento do protocolo de ensaios fase I/II',
  },
]

export default function Slide07Advantages() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-gradient-to-r from-pink to-[#c45490] px-12 py-8">
        <p className="text-xs text-pink-100 uppercase tracking-widest mb-1 font-medium">Produto</p>
        <h2 className="text-3xl font-bold text-white">Vantagens do All Shanti</h2>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-4 p-10">
        {advantages.map((a, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-pink/40 transition-colors"
          >
            <span className="text-3xl">{a.icon}</span>
            <p className="font-bold text-dark text-sm">{a.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
