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
          class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 bg-white border border-gradient"
        >
          <!-- Card Background Image -->
          <div class="relative h-80 overflow-hidden">
            <img 
              :src="card.backgroundImage" 
              :alt="card.title"
              class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
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
    backgroundImage: '/images/vale-dos-passaros.avif',
    url: 'https://valedospassaros.angeleti.com.br/'
  },
  {
    id: 'golden-green',
    title: 'Golden Green',
    backgroundImage: '/images/golden-green.avif',
    url: 'https://goldengreen.angeleti.com.br/'
  },
  {
    id: 'dom-village',
    title: 'Dom Village',
    backgroundImage: '/images/dom-village.png',
    url: 'https://domvillage.angeleti.com.br/'
  }
]

const goToEmpreendimento = (empreendimentoId) => {
  const card = cards.find(c => c.id === empreendimentoId)
  if (card && card.url) {
    window.open(card.url, '_blank')
  }
}
</script>

<style scoped>
.text-gradient {
  @apply bg-gradient-to-r from-angelette-600 to-angelette-800 bg-clip-text text-transparent;
}

.border-gradient {
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #3a9d3a, #2d7a2d) border-box;
  border: 2px solid transparent;
  box-shadow: 0 25px 50px -12px rgba(58, 157, 58, 0.25), 
              0 0 0 1px rgba(58, 157, 58, 0.1);
}

.group:hover .border-gradient {
  box-shadow: 0 35px 60px -12px rgba(58, 157, 58, 0.4), 
              0 0 0 1px rgba(58, 157, 58, 0.2);
}

/* Garantir que as imagens sejam bem posicionadas */
.relative img {
  object-fit: cover;
  object-position: center center;
}
</style>