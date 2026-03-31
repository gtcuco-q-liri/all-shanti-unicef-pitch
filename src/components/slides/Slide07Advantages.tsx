const advantages = [
  {
    icon: '🔬',
    title: 'Eficácia comprovada',
    desc: 'Resultados validados em testes clínicos com populações afectadas',
  },
  {
    icon: '💡',
    title: 'Formulação inovadora',
    desc: 'Combinação única de ingredientes naturais em água mineral de São Silvestre',
  },
  {
    icon: '👶',
    title: 'Para populações vulneráveis',
    desc: 'Adequado para crianças menores de 5 anos — grupo mais afectado',
  },
  {
    icon: '🚀',
    title: 'Escalabilidade',
    desc: 'Produção escalável para implementação em larga escala em contexto africano',
  },
  {
    icon: '🚛',
    title: 'Sem cadeia de frio',
    desc: 'Distribuição simplificada — não requer transporte ou armazenamento refrigerado',
  },
  {
    icon: '📄',
    title: 'Base científica',
    desc: 'Objecto de estudos e publicações científicas sobre as suas potencialidades',
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
