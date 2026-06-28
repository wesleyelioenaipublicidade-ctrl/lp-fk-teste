import React from 'react'
import { Leaf, BarChart2, Users, Globe, Recycle, CheckCircle } from 'lucide-react'

const pilares = [
  { icon: Leaf, titulo: 'Responsabilidade Ambiental', desc: 'Processos produtivos que minimizam impacto ambiental e preservam recursos naturais.' },
  { icon: BarChart2, titulo: 'ESG', desc: 'Práticas sólidas de governança ambiental, social e corporativa em toda a cadeia.' },
  { icon: Users, titulo: 'Responsabilidade Social', desc: 'Investimento em pessoas, comunidade e bem-estar dos colaboradores.' },
  { icon: Globe, titulo: 'Produção Sustentável', desc: 'Linhas de produção otimizadas para redução de resíduos e consumo de energia.' },
  { icon: Recycle, titulo: 'Governança', desc: 'Transparência e ética como pilares da gestão do FK Grupo.' },
  { icon: CheckCircle, titulo: 'Certificações', desc: 'Certificações nacionais e internacionais que atestam a qualidade e responsabilidade dos produtos.' },
]

export default function Sustentabilidade() {
  return (
    <section className="section-padding bg-fk-gray-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-4">Sustentabilidade</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Comprometidos com um futuro melhor.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              O FK Grupo acredita que crescer de forma responsável é fundamental. Por isso, integramos práticas ESG em toda a nossa operação — da fábrica ao escritório do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pilares.map(({ icon: Icon, titulo, desc }) => (
              <div key={titulo} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <Icon size={24} className="text-white/60 mb-4" />
                <h3 className="font-semibold text-white mb-2">{titulo}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
