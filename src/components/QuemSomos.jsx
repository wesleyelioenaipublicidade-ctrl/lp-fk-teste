import React from 'react'

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-fk-blue text-sm font-semibold tracking-widest uppercase mb-4">Quem Somos</p>
          <h2 className="text-3xl md:text-5xl font-bold text-fk-gray-dark leading-tight mb-6">
            Mais de quatro décadas desenvolvendo ambientes inteligentes.
          </h2>
          <p className="text-fk-gray-mid text-lg leading-relaxed mb-6">
            O FK Grupo reúne tradição, inovação e tecnologia para entregar soluções completas em mobiliário corporativo. Atuamos desde <strong>1985</strong>, e nos tornamos uma das maiores referências nacionais do setor.
          </p>
          <p className="text-fk-gray-mid text-lg leading-relaxed mb-10">
            Reunimos diversas marcas especializadas e um parque fabril altamente tecnológico — com 6 plantas industriais e 51 células robóticas operando em nível Indústria 4.0.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-fk-blue text-white font-semibold px-7 py-3.5 rounded-full hover:bg-fk-blue-light transition-colors"
          >
            Falar com um especialista
          </a>
        </div>

        <div className="relative">
          <img
            src="/imagem/PHOTO-2026-06-28-16-37-36.jpg"
            alt="Ambiente corporativo FK Grupo"
            className="w-full h-[480px] object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-fk-blue text-white rounded-2xl p-6 shadow-xl">
            <p className="text-4xl font-bold">40+</p>
            <p className="text-sm text-white/80 mt-1">anos de experiência</p>
          </div>
        </div>
      </div>
    </section>
  )
}
