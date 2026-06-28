import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function CTAFinal() {
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-fk-blue text-sm font-semibold tracking-widest uppercase mb-4">Contato</p>
          <h2 className="text-3xl md:text-5xl font-bold text-fk-gray-dark leading-tight mb-6">
            Vamos transformar seu ambiente?
          </h2>
          <p className="text-fk-gray-mid text-lg leading-relaxed mb-8">
            Nossa equipe está pronta para indicar a melhor solução para sua empresa. Fale conosco e receba um atendimento personalizado.
          </p>
          <div className="flex flex-col gap-4 text-fk-gray-mid text-sm">
            <span>✓ Atendimento especializado em projetos corporativos</span>
            <span>✓ Consultoria gratuita com nossos especialistas</span>
            <span>✓ Entrega e montagem em todo o Brasil</span>
          </div>
        </div>

        <div className="bg-fk-gray rounded-3xl p-8 md:p-10">
          {enviado ? (
            <div className="text-center py-10">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-fk-gray-dark mb-2">Mensagem enviada!</h3>
              <p className="text-fk-gray-mid">Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-fk-gray-mid uppercase tracking-wider block mb-1.5">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-fk-gray-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fk-blue/30 focus:border-fk-blue transition"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-fk-gray-mid uppercase tracking-wider block mb-1.5">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-fk-gray-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fk-blue/30 focus:border-fk-blue transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-fk-gray-mid uppercase tracking-wider block mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-fk-gray-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fk-blue/30 focus:border-fk-blue transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-fk-gray-mid uppercase tracking-wider block mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-fk-gray-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fk-blue/30 focus:border-fk-blue transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-fk-gray-mid uppercase tracking-wider block mb-1.5">Mensagem</label>
                <textarea
                  name="mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-fk-gray-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fk-blue/30 focus:border-fk-blue transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-fk-blue text-white font-semibold px-6 py-4 rounded-xl hover:bg-fk-blue-light transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Send size={18} />
                Solicitar atendimento
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
