<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Hero Section -->
    <Hero />
    
    <!-- Grupo Angélette Section -->
    <GrupoAngélette />
    
    <!-- Contato Section -->
    <Contato />
    
    <!-- Footer -->
    <Footer />
    
    <!-- Chatbot -->
    <Chatbot />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import GrupoAngélette from '../components/GrupoAngélette.vue'
import Contato from '../components/Contato.vue'
import Footer from '../components/Footer.vue'
import Chatbot from '../components/Chatbot.vue'
</script>
