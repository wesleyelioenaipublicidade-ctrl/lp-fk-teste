import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fk-gray-dark">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/imagem/PHOTO-2026-06-28-16-37-47.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-white/70 text-sm md:text-base font-medium tracking-widest uppercase mb-6">
          Referência Nacional em Mobiliário Corporativo
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Desde 1985 transformando<br className="hidden md:block" /> ambientes corporativos.
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvemos soluções em mobiliário corporativo que unem design, ergonomia, tecnologia e alto desempenho para empresas de todo o Brasil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-fk-blue text-white font-semibold px-8 py-4 rounded-full hover:bg-fk-blue-light transition-colors text-base"
          >
            Solicitar atendimento
            <ArrowRight size={18} />
          </a>
          <a
            href="#quem-somos"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base backdrop-blur-sm"
          >
            Conhecer o FK Grupo
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
