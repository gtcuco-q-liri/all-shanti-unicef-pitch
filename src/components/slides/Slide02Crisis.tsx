const stats = [
  { value: '282M', label: 'casos globais em 2024', color: 'text-unicef' },
  { value: '610K', label: 'mortes registadas em 2024', color: 'text-pink' },
  { value: '94%', label: 'dos casos mundiais ocorrem em África', color: 'text-navy' },
  { value: '75%', label: 'das vítimas mortais são crianças < 5 anos', color: 'text-pink' },
]

export default function Slide02Crisis() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      {/* Header */}
      <div className="bg-navy px-12 py-8">
        <p className="text-xs text-blue-300 uppercase tracking-widest mb-1 font-medium">Contexto</p>
        <h2 className="text-3xl font-bold text-white">A Crise de Malária em África</h2>
      </div>

      {/* Stats grid */}
      <div className="flex-1 grid grid-cols-2 gap-6 p-12">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col justify-center bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm"
          >
            <span className={`text-6xl font-black mb-3 ${s.color}`}>{s.value}</span>
            <span className="text-dark text-base font-medium leading-snug">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Source */}
      <div className="px-12 pb-6">
        <p className="text-xs text-gray-400">Fonte: WHO World Malaria Report 2025</p>
      </div>
    </div>
  )
}
