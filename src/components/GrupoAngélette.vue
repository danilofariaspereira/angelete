<template>
  <section id="grupo-angelette" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          GRUPO <span class="text-gradient">ANGÉLETTE</span>
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(card, index) in cards"
          :key="card.id"
          class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-white"
        >
          <!-- Card Background Image -->
          <div class="relative h-80 overflow-hidden">
            <img 
              :src="card.backgroundImage" 
              :alt="card.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
          </div>
          
          <!-- Card Content -->
          <div class="p-8 bg-white">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              {{ card.title }}
            </h3>
            
            <!-- CTA Button -->
            <button 
              @click="goToEmpreendimento(card.id)"
              class="w-full bg-gradient-to-r from-angelette-600 to-angelette-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-angelette-700 hover:to-angelette-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    id: 'vale-dos-passaros',
    title: 'Vale dos Pássaros',
    backgroundImage: '/vale-dos-passaros.avif'
  },
  {
    id: 'golden-green',
    title: 'Golden Green',
    backgroundImage: '/goldem-grem.avif'
  },
  {
    id: 'dom-village',
    title: 'Dom Village',
    backgroundImage: '/dom-village.png'
  }
]

const goToEmpreendimento = (empreendimentoId) => {
  const urls = {
    'vale-dos-passaros': '/vale-dos-passaros',
    'golden-green': '/golden-green',
    'dom-village': '/dom-village'
  }
  
  const url = urls[empreendimentoId] || '#'
  console.log(`Navegando para: ${url}`)
  alert(`Redirecionando para ${empreendimentoId}`)
}
</script>

<style scoped>
.text-gradient {
  @apply bg-gradient-to-r from-angelette-600 to-angelette-800 bg-clip-text text-transparent;
}
</style>