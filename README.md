# ANGELETI INCORPORADORA - Site Institucional

Site institucional da ANGELETI INCORPORADORA desenvolvido em **HTML, CSS e JavaScript puro**.

## 📁 Estrutura do Projeto

```
angelet/
├── css/                    # Arquivos CSS
│   ├── styles.css         # Estilos principais
│   └── animations.css     # Animações personalizadas
├── js/                     # Arquivos JavaScript
│   └── script.js          # Funcionalidades JavaScript
├── pages/                  # Páginas HTML
│   └── sobre.html         # Página Sobre
├── public/                 # Arquivos públicos
│   ├── images/            # Imagens do site
│   └── favicon.ico        # Favicon
├── index.html             # Página inicial
└── package.json           # Configuração do projeto
```

## 🚀 Como Executar

### Opção 1: Servidor HTTP Simples (Recomendado)

```bash
npm run serve
```

Isso iniciará um servidor HTTP na porta 3000 e abrirá automaticamente no navegador.

### Opção 2: Python (se instalado)

```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

### Opção 3: Node.js http-server

```bash
npx http-server . -p 3000 -o
```

### Opção 4: Abrir diretamente

Você pode abrir o arquivo `index.html` diretamente no navegador, mas algumas funcionalidades podem não funcionar corretamente devido às políticas CORS.

## 📄 Páginas

- **index.html** - Página inicial com Hero, Empreendimentos e Contato
- **pages/sobre.html** - Página Sobre com história, valores e números da empresa

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript (Vanilla)** - Funcionalidades interativas
- **Google Fonts** - Tipografia (Inter e Poppins)

## ✨ Funcionalidades

- ✅ Design responsivo
- ✅ Menu mobile
- ✅ Chatbot integrado
- ✅ Integração com WhatsApp
- ✅ Integração com Google Maps
- ✅ Animações suaves
- ✅ Scroll suave
- ✅ Navegação entre páginas

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🔧 Personalização

### Cores

As cores principais estão definidas em `css/styles.css` na variável `:root`:

```css
:root {
  --angelette-600: #4a7c4a;
  --angelette-700: #3d653d;
  /* ... */
}
```

### Conteúdo

- Edite `index.html` para modificar a página inicial
- Edite `pages/sobre.html` para modificar a página sobre
- Edite `js/script.js` para modificar funcionalidades JavaScript
- Edite `css/styles.css` para modificar estilos

## 📞 Contato

Para mais informações sobre o projeto, entre em contato através do site.

---

**Desenvolvido com ❤️ para ANGELETI INCORPORADORA**
