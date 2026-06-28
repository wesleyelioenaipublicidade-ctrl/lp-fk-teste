import React from 'react'
import { ArrowRight } from 'lucide-react'

const marcas = [
  {
    nome: 'Frisokar',
    descricao: 'Cadeiras e mobiliário corporativo de alto desempenho com foco em ergonomia e durabilidade.',
    cor: '#1a3a6b',
  },
  {
    nome: 'Maxdesign',
    descricao: 'Design contemporâneo aplicado a ambientes corporativos modernos e funcionais.',
    cor: '#2d6a4f',
  },
  {
    nome: 'FK Wellness',
    descricao: 'Soluções voltadas ao bem-estar, saúde e qualidade de vida no ambiente de trabalho.',
    cor: '#6a1a4d',
  },
  {
    nome: 'Arkhé',
    descricao: 'Mobiliário premium com design exclusivo para projetos corporativos de alto padrão.',
    cor: '#7b3f00',
  },
  {
    nome: 'Kokuyo',
    descricao: 'Parceria internacional reconhecida mundialmente por inovação em ambientes de trabalho.',
    cor: '#1a4f6b',
  },
  {
    nome: 'ING',
    descricao: 'Soluções em cadeiras e mobiliário com excelente custo-benefício para o mercado corporativo.',
    cor: '#3d3d3d',
  },
]

export default function Marcas() {
  return (
    <section id="marcas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fk-blue text-sm font-semibold tracking-widest uppercase mb-4">Ecossistema de Marcas</p>
          <h2 className="text-3xl md:text-5xl font-bold text-fk-gray-dark">
            Um portfólio completo para cada necessidade
          </h2>
          <p className="text-fk-gray-mid text-lg mt-4 max-w-2xl mx-auto">
            Cada marca do FK Grupo foi desenvolvida para atender segmentos específicos com excelência e identidade própria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marcas.map((m) => (
            <div
              key={m.nome}
              className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: m.cor }}
              >
                {m.nome[0]}
              </div>
              <h3 className="text-xl font-bold text-fk-gray-dark mb-3">{m.nome}</h3>
              <p className="text-fk-gray-mid text-sm leading-relaxed mb-6">{m.descricao}</p>
              <button className="inline-flex items-center gap-1.5 text-fk-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Conhecer <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
