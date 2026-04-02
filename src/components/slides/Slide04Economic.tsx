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
            <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-3">Custo anual da malária</p>
            <p className="text-4xl font-black text-red-500 mb-2">US$ 12 mil M</p>
            <p className="text-sm text-gray-600">em perdas directas por ano em África</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• Perdas de produtividade laboral</p>
              <p>• Custos de saúde e investimento perdido</p>
            </div>
          </div>

          {/* Opportunity */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-7">
            <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-3">Gap de financiamento (2023)</p>
            <p className="text-4xl font-black text-green-600 mb-2">US$ 4,3 mil M</p>
            <p className="text-sm text-gray-600">em falta para atingir metas WHO 2030</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>• Fundos disponíveis: US$ 4 mil M em 2023</p>
              <p>• Necessidade estimada: US$ 8,3 mil M/ano</p>
            </div>
          </div>
        </div>

        {/* Funding gap banner */}
        <div className="bg-navy rounded-xl p-5 text-white text-center">
          <p className="text-lg font-bold">
            Investigação em novas abordagens terapêuticas é
            <span className="text-pink font-black text-xl mx-2">urgente e subfinanciada</span>
            face à resistência crescente
          </p>
        </div>
      </div>

      <div className="px-12 pb-6">
        <p className="text-xs text-gray-400">Fonte: RBM Partnership to End Malaria; WHO World Malaria Report 2024</p>
      </div>
    </div>
  )
}
