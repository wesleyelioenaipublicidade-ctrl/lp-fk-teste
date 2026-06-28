import React from 'react'

const stats = [
  { value: '1985', label: 'Fundação' },
  { value: '+110 mil', label: 'itens produzidos por dia' },
  { value: '6', label: 'plantas industriais' },
  { value: '9', label: 'centros de distribuição' },
  { value: '+1.200', label: 'colaboradores' },
  { value: '51', label: 'células robóticas' },
  { value: '1.200 m³', label: 'expedição diária' },
  { value: 'I4.0', label: 'Indústria 4.0' },
]

export default function Numeros() {
  return (
    <section className="bg-fk-gray py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-fk-blue text-sm font-semibold tracking-widest uppercase mb-4">Números</p>
        <h2 className="text-3xl md:text-5xl font-bold text-fk-gray-dark">
          A força do FK Grupo em números
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-3xl md:text-4xl font-bold text-fk-blue mb-2">{s.value}</p>
            <p className="text-fk-gray-mid text-sm leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
