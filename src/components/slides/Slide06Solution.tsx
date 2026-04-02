export default function Slide06Solution() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink via-[#d4568a] to-navy" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 text-center text-white px-16 slide-enter max-w-3xl">
        <div className="w-20 h-1 bg-white/40 mx-auto mb-8 rounded-full" />

        <h2 className="text-5xl font-black mb-6 leading-tight">
          All Shanti
          <span className="block text-2xl font-light mt-2 text-pink-100">Uma Candidatura à Investigação Clínica</span>
        </h2>

        <p className="text-xl text-white/90 leading-relaxed mb-10">
          Suplemento alimentar desenvolvido pela{' '}
          <span className="font-bold text-white">Águas de São Silvestre, SA</span>, com base em
          evidência histórica da <em>Cinchona calisaya</em> — proposto para investigação clínica formal em parceria internacional.
        </p>

        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Base', value: 'Água Mineral Natural' },
            { label: 'Origem', value: 'Plantas medicinais naturais' },
            { label: 'Logística', value: 'Sem cadeia de frio' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="w-20 h-1 bg-white/40 mx-auto mt-8 rounded-full" />
      </div>
    </div>
  )
}
