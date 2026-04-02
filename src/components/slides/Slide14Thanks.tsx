export default function Slide14Thanks() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a3a8f] to-unicef" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-pink blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-unicef blur-3xl" />
      </div>

      <div className="relative z-10 text-center text-white px-16 slide-enter max-w-2xl">
        <div className="w-16 h-16 rounded-full bg-pink mx-auto mb-8 flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl font-black">AS</span>
        </div>

        <h2 className="text-5xl font-black mb-4">Obrigado</h2>
        <p className="text-lg text-blue-100 mb-2 font-light">
          All Shanti — Em investigação para combater a malária
        </p>
        <p className="text-base text-blue-200 mb-10">Águas de São Silvestre, SA</p>

        <div className="w-16 h-1 bg-pink mx-auto mb-8 rounded-full" />

        <div className="flex flex-col items-center gap-3 text-sm text-blue-200">
          <a
            href="mailto:contact@allshanti.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>✉</span>
            <span>contact@allshanti.com</span>
          </a>
          <a
            href="https://allshanti.pt"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>🌐</span>
            <span>allshanti.pt</span>
          </a>
        </div>

        <div className="mt-12">
          <p className="text-xs text-blue-400 uppercase tracking-widest">
            Apresentação confidencial — UNICEF 2026
          </p>
        </div>
      </div>
    </div>
  )
}
