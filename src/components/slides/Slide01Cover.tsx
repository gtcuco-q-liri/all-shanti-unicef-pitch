export default function Slide01Cover() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0A44A1] to-unicef" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-unicef blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 text-center text-white px-8 slide-enter">
        {/* Logo / Brand mark */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-16 rounded-full bg-pink flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 40 40" className="w-10 h-10 fill-white">
              <circle cx="20" cy="20" r="18" fillOpacity="0.2" />
              <path d="M20 6 C13 6 8 12 8 20 C8 28 13 34 20 34 C27 34 32 28 32 20 C32 12 27 6 20 6Z M20 10 C25 10 28 14.5 28 20 C28 25.5 25 30 20 30 C15 30 12 25.5 12 20 C12 14.5 15 10 20 10Z" />
              <circle cx="20" cy="20" r="4" />
            </svg>
          </div>
        </div>

        <h1 className="text-6xl font-black tracking-tight mb-3">All Shanti</h1>
        <p className="text-xl font-light text-blue-100 mb-10 tracking-widest uppercase">
          Proposta de Investigação Clínica no Contexto de Tratamento de Suporte Contra a Malária
        </p>

        <div className="w-24 h-1 bg-pink mx-auto mb-10 rounded-full" />

        <p className="text-base text-blue-200 mb-2 font-medium">
          Águas de São Silvestre, SA
        </p>
        <p className="text-sm text-blue-300">
          Apresentação à UNICEF &bull; 2026
        </p>
      </div>

      {/* Bottom badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <span className="text-xs text-blue-300 uppercase tracking-widest">
          Confidencial
        </span>
      </div>
    </div>
  )
}
