import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-fk-gray-dark text-white/60 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <img src="/logo/fk-grupo-tit.webp" alt="FK Grupo" className="h-8 w-auto mb-3 opacity-80" />
          <p className="text-sm">Desde 1985 transformando ambientes corporativos.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 text-sm text-center md:text-left">
          <div>
            <p className="text-white font-semibold mb-3">Marcas</p>
            {['Frisokar', 'Maxdesign', 'FK Wellness', 'Arkhé', 'Kokuyo', 'ING'].map((m) => (
              <p key={m} className="mb-1 hover:text-white transition-colors cursor-pointer">{m}</p>
            ))}
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Soluções</p>
            {['Escritórios', 'Corporativo', 'Saúde', 'Home Office', 'Projetos Especiais'].map((s) => (
              <p key={s} className="mb-1 hover:text-white transition-colors cursor-pointer">{s}</p>
            ))}
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Contato</p>
            <p className="mb-1">contato@fkgrupo.com.br</p>
            <p className="mb-1">(11) 0000-0000</p>
            <a
              href="#contato"
              className="inline-block mt-3 bg-fk-blue text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-fk-blue-light transition-colors"
            >
              Solicitar atendimento
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} FK Grupo. Todos os direitos reservados.
      </div>
    </footer>
  )
}
