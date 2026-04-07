const countries = [
  { name: 'Nigéria', pct: 31.9, color: '#009EDB' },
  { name: 'RDCongo', pct: 11.7, color: '#E86EA6' },
  { name: 'Niger', pct: 6.1, color: '#0A44A1' },
  { name: 'Uganda, Moçambique e outros', pct: 50.3, color: '#94a3b8' },
]

export default function Slide03Countries() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-unicef px-12 py-8">
        <p className="text-xs text-blue-100 uppercase tracking-widest mb-1 font-medium">Epidemiologia</p>
        <h2 className="text-3xl font-bold text-white">Países Mais Afetados</h2>
        <p className="text-blue-100 text-sm mt-1">% das mortes na região africana — WHO 2025</p>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-8 gap-5">
        {countries.map((c, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-40 text-right">
              <span className="text-sm font-semibold text-dark">{c.name}</span>
            </div>
            <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                style={{ width: `${c.pct * 2.5}%`, backgroundColor: c.color, minWidth: '60px' }}
              >
                <span className="text-white text-sm font-bold">{c.pct}%</span>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
          <p className="text-sm text-navy font-medium">
            <span className="font-bold">3 países</span> — Nigéria, RDCongo e Niger — representam
            <span className="font-bold text-pink"> ~50% de todas as mortes</span> por malária em África.
          </p>
        </div>

        <div className="mt-3 bg-pink-50 rounded-xl p-5 border border-pink-100">
          <p className="text-sm text-pink font-medium mb-2">
            <span className="font-bold">78% das mortes por malária</span> são crianças com menos de 5 anos — a cada minuto, uma criança morre de malária.
          </p>
          <p className="text-sm text-gray-600">
            As vacinas <span className="font-medium">RTS,S e R21</span> estão agora em fase de rollout em mais de 20 países africanos,
            com resultados significativos na redução da mortalidade grave.
          </p>
        </div>
      </div>

      <div className="px-12 pb-6">
        <p className="text-xs text-gray-400">Fonte: WHO World Malaria Report 2025</p>
      </div>
    </div>
  )
}
