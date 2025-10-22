<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Banner Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-angelette-900/85 via-angelette-800/75 to-angelette-700/85 z-10"></div>
        <div 
          class="w-full h-full bg-cover bg-center bg-no-repeat"
          :style="{
            backgroundImage: `url('/images/banner-sobre-angelete.avif')`
          }"
        ></div>
        <!-- Overlay Pattern -->
        <div class="absolute inset-0 bg-black/20 z-20"></div>
      </div>
      
      <!-- Banner Content -->
      <div class="relative z-30 container-custom text-center text-white">
        <div class="max-w-4xl mx-auto">
          <!-- Main Title -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Sobre a <span class="text-gradient-white">ANGELETTE INCORPORADORA</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos transformando paisagens em lugares únicos para viver
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div class="w-8 h-8 border-2 border-white/70 rounded-full flex items-center justify-center animate-bounce">
          <svg class="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Nossa <span class="text-gradient">História</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fundada com a visão de criar empreendimentos únicos que respeitam a natureza, 
            a ANGELETTE INCORPORADORA E CONSTRUTORA nasceu da paixão por transformar paisagens em lugares 
            especiais para viver.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- Text Content -->
          <div class="space-y-6">
            <h3 class="text-3xl font-bold text-gray-900 mb-6">
              Compromisso com a Excelência
            </h3>
            
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nossa trajetória é marcada pelo compromisso com a excelência, inovação e 
                sustentabilidade. Cada projeto é desenvolvido com cuidado especial para 
                harmonizar com o ambiente natural, criando espaços que proporcionam qualidade 
                de vida excepcional.
              </p>
              
              <p>
                Hoje, somos reconhecidos como uma das principais incorporadoras da região, 
                sempre buscando novas formas de inovar e superar as expectativas dos nossos clientes.
              </p>
              
              <p>
                Com mais de 15 anos de experiência, já entregamos centenas de lares que se 
                tornaram verdadeiros refúgios para as famílias que confiam em nosso trabalho.
              </p>
            </div>

            <button
              @click="goToEmpreendimentos"
              class="btn-primary flex items-center space-x-2 mt-8"
            >
              <span>Conheça Nossos Projetos</span>
              <ArrowRight class="w-5 h-5" />
            </button>
          </div>

          <!-- Image -->
          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe ANGELETTE INCORPORADORA"
                class="w-full h-96 object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <!-- Floating Stats -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div class="text-center">
                <div class="text-3xl font-bold text-angelette-600 mb-1">15+</div>
                <div class="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Valores -->
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Valores
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(valor, index) in valores"
              :key="index"
              class="bg-gradient-to-b from-angelette-600 to-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div class="w-16 h-16 bg-angelette-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <component :is="valor.icon" class="w-8 h-8 text-angelette-600" />
              </div>
              <h4 class="text-xl font-bold text-white mb-3">
                {{ valor.title }}
              </h4>
              <p class="text-gray-800 leading-relaxed">
                {{ valor.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Números -->
        <div class="bg-angelette-600 rounded-2xl p-8 md:p-12 mb-20">
          <div class="text-center mb-12">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Falam por Si
            </h3>
            <p class="text-xl text-angelette-100">
              Resultados que comprovam nossa excelência e compromisso
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              v-for="(numero, index) in numeros"
              :key="index"
              class="text-center"
            >
              <div class="text-4xl md:text-5xl font-bold text-white mb-2">
                {{ numero.number }}
              </div>
              <div class="text-angelette-100 font-medium">
                {{ numero.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Final -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Card 1: História -->
          <div class="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Pronto para Fazer Parte da Nossa História?
            </h3>
            <p class="text-xl text-gray-600 mb-8">
              Junte-se às centenas de famílias que já escolheram a ANGELETTE INCORPORADORA para realizar 
              o sonho da casa própria em um ambiente único e especial.
            </p>
            <button
              @click="goToContato"
              class="btn-primary text-lg px-8 py-4"
            >
              Fale Conosco Agora
            </button>
          </div>

          <!-- Card 2: Boletos -->
          <div class="bg-angelette-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Dúvidas sobre Boletos?
            </h3>
            <p class="text-xl text-gray-600 mb-8">
              Tem dúvidas sobre como emitir boletos, pagamentos ou questões financeiras? 
              Nossa equipe de especialistas está pronta para ajudar você.
            </p>
            <button
              @click="goToBoletoEspecialista"
              class="bg-angelette-600 hover:bg-angelette-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Fale com o Especialista
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
    
    <!-- Chatbot -->
    <Chatbot />
  </div>
</template>

<script setup>
import { ArrowRight, Award, Users, Leaf, Target } from 'lucide-vue-next'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Chatbot from '../components/Chatbot.vue'

const valores = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Transformar paisagens em lugares únicos para viver, criando empreendimentos que harmonizam com a natureza e proporcionam qualidade de vida excepcional.'
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Comprometidos com práticas sustentáveis, preservando o meio ambiente e criando espaços que respeitam a biodiversidade local.'
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Excelência em cada projeto, utilizando materiais de primeira qualidade e técnicas construtivas inovadoras para garantir durabilidade e conforto.'
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Criamos não apenas residências, mas comunidades vibrantes onde as pessoas podem viver, crescer e criar memórias duradouras.'
  }
]

const numeros = [
  { number: '15+', label: 'Anos de Experiência' },
  { number: '3', label: 'Empreendimentos Ativos' },
  { number: '500+', label: 'Famílias Atendidas' },
  { number: '100%', label: 'Satisfação dos Clientes' }
]

const goToEmpreendimentos = () => {
  // Redirecionar para a página inicial com scroll para empreendimentos
  window.location.href = '/#grupo-angelette'
}

const goToContato = () => {
  // Abrir WhatsApp com mensagem pré-definida
  const phoneNumber = '5521994237110'
  const message = `Olá, ANGELETTE INCORPORADORA! Vim através do seu site, gostaria de saber mais informações.`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const goToBoletoEspecialista = () => {
  // Abrir WhatsApp com o especialista em boletos
  const phoneNumber = '5521967404636'
  const message = `Olá, Construtora Gelete, vim através do seu site, gostaria de saber sobre a emissão de boletos.`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>

<style scoped>
.text-gradient {
  @apply bg-gradient-to-r from-angelette-600 to-angelette-800 bg-clip-text text-transparent;
}

.text-gradient-white {
  @apply bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent;
}

.btn-primary {
  @apply bg-gradient-to-r from-angelette-600 to-angelette-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-angelette-700 hover:to-angelette-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1;
}
</style>
