import React from 'react'
import { Palette, Heart, Cpu, MapPin, Award, Leaf, Zap, Truck } from 'lucide-react'

const diferenciais = [
  { icon: Palette, titulo: 'Design', desc: 'Projetos que combinam estética e funcionalidade para ambientes corporativos modernos.' },
  { icon: Heart, titulo: 'Ergonomia', desc: 'Soluções que promovem conforto, saúde e bem-estar para quem trabalha.' },
  { icon: Cpu, titulo: 'Tecnologia', desc: 'Processos industriais de ponta com 51 células robóticas e Indústria 4.0.' },
  { icon: MapPin, titulo: 'Produção Nacional', desc: '6 plantas industriais no Brasil garantindo controle total da cadeia produtiva.' },
  { icon: Award, titulo: 'Qualidade Certificada', desc: 'Rigorosos processos de qualidade e certificações reconhecidas pelo mercado.' },
  { icon: Leaf, titulo: 'Sustentabilidade', desc: 'Compromisso ESG com produção responsável e respeito ao meio ambiente.' },
  { icon: Zap, titulo: 'Indústria 4.0', desc: 'Automação e inteligência integradas para máxima eficiência produtiva.' },
  { icon: Truck, titulo: 'Logística Nacional', desc: '9 centros de distribuição para atender todo o Brasil com agilidade e confiança.' },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="section-padding bg-fk-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fk-blue text-sm font-semibold tracking-widest uppercase mb-4">Diferenciais</p>
          <h2 className="text-3xl md:text-5xl font-bold text-fk-gray-dark">
            Por que escolher o FK Grupo?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map(({ icon: Icon, titulo, desc }) => (
            <div
              key={titulo}
              className="bg-white rounded-2xl p-7 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-fk-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-fk-blue group-hover:text-white transition-colors">
                <Icon size={22} className="text-fk-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-fk-gray-dark mb-2">{titulo}</h3>
              <p className="text-fk-gray-mid text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
