import React, { useState } from 'react'

const solucoes = [
  {
    titulo: 'Escritórios',
    desc: 'Ambientes completos para escritórios de qualquer porte — do posto de trabalho individual às salas de reunião de alto padrão.',
    imagem: '/imagem/PHOTO-2026-06-28-16-37-09.jpg',
  },
  {
    titulo: 'Corporativo',
    desc: 'Projetos corporativos de grande escala com padronização, qualidade e entrega garantida em todo o Brasil.',
    imagem: '/imagem/PHOTO-2026-06-28-16-37-36.jpg',
  },
  {
    titulo: 'Saúde',
    desc: 'Mobiliário específico para clínicas, hospitais e ambientes de saúde com foco em higiene, resistência e ergonomia.',
    imagem: '/imagem/PHOTO-2026-06-28-16-37-47.jpg',
  },
  {
    titulo: 'Home Office',
    desc: 'Soluções ergonômicas e funcionais para quem trabalha em casa com o mesmo padrão corporativo.',
    imagem: '/imagem/PHOTO-2026-06-28-16-37-09.jpg',
  },
  {
    titulo: 'Grandes Empresas',
    desc: 'Atendimento especializado para grandes volumes com suporte técnico, projeto e logística dedicados.',
    imagem: '/imagem/PHOTO-2026-06-28-16-37-36.jpg',
  },
  {
    titulo: 'Projetos Especiais',
    desc: 'Desenvolvemos soluções sob medida para projetos únicos, com design exclusivo e produção customizada.',
    imagem: '/imagem/PHOTO-2026-06-28-16-37-47.jpg',
  },
]

export default function Solucoes() {
  const [active, setActive] = useState(0)

  return (
    <section id="solucoes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fk-blue text-sm font-semibold tracking-widest uppercase mb-4">Soluções</p>
          <h2 className="text-3xl md:text-5xl font-bold text-fk-gray-dark">
            Soluções para cada ambiente
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-3">
            {solucoes.map((s, i) => (
              <button
                key={s.titulo}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-2xl transition-all ${
                  active === i
                    ? 'bg-fk-blue text-white shadow-lg'
                    : 'bg-fk-gray hover:bg-gray-100 text-fk-gray-dark'
                }`}
              >
                <h3 className={`font-bold mb-1 ${active === i ? 'text-white' : 'text-fk-gray-dark'}`}>
                  {s.titulo}
                </h3>
                {active === i && (
                  <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
                )}
              </button>
            ))}
          </div>

          <div className="sticky top-24">
            <img
              key={active}
              src={solucoes[active].imagem}
              alt={solucoes[active].titulo}
              className="w-full h-[420px] md:h-[540px] object-cover rounded-3xl shadow-2xl animate-fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
