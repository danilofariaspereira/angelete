<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Logo and Description -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-angelette-500 to-angelette-700 flex items-center justify-center">
              <img 
                src="/images/logo-angelette.avif" 
                alt="Angélette Incorporadora"
                class="w-full h-full object-contain"
                @error="handleLogoError"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-white">ANGELETTE</span>
              <span class="text-sm font-semibold text-gray-300 uppercase tracking-wider">INCORPORADORA</span>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed mb-6">
            Transformando paisagens em lugares únicos para viver. 
            Há mais de 15 anos criando empreendimentos que harmonizam 
            com a natureza e proporcionam qualidade de vida excepcional.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              @click="social.onClick"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              :class="social.color"
              :aria-label="social.label"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Empreendimentos -->
        <div>
          <h3 class="text-xl font-bold mb-6">Empreendimentos</h3>
          <ul class="space-y-3">
            <li v-for="(empreendimento, index) in empreendimentos" :key="index">
              <button
                @click="scrollToSection(empreendimento.href)"
                class="text-gray-300 hover:text-angelette-400 transition-colors duration-300"
              >
                {{ empreendimento.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Links Institucionais -->
        <div>
          <h3 class="text-xl font-bold mb-6">Institucional</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in linksInstitucionais" :key="index">
              <button
                @click="handleLinkClick(link.href)"
                class="text-gray-300 hover:text-angelette-400 transition-colors duration-300"
              >
                {{ link.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-6">Contato</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <Phone class="w-5 h-5 text-angelette-400 mt-1 flex-shrink-0" />
              <div>
                <p class="text-gray-300">(21) 99837-6181</p>
                <p class="text-sm text-gray-400">Segunda a Sexta, 8h às 18h</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <Mail class="w-5 h-5 text-angelette-400 mt-1 flex-shrink-0" />
              <div>
                <p class="text-gray-300">contato@angeleti.com.br</p>
                <p class="text-sm text-gray-400">Resposta em até 24h</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <MapPin class="w-5 h-5 text-angelette-400 mt-1 flex-shrink-0" />
              <div>
                <p class="text-gray-300">Teresópolis e Maricá</p>
                <p class="text-sm text-gray-400">Rio de Janeiro</p>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA -->
          <button
            @click="handleWhatsAppClick"
            class="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageCircle class="w-5 h-5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © 2024 Angélette Incorporadora. Todos os direitos reservados.
          </div>
          
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <button class="hover:text-angelette-400 transition-colors">
              Termos de Uso
            </button>
            <button class="hover:text-angelette-400 transition-colors">
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button
        @click="scrollToTop"
        class="fixed bottom-6 left-6 w-12 h-12 bg-angelette-600 hover:bg-angelette-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUp class="w-6 h-6" />
      </button>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUp } from 'lucide-vue-next'

const handleWhatsAppClick = () => {
  const phoneNumber = '5521998376181'
  const message = `Olá! Gostaria de saber mais sobre os empreendimentos da Angélette.`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const handleLogoError = (event) => {
  // Se a logo não carregar, mostra o fallback com a letra A
  event.target.style.display = 'none'
  const container = event.target.parentElement
  container.innerHTML = '<span class="text-white font-bold text-2xl">A</span>'
}

const socialLinks = [
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook',
    color: 'hover:text-blue-600'
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram',
    color: 'hover:text-pink-600'
  },
  {
    icon: MessageCircle,
    href: '#',
    label: 'WhatsApp',
    color: 'hover:text-green-600',
    onClick: handleWhatsAppClick
  }
]

const empreendimentos = [
  { name: 'Vale dos Pássaros', href: '#vale-dos-passaros' },
  { name: 'Golden Green', href: '#golden-green' },
  { name: 'Dom Village', href: '#dom-village' }
]

const linksInstitucionais = [
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Empreendimentos', href: '#empreendimentos' },
  { name: 'Contato', href: '#contato' },
  { name: 'Política de Privacidade', href: '#' }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleLinkClick = (href) => {
  if (href.startsWith('#')) {
    scrollToSection(href)
  } else {
    window.open(href, '_blank')
  }
}
</script>
