import { useEffect, useState } from 'react'

const metrics = [
  { value: 'Fase I', label: 'Dados de segurança e tolerância', sub: '2027 — adultos, coorte inicial', color: 'text-unicef', bg: 'bg-blue-50 border-blue-100' },
  { value: 'Fase II', label: 'Dados de eficácia controlada', sub: '2028 — sujeito a fase I aprovada', color: 'text-pink', bg: 'bg-pink-50 border-pink-100' },
  { value: 'Reg.', label: 'Avaliação regulatória WHO', sub: '2029–2030 — se resultados positivos', color: 'text-navy', bg: 'bg-indigo-50 border-indigo-100' },
]

export default function Slide11Impact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-gradient-to-r from-pink to-navy px-12 py-8">
        <p className="text-xs text-pink-100 uppercase tracking-widest mb-1 font-medium">Resultados</p>
        <h2 className="text-3xl font-bold text-white">Marcos Científicos e Regulatórios</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-8">
        <div className="grid grid-cols-3 gap-8 mb-10">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`${m.bg} border rounded-2xl p-8 text-center ${visible ? 'count-enter' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className={`text-6xl font-black mb-3 ${m.color}`}>{m.value}</p>
              <p className="font-semibold text-dark text-base mb-1">{m.label}</p>
              <p className="text-sm text-gray-500">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Progress bar visual */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-4">Fases de investigação — decisões condicionadas a dados</p>
          <div className="flex items-end gap-2 h-16">
            {[5, 20, 50, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg transition-all duration-700"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 3 ? '#009EDB' : i === 2 ? '#E86EA6' : '#0A44A1',
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            {['2026', '2027', '2028–29', '2030'].map((y, i) => (
              <p key={i} className="flex-1 text-center text-xs text-gray-400">{y}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
