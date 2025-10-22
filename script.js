// ---------- DADOS DE TRADUÇÃO ----------
const langData = {
  pt: {
    navHome: "Principal", navGallery: "Galeria", navMenu: "Menu", navContact: "Contactos",
    mainWelcome: "Bem-vindo ao Nyumba Food Concept", mainSubtitle: "Onde a Tradição Encontra a Inovação em Maputo",
    ctaMenu: "Explorar o Menu", ctaGallery: "Ver Galeria"
  },
  en: {
    navHome: "Home", navGallery: "Gallery", navMenu: "Menu", navContact: "Contacts",
    mainWelcome: "Welcome to Nyumba Food Concept", mainSubtitle: "Where Tradition Meets Innovation in Maputo",
    ctaMenu: "Explore Menu", ctaGallery: "View Gallery"
  }
};

// ---------- FUNÇÕES DE TRADUÇÃO ----------
function updateText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function setLang(l) {
  const t = langData[l];
  document.documentElement.lang = l;

  // Cabeçalho
  updateText("nav-home", t.navHome);
  updateText("nav-gallery", t.navGallery);
  updateText("nav-menu", t.navMenu);
  updateText("nav-contact", t.navContact);

  // Conteúdos da página principal
  updateText("main-welcome", t.mainWelcome);
  updateText("main-subtitle", t.mainSubtitle);
  updateText("cta-menu", t.ctaMenu);
  updateText("cta-gallery", t.ctaGallery);

  updateDateTime();
}

// ---------- DATA/HORA ----------
function updateDateTime() {
  const now = new Date();
  const langCode = document.documentElement.lang || 'pt';
  const date = now.toLocaleDateString(langCode === 'en' ? 'en-US' : 'pt-PT', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  const time = now.toLocaleTimeString(langCode === 'en' ? 'en-US' : 'pt-PT', {
    hour: '2-digit', minute: '2-digit'
  });
  const el = document.getElementById('date-time');
  if (el) el.textContent = `${date} | ${time}`;
}

// ---------- INICIALIZAÇÃO ----------
window.onload = function() {
  setLang('pt');
  updateDateTime();
};
setInterval(updateDateTime, 60000);
