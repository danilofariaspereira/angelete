<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Logo and Description -->
        <div class="lg:col-span-1 text-center md:text-left">
          <div class="flex items-center space-x-4 mb-6 justify-center md:justify-start">
            <div class="w-16 h-16 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-angelette-500 to-angelette-700 flex items-center justify-center">
              <img 
                src="/images/logo-angelette.avif" 
                alt="Angeleti Incorporadora"
                class="w-full h-full object-contain"
                @error="handleLogoError"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-white">ANGELETI</span>
              <span class="text-sm font-semibold text-gray-300 uppercase tracking-wider">INCORPORADORA</span>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="flex space-x-4 justify-center md:justify-start">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              target="_blank"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              :class="social.color"
              :aria-label="social.label"
            >
              <component v-if="social.icon !== 'whatsapp'" :is="social.icon" class="w-5 h-5" />
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Empreendimentos -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold mb-4">Empreendimentos</h3>
          <ul class="space-y-2">
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
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold mb-4">Institucional</h3>
          <ul class="space-y-2">
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
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold mb-4">Contato</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <Phone class="w-5 h-5 text-angelette-400 mt-1 flex-shrink-0" />
              <div class="text-center md:text-left">
                <p class="text-gray-300">(21) 99423-7110</p>
                <p class="text-sm text-gray-400">Segunda a Sexta, 8h às 18h</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <Mail class="w-5 h-5 text-angelette-400 mt-1 flex-shrink-0" />
              <div class="text-center md:text-left">
                <p class="text-gray-300">contato@angeleti.com.br</p>
                <p class="text-sm text-gray-400">Resposta em até 24h</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-8">
        <div class="text-center space-y-2">
          <div class="text-gray-400 text-sm">
            © 2024 Angeleti Incorporadora. Todos os direitos reservados.
          </div>
          
          <div class="text-gray-400 text-sm">
            Criado por 
            <a 
              href="https://wa.me/5521993350228?text=Vim através do site da Angeleti Incorporadora e gostaria de saber mais sobre seu trabalho"
              target="_blank"
              class="text-angelette-400 hover:text-angelette-300 transition-colors font-medium"
            >
              Danilo Farias
            </a>
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
import { Facebook, Instagram, Mail, Phone, ArrowUp } from 'lucide-vue-next'


const handleLogoError = (event) => {
  // Se a logo não carregar, mostra o fallback com a letra A
  event.target.style.display = 'none'
  const container = event.target.parentElement
  container.innerHTML = '<span class="text-white font-bold text-2xl">A</span>'
}

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/angeleticonstrutora?locale=pt_BR',
    label: 'Facebook',
    color: 'hover:text-blue-600'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/angeleticonstrutora/',
    label: 'Instagram',
    color: 'hover:text-pink-600'
  },
  {
    icon: 'whatsapp',
    href: 'https://wa.me/5521994237110?text=Olá, Angeleti Incorporadora! Vim através do seu site, gostaria de saber mais informações.',
    label: 'WhatsApp',
    color: 'hover:text-green-600'
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
