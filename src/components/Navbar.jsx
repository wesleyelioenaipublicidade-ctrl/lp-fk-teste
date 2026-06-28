import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Soluções', href: '#solucoes' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img
            src="/logo/fk-grupo-tit.webp"
            alt="FK Grupo"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-fk-gray-dark hover:text-fk-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-fk-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-fk-blue-light transition-colors"
          >
            Solicitar atendimento
          </a>
        </nav>

        <button
          className={`md:hidden p-2 ${scrolled ? 'text-fk-gray-dark' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-fk-gray-dark text-sm font-medium hover:text-fk-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-fk-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-fk-blue-light transition-colors"
          >
            Solicitar atendimento
          </a>
        </div>
      )}
    </header>
  )
}
