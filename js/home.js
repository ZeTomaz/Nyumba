/**
 * Nyumba Food Concept - Home Page Script
 */

const homeLangData = {
    pt: {
        mainWelcome: "Bem-vindo ao Nyumba Food Concept",
        mainSubtitle: "Onde a Tradição Encontra a Inovação em Maputo",
        mainP1: "Nyumba, que significa 'Casa' em Swahili, é mais do que um restaurante; é um espaço de encontro onde a riqueza da culinária moçambicana se harmoniza com influências internacionais. Localizado no coração vibrante do Parque dos Continuadores, oferecemos uma experiência gastronómica única, seja para um almoço descontraído na nossa esplanada, um jantar especial ou um cocktail ao final do dia.",
        mainP2: "Explore o nosso menu e descubra os nossos Pratos do Chefe exclusivos, ou visite a nossa Galeria para ver a atmosfera acolhedora que nos define. Estamos abertos todos os dias para recebê-lo.",
        ctaMenu: "Explorar o Menu",
        ctaGallery: "Ver Galeria"
    },
    en: {
        mainWelcome: "Welcome to Nyumba Food Concept",
        mainSubtitle: "Where Tradition Meets Innovation in Maputo",
        mainP1: "Nyumba, meaning 'House' in Swahili, is more than a restaurant; it is a meeting place where the richness of Mozambican cuisine harmonizes with international influences. Located in the vibrant heart of Continuadores Park, we offer a unique gastronomic experience, whether for a relaxed lunch on our terrace, a special dinner, or a cocktail at the end of the day.",
        mainP2: "Explore our menu and discover our exclusive Chef's Dishes, or visit our Gallery to see the welcoming atmosphere that defines us. We are open every day to welcome you.",
        ctaMenu: "Explore Menu",
        ctaGallery: "View Gallery"
    }
};

// Define the update function called by main.js
window.updatePageContent = function (l) {
    const t = homeLangData[l];

    updateText("main-welcome", t.mainWelcome);
    updateText("main-subtitle", t.mainSubtitle);
    updateText("main-p1", t.mainP1);
    updateText("main-p2", t.mainP2);
    updateText("cta-menu", t.ctaMenu);
    updateText("cta-gallery", t.ctaGallery);
};
