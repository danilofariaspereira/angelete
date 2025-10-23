<template>
  <nav 
    :class="[
      'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 navbar-custom',
      isScrolled 
        ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-full' 
        : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full'
    ]"
  >
    <div class="flex items-center justify-between h-full w-full">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-xl overflow-hidden">
          <img 
            src="/images/logo-angelette.avif" 
            alt="ANGELETI INCORPORADORA"
            class="w-full h-full object-contain"
            @error="handleLogoError"
          />
        </div>
        <div class="ml-3 flex flex-col">
          <span :class="[
            'font-bold text-lg transition-colors duration-300',
            isScrolled ? 'text-white' : 'text-white'
          ]">
            ANGELETI
          </span>
          <span :class="[
            'text-xs font-semibold uppercase tracking-wider transition-colors duration-300',
            isScrolled ? 'text-white' : 'text-white'
          ]">
            INCORPORADORA
          </span>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center space-x-6">
        <div 
          v-for="(item, index) in menuItems" 
          :key="index" 
          class="relative"
        >
          <div
            v-if="item.dropdown"
            class="flex items-center space-x-1 cursor-pointer group"
            @mouseenter="isDropdownOpen = true"
            @mouseleave="isDropdownOpen = false"
          >
            <span :class="[
              'font-medium text-sm transition-all duration-300 hover:scale-110',
              isInBanner || isOverDarkSection ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-angelette-400'
            ]">
              {{ item.name }}
            </span>
            <ChevronDown :class="[
              'w-4 h-4 transition-all duration-300 group-hover:scale-110',
              isInBanner || isOverDarkSection ? 'text-white group-hover:text-gray-200' : 'text-gray-600 group-hover:text-angelette-400'
            ]" />
            
            <Transition name="dropdown">
              <div
                v-if="isDropdownOpen"
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-2 border border-white/20"
              >
                <button
                  v-for="(dropdownItem, dropdownIndex) in item.dropdown"
                  :key="dropdownIndex"
                  @click="scrollToSection(dropdownItem.href)"
                  class="w-full text-left px-4 py-2 text-gray-700 hover:text-angelette-600 hover:bg-white/20 transition-colors duration-300"
                >
                  {{ dropdownItem.name }}
                </button>
              </div>
            </Transition>
          </div>
          
          <button
            v-else
            @click="scrollToSection(item.href)"
            :class="[
              'font-medium text-sm transition-all duration-300 hover:scale-110',
              isInBanner || isOverDarkSection ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-angelette-400'
            ]"
          >
            {{ item.name }}
          </button>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :class="[
          'lg:hidden p-2 rounded-lg transition-colors duration-300',
          isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
        ]"
      >
        <Menu v-if="!isMobileMenuOpen" :class="[
          'w-6 h-6 transition-colors duration-300',
          isScrolled ? 'text-white' : 'text-white'
        ]" />
        <X v-else :class="[
          'w-6 h-6 transition-colors duration-300',
          isScrolled ? 'text-white' : 'text-white'
        ]" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        :class="[
          'lg:hidden rounded-xl mt-2 overflow-hidden transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl' 
            : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl'
        ]"
      >
        <div class="py-4 space-y-2">
          <div v-for="(item, index) in menuItems" :key="index">
            <div v-if="item.dropdown" class="px-4 py-2">
              <div :class="[
                'font-medium mb-2 transition-all duration-300',
                isInBanner || isOverDarkSection ? 'text-white' : 'text-gray-600'
              ]">
                {{ item.name }}
              </div>
              <div class="ml-4 space-y-1">
                <button
                  v-for="(dropdownItem, dropdownIndex) in item.dropdown"
                  :key="dropdownIndex"
                  @click="scrollToSection(dropdownItem.href)"
                  :class="[
                    'block w-full text-left px-2 py-1 rounded transition-all duration-300 hover:scale-105',
                    isScrolled 
                      ? 'text-white hover:text-gray-200 hover:bg-white/20' 
                      : 'text-white hover:text-gray-200 hover:bg-white/20'
                  ]"
                >
                  {{ dropdownItem.name }}
                </button>
              </div>
            </div>
            <button
              v-else
              @click="scrollToSection(item.href)"
              :class="[
                'block w-full text-left px-4 py-2 transition-all duration-300 hover:scale-105',
                isInBanner || isOverDarkSection 
                  ? 'text-white hover:text-gray-200 hover:bg-white/20' 
                  : 'text-gray-600 hover:text-angelette-400 hover:bg-angelette-50'
              ]"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const router = useRouter()

const isScrolled = ref(false)
const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isOverDarkSection = ref(false)

const menuItems = [
  { name: 'Home', href: '/', isRouterLink: true },
  { name: 'Sobre', href: '/sobre', isRouterLink: true },
  { name: 'Contato', href: '#contato' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Detectar se está no banner
  isInBanner.value = window.scrollY < 400
  
  // Detectar se está sobre seção escura (contato)
  const contatoSection = document.getElementById('contato')
  if (contatoSection) {
    const rect = contatoSection.getBoundingClientRect()
    isOverDarkSection.value = rect.top <= 100 && rect.bottom >= 100
  }
}

// Função para verificar se está no banner/hero
const isInBanner = ref(false)

const scrollToSection = (href) => {
  const menuItem = menuItems.find(item => item.href === href)
  
  if (menuItem && menuItem.isRouterLink) {
    // Navegar usando router
    router.push(href)
  } else if (href === '#contato') {
    // Abrir WhatsApp para contato
    const phoneNumber = '5521994237110'
    const message = `Olá, ANGELETI INCORPORADORA! Vim através do seu site, gostaria de saber mais informações.`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  } else {
    // Scroll para seção na página atual
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  isDropdownOpen.value = false
  isMobileMenuOpen.value = false
}

const handleLogoError = (event) => {
  // Se a logo não carregar, mostra o fallback com a letra A
  event.target.style.display = 'none'
  const container = event.target.parentElement
  container.innerHTML = '<span class="text-white font-bold text-2xl">A</span>'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  height: 0;
}

.mobile-menu-leave-to {
  opacity: 0;
  height: 0;
}
</style>
