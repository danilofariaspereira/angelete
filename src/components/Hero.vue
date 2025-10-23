<template>
  <section id="home" class="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-angelette-900/85 via-angelette-800/75 to-angelette-700/85 z-10"></div>
      <div 
        class="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        :style="{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }"
      ></div>
      <!-- Overlay Pattern -->
      <div class="absolute inset-0 bg-black/20 z-20"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 container-custom text-center text-white px-5 md:px-0">
      <div class="max-w-4xl mx-auto">
        <!-- Main Title -->
        <h1 class="text-3xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
          Seja bem-vindo a Angeleti Incorporadora
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-2xl mb-8 md:mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Lugar de transformar sonhos em realidade
        </p>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button 
        @click="scrollToNext"
        class="w-8 h-8 border-2 border-white/70 rounded-full flex items-center justify-center animate-bounce hover:border-white hover:bg-white/10 transition-all duration-300"
      >
        <svg class="w-4 h-4 text-white/70 hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
// Componente Hero - banner principal

const scrollToNext = () => {
  const nextSection = document.querySelector('#grupo-angelette')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
