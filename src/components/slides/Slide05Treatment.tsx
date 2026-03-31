const items = [
  {
    icon: '💊',
    title: 'Artemisina (standard)',
    value: 'US$ 1–3',
    desc: 'por tratamento completo',
    color: 'border-unicef',
  },
  {
    icon: '🧪',
    title: 'ACT combinadas',
    value: 'US$ 0,25–1,50',
    desc: 'por dose adulto no sector público',
    color: 'border-navy',
  },
  {
    icon: '🚫',
    title: 'Acesso limitado',
    value: '43%',
    desc: 'da pop. subsaariana sem proteção adequada',
    color: 'border-pink',
  },
  {
    icon: '⚠️',
    title: 'Resistência crescente',
    value: '8 países',
    desc: 'com resistência parcial confirmada ou suspeita em África (WHO 2025)',
    color: 'border-red-400',
  },
]

export default function Slide05Treatment() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-unicef px-12 py-8">
        <p className="text-xs text-blue-100 uppercase tracking-widest mb-1 font-medium">Problema</p>
        <h2 className="text-3xl font-bold text-white">Custos e Limitações dos Tratamentos Atuais</h2>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-5 p-12">
        {items.map((item, i) => (
          <div
            key={i}
            className={`border-l-4 ${item.color} bg-gray-50 rounded-r-xl p-6 flex flex-col gap-2`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{item.title}</span>
            </div>
            <p className="text-3xl font-black text-dark">{item.value}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="px-12 pb-6">
        <p className="text-xs text-gray-400">Fonte: WHO Malaria Treatment Guidelines 2025; WHO World Malaria Report 2025</p>
      </div>
    </div>
  )
}
