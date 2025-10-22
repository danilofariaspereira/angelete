<template>
  <section id="contato" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Entre em <span class="text-gradient">Contato</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Estamos aqui para ajudar você a encontrar o empreendimento ideal. 
          Entre em contato conosco e descubra as melhores condições.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-6">
              Fale Conosco
            </h3>
            <p class="text-lg text-gray-600 mb-8">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas e 
              apresentar as melhores opções para você.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-6">
            <div
              v-for="(item, index) in contatoInfo"
              :key="index"
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-angelette-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <component :is="item.icon" class="w-6 h-6 text-angelette-600" />
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900 mb-1">
                    {{ item.title }}
                  </h4>
                  <p class="text-angelette-600 font-medium mb-1">
                    {{ item.info }}
                  </p>
                  <p class="text-gray-500 text-sm">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA -->
          <div class="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900">
                  WhatsApp Rápido
                </h4>
                <p class="text-gray-600">
                  Resposta imediata via WhatsApp
                </p>
              </div>
            </div>
            <button
              @click="handleWhatsAppClick"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Envie sua Mensagem
          </h3>

          <div v-if="isSubmitted" class="text-center py-12">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle class="w-8 h-8 text-green-600" />
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-2">
              Mensagem Enviada!
            </h4>
            <p class="text-gray-600">
              Entraremos em contato em breve.
            </p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  v-model="formData.nome"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-angelette-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  v-model="formData.telefone"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-angelette-500 focus:border-transparent transition-all duration-300"
                  placeholder="(21) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                v-model="formData.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-angelette-500 focus:border-transparent transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Assunto
              </label>
              <select
                v-model="formData.assunto"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-angelette-500 focus:border-transparent transition-all duration-300"
              >
                <option
                  v-for="assunto in assuntos"
                  :key="assunto.value"
                  :value="assunto.value"
                >
                  {{ assunto.label }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                v-model="formData.mensagem"
                required
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-angelette-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Conte-nos sobre seu interesse..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'w-full font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2',
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-angelette-600 hover:bg-angelette-700 text-white hover:shadow-lg'
              ]"
            >
              <div v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <Send v-else class="w-5 h-5" />
              <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-vue-next'

const formData = ref({
  nome: '',
  telefone: '',
  email: '',
  mensagem: '',
  assunto: 'interesse-empreendimento'
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const contatoInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    info: '(21) 99837-6181',
    description: 'Segunda a Sexta, 8h às 18h'
  },
  {
    icon: Mail,
    title: 'E-mail',
    info: 'contato@angeleti.com.br',
    description: 'Resposta em até 24h'
  },
  {
    icon: MapPin,
    title: 'Endereços',
    info: 'Teresópolis e Maricá',
    description: 'Rio de Janeiro'
  }
]

const assuntos = [
  { value: 'interesse-empreendimento', label: 'Interesse em Empreendimento' },
  { value: 'financiamento', label: 'Financiamento' },
  { value: 'visita', label: 'Agendar Visita' },
  { value: 'duvidas', label: 'Dúvidas Gerais' },
  { value: 'outros', label: 'Outros' }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simular envio do formulário
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
    formData.value = {
      nome: '',
      telefone: '',
      email: '',
      mensagem: '',
      assunto: 'interesse-empreendimento'
    }
  }, 3000)
}

const handleWhatsAppClick = () => {
  const phoneNumber = '5521998376181'
  const message = `Olá! Gostaria de saber mais sobre os empreendimentos da Angélette.`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>
