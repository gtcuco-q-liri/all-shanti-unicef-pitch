const countries = [
  {
    flag: '🇳🇬',
    name: 'Nigéria',
    why: '31.9% das mortes africanas — maior carga global. UNICEF e Gavi activos desde 2024. NAFDAC com track record de aprovação ágil.',
    color: 'border-unicef bg-blue-50',
  },
  {
    flag: '🇺🇬',
    name: 'Uganda',
    why: 'Maior rollout de vacina anti-malária de África (Abr 2025, 19º país). Malaria Consortium + UNICEF activos em 25 distritos. Forte capacidade regulatória.',
    color: 'border-pink bg-pink-50',
  },
  {
    flag: '🇲🇿',
    name: 'Moçambique',
    why: 'Vacina introduzida em 2024. Sul de África — diversidade geográfica. Plataforma digital upSCALE para suporte a trabalhadores de saúde.',
    color: 'border-navy bg-blue-50',
  },
]

export default function Slide09Strategy() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-unicef px-12 py-8">
        <p className="text-xs text-blue-100 uppercase tracking-widest mb-1 font-medium">Implementação</p>
        <h2 className="text-3xl font-bold text-white">Estratégia de Implementação</h2>
        <p className="text-blue-100 text-sm mt-1">Piloto em 3 países seleccionados por impacto, capacidade regulatória e presença UNICEF</p>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-8 gap-5">
        {countries.map((c, i) => (
          <div key={i} className={`border-l-4 ${c.color} rounded-r-xl p-5`}>
            <div className="flex items-start gap-4">
              <span className="text-3xl">{c.flag}</span>
              <div>
                <p className="font-bold text-dark text-base mb-1">{c.name}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.why}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mt-2">
          <p className="text-sm text-dark font-medium">
            Parcerias com sistemas de saúde locais, ONGs e UNICEF &bull;
            Programa de sensibilização comunitária &bull;
            Escalabilidade para os 11 países com maiores casos
          </p>
        </div>
      </div>
    </div>
  )
}
