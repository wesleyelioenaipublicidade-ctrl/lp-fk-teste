import React from 'react'

export default function CTAMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-lg">
      <a
        href={`https://wa.me/5511000000000?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções do FK Grupo.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-xl text-center"
      >
        WhatsApp
      </a>
      <a
        href="#contato"
        className="flex-1 bg-fk-blue text-white text-sm font-semibold py-3 rounded-xl text-center"
      >
        Solicitar atendimento
      </a>
    </div>
  )
}
