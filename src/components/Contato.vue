<template>
  <section id="contato" class="section-padding bg-angelette-600 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-angelette-300 rounded-full"></div>
      <div class="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full"></div>
      <div class="absolute bottom-40 right-1/3 w-28 h-28 bg-angelette-300 rounded-full"></div>
    </div>
    
    <!-- Decorative lines -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div class="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
    </div>
    
    <!-- Additional decorative shapes -->
    <div class="absolute inset-0 opacity-15">
      <div class="absolute top-1/2 left-10 w-16 h-16 bg-angelette-300 rotate-45"></div>
      <div class="absolute bottom-1/3 right-10 w-12 h-12 bg-white rotate-45"></div>
      <div class="absolute top-1/3 right-1/4 w-8 h-8 bg-angelette-300 rotate-45"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          <span class="text-gradient-white">Contato</span> e Localização
        </h2>
        <p class="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Estamos aqui para ajudar você a encontrar o empreendimento perfeito para sua família.
        </p>
      </div>

      <!-- Contact Info Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information Card -->
        <div class="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8">
          <h3 class="text-2xl font-bold text-white mb-8">
            Angeleti Incorporadora
          </h3>
          
          <div class="space-y-6">
            <div
              v-for="(info, index) in contatoInfo"
              :key="index"
              class="flex items-start space-x-4"
            >
              <div class="w-12 h-12 bg-angelette-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="info.icon" class="w-6 h-6 text-angelette-600" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">
                  {{ info.title }}
                </h4>
                <p class="text-gray-200 mb-1">
                  {{ info.info }}
                </p>
                <p class="text-sm text-gray-400">
                  {{ info.description }}
                </p>
                <button
                  v-if="info.whatsapp"
                  @click="handleWhatsAppClick"
                  class="mt-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Section Card -->
        <div class="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8">
          <h3 class="text-2xl font-bold text-white mb-2">
            Nossa Localização
          </h3>
          <p class="text-gray-200 mb-6">
            Angeleti Incorporadora no coração de Teresópolis
          </p>
          
          <!-- Google Map -->
          <div class="bg-gray-700 rounded-xl overflow-hidden border border-gray-600 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1234567890!2d-42.9876543210!3d-22.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAng%C3%A9lette%20Incorporadora!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-72"
            ></iframe>
          </div>
          
          <!-- Google Maps Button -->
          <div class="flex justify-center">
            <button
              @click="openGoogleMaps"
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Abrir no Google Maps</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const contatoInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    info: '(21) 99423-7110',
    description: 'Segunda a Sexta, 9h às 18h',
    whatsapp: true
  },
  {
    icon: Mail,
    title: 'E-mail',
    info: 'contato@angeleti.com.br',
    description: 'Resposta em até 24h',
    whatsapp: false
  },
  {
    icon: MapPin,
    title: 'Endereço',
    info: 'Avenida Feliciano Sodré, 300 - Sala 121',
    description: 'Teresópolis, RJ - CEP: 25956-280',
    whatsapp: false
  }
]

const handleWhatsAppClick = () => {
  const phoneNumber = '5521994237110'
    const message = `Olá, Angeleti Incorporadora! Vim através do seu site, gostaria de saber mais informações.`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const openGoogleMaps = () => {
  // Link para o Google Maps com o endereço correto da Angélette
  const mapsUrl = 'https://www.google.com/maps/search/Avenida+Feliciano+Sodré+300+Sala+121+Teresópolis+RJ'
  window.open(mapsUrl, '_blank')
}
</script>

<style scoped>
.text-gradient-white {
  @apply bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent;
}
</style>