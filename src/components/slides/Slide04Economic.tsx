export default function Slide04Economic() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-gradient-to-r from-navy to-[#1a5bd4] px-12 py-8">
        <p className="text-xs text-blue-300 uppercase tracking-widest mb-1 font-medium">Impacto</p>
        <h2 className="text-3xl font-bold text-white">Impacto Económico Devastador</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-8 gap-8">
        {/* Two columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Cost of inaction */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
            <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-3">Custo da inação</p>
            <p className="text-4xl font-black text-red-500 mb-2">US$ 83 mil M</p>
            <p className="text-sm text-gray-600">em PIB perdido até 2030</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• Quase 1 milhão de vidas adicionais</p>
              <p>• 750.000 crianças menores de 5 anos</p>
            </div>
          </div>

          {/* Opportunity */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-7">
            <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-3">Oportunidade com investimento</p>
            <p className="text-4xl font-black text-green-600 mb-2">US$ 231 mil M</p>
            <p className="text-sm text-gray-600">em PIB ganho até 2030</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• Retorno de 1:3 em cada dólar investido</p>
              <p>• Produtividade laboral restaurada</p>
            </div>
          </div>
        </div>

        {/* ROI banner */}
        <div className="bg-navy rounded-xl p-5 text-white text-center">
          <p className="text-lg font-bold">
            Cada US$ 1 investido no combate à malária gera até
            <span className="text-pink font-black text-2xl mx-2">US$ 40</span>
            em benefícios económicos
          </p>
        </div>
      </div>

      <div className="px-12 pb-6">
        <p className="text-xs text-gray-400">Fonte: RBM Partnership to End Malaria; WHO Economic Analysis 2024</p>
      </div>
    </div>
  )
}
