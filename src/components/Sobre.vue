<template>
  <section id="sobre" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Sobre a <span class="text-gradient">Angélette</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Há mais de 15 anos, a Angélette Incorporadora vem transformando paisagens 
          em lugares únicos para viver, sempre com foco na qualidade, sustentabilidade e inovação.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Text Content -->
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-gray-900 mb-6">
            Nossa História
          </h3>
          
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Fundada com a visão de criar empreendimentos únicos que respeitam a natureza, 
              a Angélette Incorporadora nasceu da paixão por transformar paisagens em lugares 
              especiais para viver.
            </p>
            
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
          </div>

          <button
            @click="scrollToSection('#empreendimentos')"
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
              alt="Equipe Angélette"
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
            class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="w-16 h-16 bg-angelette-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="valor.icon" class="w-8 h-8 text-angelette-600" />
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-3">
              {{ valor.title }}
            </h4>
            <p class="text-gray-600 leading-relaxed">
              {{ valor.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Números -->
      <div class="bg-angelette-600 rounded-2xl p-8 md:p-12">
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
      <div class="text-center mt-16">
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            Pronto para Fazer Parte da Nossa História?
          </h3>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se às centenas de famílias que já escolheram a Angélette para realizar 
            o sonho da casa própria em um ambiente único e especial.
          </p>
          <button
            @click="scrollToSection('#contato')"
            class="btn-primary text-lg px-8 py-4"
          >
            Fale Conosco Agora
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Award, Users, Leaf, Target } from 'lucide-vue-next'

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

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
