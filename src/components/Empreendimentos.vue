<template>
  <section id="empreendimentos" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Grupo <span class="text-gradient">Angélette</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Linhas de empreendimentos especialmente projetados para cada segmento
        </p>
      </div>

      <!-- Empreendimentos Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div
          v-for="(empreendimento, index) in empreendimentos"
          :key="empreendimento.id"
          :class="[
            'rounded-2xl overflow-hidden card-hover',
            getColorClasses(empreendimento.color).bg,
            getColorClasses(empreendimento.color).border
          ]"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img
              :src="empreendimento.image"
              :alt="empreendimento.name"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            <!-- Icon -->
            <div :class="[
              'absolute top-4 right-4 p-3 rounded-full',
              getColorClasses(empreendimento.color).primary
            ]">
              <component :is="empreendimento.icon" class="w-6 h-6 text-white" />
            </div>

            <!-- Price Badge -->
            <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span class="font-bold text-gray-900">{{ empreendimento.price }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Header -->
            <div class="mb-4">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                {{ empreendimento.name }}
              </h3>
              <div class="flex items-center text-gray-600 mb-3">
                <MapPin class="w-4 h-4 mr-2" />
                <span>{{ empreendimento.location }}</span>
              </div>
              <p class="text-gray-600 leading-relaxed">
                {{ empreendimento.description }}
              </p>
            </div>

            <!-- Features -->
            <div class="mb-6">
              <div class="grid grid-cols-2 gap-2">
                <div
                  v-for="(feature, featureIndex) in empreendimento.features"
                  :key="featureIndex"
                  class="flex items-center text-sm text-gray-600"
                >
                  <div :class="[
                    'w-2 h-2 rounded-full mr-2',
                    getColorClasses(empreendimento.color).primary
                  ]"></div>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-3">
              <button
                @click="goToEmpreendimento(empreendimento.id)"
                :class="[
                  'px-4 py-2 rounded-xl font-medium flex items-center justify-center space-x-2 flex-1 transition-all duration-300 hover:shadow-lg',
                  getColorClasses(empreendimento.color).primary,
                  'text-white'
                ]"
              >
                <ExternalLink class="w-4 h-4" />
                <span>Ver Página</span>
              </button>
              
              <button
                @click="downloadMaterial(empreendimento.id)"
                :class="[
                  'px-4 py-2 rounded-xl font-medium flex items-center justify-center space-x-2 flex-1 transition-all duration-300 hover:shadow-lg',
                  getColorClasses(empreendimento.color).text,
                  getColorClasses(empreendimento.color).border,
                  'border-2'
                ]"
              >
                <Download class="w-4 h-4" />
                <span>Material</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <div class="bg-angelette-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Encontrou o empreendimento ideal?
          </h3>
          <p class="text-xl text-angelette-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra as melhores condições para realizar seu sonho
          </p>
          <button
            @click="scrollToSection('#contato')"
            class="bg-white text-angelette-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Falar com Consultor
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, ExternalLink, Download, TreePine, Mountain, Home } from 'lucide-vue-next'

const empreendimentos = [
  {
    id: 'vale-dos-passaros',
    name: 'Vale dos Pássaros Residencial',
    location: 'Teresópolis/RJ',
    description: 'Um paraíso verde onde a natureza encontra o conforto moderno. Lotes de 360m² a partir de R$116.000.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'vale',
    icon: TreePine,
    features: ['Lotes de 360m²', 'Entrada 10%', 'Financiamento Próprio', 'Infraestrutura Completa'],
    price: 'R$ 116.000',
    area: '360m²'
  },
  {
    id: 'golden-green',
    name: 'Golden Green Teresópolis',
    location: 'Teresópolis/RJ',
    description: 'Localização privilegiada com vista 360º das montanhas de Teresópolis. Lotes de 360m² a 1480m².',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'golden',
    icon: Mountain,
    features: ['Lotes 360m² a 1480m²', 'Entrada R$19.900', 'Financiamento 120x', 'Portaria 24h'],
    price: 'R$ 19.900',
    area: '360m² - 1480m²'
  },
  {
    id: 'dom-village',
    name: 'Dom Village Maricá',
    location: 'Maricá/RJ',
    description: 'Infraestrutura de clube com lazer completo. Lotes de 360m² a partir de R$95.500.',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'dom',
    icon: Home,
    features: ['Lotes 360m²', 'Infraestrutura Completa', 'Segurança 24h', 'Próximo às Praias'],
    price: 'R$ 95.500',
    area: '360m²'
  }
]

const getColorClasses = (color) => {
  const colorClasses = {
    vale: {
      bg: 'bg-vale-50',
      primary: 'bg-vale-600',
      text: 'text-vale-600',
      border: 'border-vale-200',
      hover: 'hover:bg-vale-100'
    },
    golden: {
      bg: 'bg-golden-50',
      primary: 'bg-golden-600',
      text: 'text-golden-600',
      border: 'border-golden-200',
      hover: 'hover:bg-golden-100'
    },
    dom: {
      bg: 'bg-dom-50',
      primary: 'bg-dom-600',
      text: 'text-dom-600',
      border: 'border-dom-200',
      hover: 'hover:bg-dom-100'
    }
  }
  
  return colorClasses[color]
}

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const goToEmpreendimento = (empreendimentoId) => {
  // Aqui você pode definir as URLs específicas para cada empreendimento
  const urls = {
    'vale-dos-passaros': '/vale-dos-passaros',
    'golden-green': '/golden-green',
    'dom-village': '/dom-village'
  }
  
  const url = urls[empreendimentoId] || '#'
  
  if (url.startsWith('/')) {
    // Para desenvolvimento, vamos simular navegação
    console.log(`Navegando para: ${url}`)
    // Em produção, você usaria: window.location.href = url
    alert(`Redirecionando para a página do ${empreendimentoId}`)
  } else {
    window.open(url, '_blank')
  }
}

const downloadMaterial = (empreendimentoId) => {
  // Simular download do material
  console.log(`Baixando material do ${empreendimentoId}`)
  alert(`Baixando material do ${empreendimentoId}`)
}
</script>
