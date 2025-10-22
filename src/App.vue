<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Hero Section -->
    <Hero />
    
    <!-- Grupo Angélette Section -->
    <GrupoAngélette />
    
    <!-- Sobre Section -->
    <Sobre />
    
    <!-- Contato Section -->
    <Contato />
    
    <!-- Footer -->
    <Footer />
    
    <!-- WhatsApp Floating Button -->
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Empreendimentos from './components/Empreendimentos.vue'
import GrupoAngélette from './components/GrupoAngélette.vue'
import Sobre from './components/Sobre.vue'
import Contato from './components/Contato.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>
