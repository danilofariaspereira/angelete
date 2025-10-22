<template>
  <button
    @click="handleWhatsAppClick"
    class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
  >
    <MessageCircle class="w-6 h-6" />
    
    <!-- Tooltip -->
    <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Fale conosco no WhatsApp
      <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
    </div>
  </button>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'

const phoneNumber = '5521998376181'
const message = 'Olá! Gostaria de saber mais sobre os empreendimentos da Angélette.'

const handleWhatsAppClick = () => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>






