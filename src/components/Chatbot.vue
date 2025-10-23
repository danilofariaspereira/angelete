<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Window -->
    <div
      v-if="isOpen"
      class="bg-white rounded-2xl shadow-2xl w-96 h-[500px] mb-4 overflow-hidden"
    >
      <!-- Chat Header -->
      <div class="bg-angelette-600 text-white p-4 flex items-center space-x-3">
        <div class="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
          <img 
            src="/images/logo-angelette.avif" 
            alt="Angeleti Incorporadora"
            class="w-8 h-8 object-contain"
            @error="handleLogoError"
          />
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col">
            <span class="font-bold text-sm">ANGELETI</span>
            <span class="text-xs font-semibold uppercase tracking-wider text-angelette-100">INCORPORADORA</span>
          </div>
          <p class="text-xs text-angelette-100 mt-1">Online</p>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="flex-1 p-4 h-80 overflow-y-auto space-y-3">
        <!-- Welcome Message -->
        <div class="flex items-start space-x-2">
          <div class="w-8 h-8 rounded-full bg-angelette-100 flex items-center justify-center flex-shrink-0">
            <img 
              src="/images/logo-angelette.avif" 
              alt="Angeleti Incorporadora"
              class="w-6 h-6 object-contain"
              @error="handleLogoError"
            />
          </div>
          <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p class="text-sm text-gray-800">
              Seja bem-vindo à Angeleti Incorporadora!
            </p>
          </div>
        </div>

        <!-- User Options -->
        <div class="space-y-2">
          <button
            v-for="(option, index) in options"
            :key="index"
            @click="selectOption(option)"
            class="w-full text-left bg-angelette-50 hover:bg-angelette-100 text-angelette-800 rounded-lg p-3 text-sm transition-colors duration-200"
          >
            {{ option.text }}
          </button>
        </div>

        <!-- Response Message -->
        <div v-if="showResponse" class="flex items-start space-x-2">
          <div class="w-8 h-8 rounded-full bg-angelette-100 flex items-center justify-center flex-shrink-0">
            <img 
              src="/images/logo-angelette.avif" 
              alt="Angeleti Incorporadora"
              class="w-6 h-6 object-contain"
              @error="handleLogoError"
            />
          </div>
          <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p class="text-sm text-gray-800 mb-3">
              {{ selectedResponse }}
            </p>
            <button
              @click="goToWhatsApp"
              class="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Entrar em contato pelo WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Toggle Button -->
    <button
      @click="toggleChat"
      class="w-14 h-14 bg-angelette-600 hover:bg-angelette-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
    >
      <img 
        v-if="!isOpen"
        src="/images/logo-angelette.avif" 
        alt="ANGELETI INCORPORADORA"
        class="w-8 h-8 object-contain"
        @error="handleLogoError"
      />
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const showOptions = ref(false)
const showResponse = ref(false)
const selectedResponse = ref('')
const selectedType = ref('')

const options = [
  { text: 'Tenho algumas dúvidas e gostaria de saber mais', response: 'Gostaria de saber mais sobre os nossos empreendimentos?', type: 'info' },
  { text: 'Quero visitar', response: 'Preciso de mais informações', type: 'visit' },
  { text: 'Emitir boleto', response: 'Gostaria de emitir um boleto', type: 'boleto' }
]

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    showOptions.value = true
    showResponse.value = false
  }
}

const selectOption = (option) => {
  selectedResponse.value = option.response
  selectedType.value = option.type
  showOptions.value = false
  showResponse.value = true
}

const goToWhatsApp = () => {
  let phoneNumber = '5521994237110' // Número padrão para dúvidas e visitas
  let message = `Olá, Angeleti Incorporadora! Vim através do seu site, gostaria de saber mais informações.`
  
  if (selectedType.value === 'boleto') {
    phoneNumber = '5521967404636' // Número específico para emissão de boleto
    message = `Olá, Angeleti Incorporadora, vim através do seu site, gostaria de saber sobre a emissão de boletos.`
  }
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const handleLogoError = (event) => {
  event.target.style.display = 'none'
  const container = event.target.parentElement
  container.innerHTML = '<span class="text-angelette-600 font-bold text-lg">A</span>'
}
</script>
