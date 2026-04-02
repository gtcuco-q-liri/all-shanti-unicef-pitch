const evidence = [
  {
    ingredient: 'Cinchona calisaya',
    color: '#009EDB',
    bg: 'bg-blue-50 border-blue-200',
    level: 'Forte',
    levelColor: 'bg-blue-100 text-blue-800',
    claims: [
      'Fonte botânica da quinina — até 6,5% de alcalóides totais (Cano et al., Frontiers in Plant Science, 2017)',
      'Quinina: mecanismo de acção contra P. falciparum documentado (inibição da hemozoína)',
      'Quinina na Lista de Medicamentos Essenciais da OMS — 2ª linha para malária grave',
      'Uso antimalárico documentado desde o séc. XVII — revista JRSM (Gachelin et al., 2017)',
    ],
    gap: 'Sem ensaios modernos do extracto completo (não da quinina isolada)',
  },
  {
    ingredient: 'Pau d\'Arco (Tabebuia)',
    color: '#E86EA6',
    bg: 'bg-pink-50 border-pink-200',
    level: 'Moderada',
    levelColor: 'bg-pink-100 text-pink-800',
    claims: [
      'Lapachol e beta-lapachona: actividade antiplasmodial in vitro documentada',
      'Mecanismo: inibição da cadeia respiratória mitocondrial do parasita (análogo ao atovaquone)',
      'Andrade-Neto et al., Phytomedicine (2004) — IC50 1,67–9,44 μM vs. P. falciparum resistente',
      'Revisão sistemática: MDPI Molecules (2020) — PMC7571111',
    ],
    gap: 'Sem ensaios clínicos humanos; selectividade vs. células humanas a confirmar',
  },
  {
    ingredient: 'Lycopodium clavatum',
    color: '#94a3b8',
    bg: 'bg-gray-50 border-gray-200',
    level: 'Limitada',
    levelColor: 'bg-gray-100 text-gray-600',
    claims: [
      'Actividade antioxidante e anti-inflamatória documentada em literatura revisada',
      'Uso tradicional como tónico digestivo e adaptogénico',
    ],
    gap: 'Sem evidência antimalárica publicada — posicionado como ingrediente de suporte',
  },
]

export default function SlideScience() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="bg-gradient-to-r from-navy to-unicef px-12 py-7">
        <p className="text-xs text-blue-200 uppercase tracking-widest mb-1 font-medium">Evidência</p>
        <h2 className="text-3xl font-bold text-white">Base Científica Publicada</h2>
        <p className="text-blue-100 text-sm mt-1">O que a literatura peer-reviewed documenta sobre os ingredientes activos</p>
      </div>

      <div className="flex-1 flex flex-col justify-center px-10 py-5 gap-4">
        {evidence.map((e, i) => (
          <div key={i} className={`rounded-xl border p-4 ${e.bg}`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-40">
                <p className="font-bold text-dark text-sm mb-2" style={{ color: e.color }}>
                  <em>{e.ingredient}</em>
                </p>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${e.levelColor}`}>
                  Evidência {e.level}
                </span>
              </div>
              <div className="flex-1">
                <ul className="space-y-1 mb-2">
                  {e.claims.map((c, j) => (
                    <li key={j} className="text-xs text-gray-700 flex gap-2">
                      <span style={{ color: e.color }} className="flex-shrink-0 mt-0.5">›</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">
                  <span className="font-semibold">Lacuna:</span> {e.gap}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-10 pb-4">
        <p className="text-xs text-gray-400">
          Fontes: Cano et al. (2017) PMC5360753 · Gachelin et al. (2017) PMC5298425 · Andrade-Neto et al. (2004) PMID14980653 · MDPI Molecules (2020) PMC7571111
        </p>
      </div>
    </div>
  )
}
