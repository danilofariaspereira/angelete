// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('show');
    
    if (isOpen) {
      mobileMenu.classList.remove('show');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.add('show');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.pageYOffset > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.2)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
  }
});

// ============================================
// SCROLL FUNCTIONS
// ============================================

function scrollToNext() {
  const nextSection = document.querySelector('#grupo-angelette');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Fechar menu mobile se estiver aberto
  if (mobileMenu && mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
    if (menuIcon) menuIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }
}

// ============================================
// WHATSAPP FUNCTIONS
// ============================================

function openWhatsApp() {
  const phoneNumber = '5521994237110';
  const message = 'Olá, ANGELETI INCORPORADORA! Vim através do seu site, gostaria de saber mais informações.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


// ============================================
// GOOGLE MAPS
// ============================================

function openGoogleMaps() {
  const mapsUrl = 'https://www.google.com/maps/search/Avenida+Feliciano+Sodré+300+Sala+121+Teresópolis+RJ';
  window.open(mapsUrl, '_blank');
}

// ============================================
// EMPREENDIMENTOS
// ============================================

const empreendimentos = {
  'vale-dos-passaros': 'https://valedospassaros.angeleti.com.br/',
  'golden-green': 'https://goldengreen.angeleti.com.br/',
  'dom-village': 'https://domvillage.angeleti.com.br/'
};

function goToEmpreendimento(id) {
  const url = empreendimentos[id];
  if (url) {
    window.open(url, '_blank');
  }
}

// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatToggleImg = document.getElementById('chat-toggle-img');
const chatClose = document.getElementById('chat-close');
const chatOptions = document.getElementById('chat-options');
const chatResponse = document.getElementById('chat-response');
const chatResponseText = document.getElementById('chat-response-text');

const chatOptionsData = [
  {
    text: 'Tenho algumas dúvidas e gostaria de saber mais',
    response: 'Gostaria de saber mais sobre os nossos empreendimentos?',
    type: 'info'
  },
  {
    text: 'Quero visitar',
    response: 'Preciso de mais informações',
    type: 'visit'
  },
  {
    text: 'Emitir boleto',
    response: 'Gostaria de emitir um boleto',
    type: 'boleto'
  }
];

let selectedChatType = '';

function toggleChat() {
  if (chatWindow && chatToggle) {
    const isOpen = !chatWindow.classList.contains('hidden');
    
    if (isOpen) {
      chatWindow.classList.add('hidden');
      if (chatToggleImg) chatToggleImg.style.display = 'block';
      if (chatClose) chatClose.classList.add('hidden');
    } else {
      chatWindow.classList.remove('hidden');
      if (chatToggleImg) chatToggleImg.style.display = 'none';
      if (chatClose) chatClose.classList.remove('hidden');
      
      // Resetar estado do chat
      if (chatOptions) chatOptions.style.display = 'flex';
      if (chatResponse) chatResponse.classList.add('hidden');
    }
  }
}

function selectChatOption(index) {
  const option = chatOptionsData[index];
  if (!option) return;
  
  selectedChatType = option.type;
  
  if (chatOptions) chatOptions.style.display = 'none';
  if (chatResponse && chatResponseText) {
    chatResponseText.textContent = option.response;
    chatResponse.classList.remove('hidden');
  }
}

function goToWhatsAppFromChat() {
  let phoneNumber = '5521994237110';
  let message = 'Olá, Angeleti Incorporadora! Vim através do seu site, gostaria de saber mais informações.';
  
  if (selectedChatType === 'boleto') {
    phoneNumber = '5521967404636';
    message = 'Olá, Angeleti Incorporadora, vim através do seu site, gostaria de saber sobre a emissão de boletos.';
  }
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

if (chatToggle) {
  chatToggle.addEventListener('click', toggleChat);
}

// ============================================
// LOGO ERROR HANDLING
// ============================================

function handleLogoError(img) {
  img.style.display = 'none';
  const container = img.parentElement;
  if (container) {
    const fallback = document.createElement('span');
    fallback.className = 'text-white font-bold text-2xl';
    fallback.textContent = 'A';
    container.appendChild(fallback);
  }
}

function handleChatToggleError(img) {
  img.style.display = 'none';
  const container = img.parentElement;
  if (container) {
    const fallback = document.createElement('span');
    fallback.className = 'text-white font-bold text-lg';
    fallback.textContent = 'A';
    container.appendChild(fallback);
  }
}


// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Fechar menu mobile ao clicar fora
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenuBtn && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target) &&
        mobileMenu.classList.contains('show')) {
      mobileMenu.classList.remove('show');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  });
  
  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL USE
// ============================================

// Tornar funções disponíveis globalmente para uso em onclick
window.scrollToNext = scrollToNext;
window.scrollToTop = scrollToTop;
window.scrollToSection = scrollToSection;
window.openWhatsApp = openWhatsApp;
window.goToWhatsAppFromChat = goToWhatsAppFromChat;
window.openGoogleMaps = openGoogleMaps;
window.goToEmpreendimento = goToEmpreendimento;
window.toggleChat = toggleChat;
window.selectChatOption = selectChatOption;
window.handleLogoError = handleLogoError;
window.handleChatToggleError = handleChatToggleError;

