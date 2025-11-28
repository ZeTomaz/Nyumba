/**
 * Nyumba Food Concept - Gallery Page Script
 */

const galleryLangData = {
    pt: {
        galleryTitle: "Venha conhecer-nos",
        itemPratosTitle: "Pratos do Chefe", itemPratosDesc: "As nossas criações exclusivas e destaques gastronómicos.",
        itemEsplanadaTitle: "A Nossa Esplanada", itemEsplanadaDesc: "O ambiente acolhedor e tranquilo no coração do parque.",
        itemCocktailsTitle: "Cocktails Artesanais", itemCocktailsDesc: "Bebidas refrescantes e cheias de sabor para o seu final de tarde.",
        itemCozinhaTitle: "Cozinha do Quiosque", itemCozinhaDesc: "Onde a magia acontece: a preparação dos nossos pratos.",
        modalCloseHint: "Prima ESC ou clique na área escura para fechar.",

        galleryContent: {
            pratos: [
                { src: "images/pc1.jpg", pt: "Primeiro prato em destaque: Cores e frescura.", en: "First featured dish: Colors and freshness." },
                { src: "images/pc2.jpg", pt: "O Nosso Hambúrguer Especial, um clássico Nyumba.", en: "The Nyumba Classic: Our Special Burger." },
                { src: "images/pc3.jpg", pt: "Opção vegetariana com vegetais da época.", en: "Vegetarian option with seasonal vegetables." },
                { src: "images/pc4.jpg", pt: "Prato da semana: carne grelhada com legumes.", en: "Dish of the week: grilled meat with vegetables." },
            ],
            esplanada: [
                { src: "images/es1.jpg", pt: "Vista geral da esplanada ao pôr do sol.", en: "General view of the terrace at sunset." },
                { src: "images/es2.jpg", pt: "Detalhe das mesas e decoração, ideal para grupos.", en: "Detail of the tables and decor, ideal for groups." },
                { src: "images/es3.jpg", pt: "Ambiente calmo e rodeado de natureza.", en: "Calm environment surrounded by nature." },
                { src: "images/es4.jpg", pt: "Detalhe do quiosque a partir da esplanada.", en: "Detail of the kiosk from the terrace." },
            ],
            cocktails: [
                { src: "images/ck1.jpg", pt: "Cocktail Verde da Casa, muito refrescante.", en: "House Green Cocktail, very refreshing." },
                { src: "images/ck2.jpg", pt: "Clássico com um toque Nyumba: a nossa melhor bebida.", en: "Classic with a Nyumba twist: our best drink." },
                { src: "images/ck3.jpg", pt: "Bebida de frutas exóticas da nossa região.", en: "Exotic fruit drink from our region." },
                { src: "images/ck4.jpg", pt: "Gin Tónico com especiarias e frutas vermelhas.", en: "Gin Tonic with spices and red berries." },
            ],
            cozinha: [
                { src: "images/cz1.jpg", pt: "Vista da área de preparação: higiene e ordem.", en: "View of the preparation area: hygiene and order." },
                { src: "images/cz2.jpg", pt: "O nosso chefe em ação, a preparar a sua refeição.", en: "Our chef in action, preparing your meal." },
                { src: "images/cz3.jpg", pt: "Detlhes dos utensílios de cozinha, sempre limpos.", en: "Details of kitchen utensils, always clean." },
                { src: "images/cz4.jpg", pt: "Pratos prontos a servir no balcão.", en: "Dishes ready to be served at the counter." },
            ]
        }
    },
    en: {
        galleryTitle: "Come meet us",
        itemPratosTitle: "Chef's Dishes", itemPratosDesc: "Our exclusive creations and gastronomic highlights.",
        itemEsplanadaTitle: "Our Terrace", itemEsplanadaDesc: "The cozy and peaceful atmosphere in the heart of the park.",
        itemCocktailsTitle: "Artisanal Cocktails", itemCocktailsDesc: "Refreshing and creative drinks for your late afternoon.",
        itemCozinhaTitle: "Kiosk Kitchen", itemCozinhaDesc: "Where the magic happens: the preparation of our dishes.",
        modalCloseHint: "Press ESC or click dark area to close.",

        galleryContent: {
            pratos: [
                { src: "images/pc1.jpg", pt: "Primeiro prato em destaque: Cores e frescura.", en: "First featured dish: Colors and freshness." },
                { src: "images/pc2.jpg", pt: "Nossa especialidade de Marisco, um clássico Nyumba.", en: "Our Seafood specialty, a Nyumba classic." },
                { src: "images/pc3.jpg", pt: "Opção vegetariana com vegetais da época.", en: "Vegetarian option with seasonal vegetables." },
                { src: "images/pc4.jpg", pt: "Prato da semana: carne grelhada com legumes.", en: "Dish of the week: grilled meat with vegetables." },
            ],
            esplanada: [
                { src: "images/es1.jpg", pt: "Vista geral da esplanada ao pôr do sol.", en: "General view of the terrace at sunset." },
                { src: "images/es2.jpg", pt: "Detalhe das mesas e decoração, ideal para grupos.", en: "Detail of the tables and decor, ideal for groups." },
                { src: "images/es3.jpg", pt: "Ambiente calmo e rodeado de natureza.", en: "Calm environment surrounded by nature." },
                { src: "images/es4.jpg", pt: "Detalhe do quiosque a partir da esplanada.", en: "Detail of the kiosk from the terrace." },
            ],
            cocktails: [
                { src: "images/ck1.jpg", pt: "Cocktail Verde da Casa, muito refrescante.", en: "House Green Cocktail, very refreshing." },
                { src: "images/ck2.jpg", pt: "Clássico com um toque Nyumba: a nossa melhor bebida.", en: "Classic with a Nyumba twist: our best drink." },
                { src: "images/ck3.jpg", pt: "Bebida de frutas exóticas da nossa região.", en: "Exotic fruit drink from our region." },
                { src: "images/ck4.jpg", pt: "Gin Tónico com especiarias e frutas vermelhas.", en: "Gin Tonic with spices and red berries." },
            ],
            cozinha: [
                { src: "images/cz1.jpg", pt: "Vista da área de preparação: higiene e ordem.", en: "View of the preparation area: hygiene and order." },
                { src: "images/cz2.jpg", pt: "O nosso chefe em ação, a preparar a sua refeição.", en: "Our chef in action, preparing your meal." },
                { src: "images/cz3.jpg", pt: "Detlhes dos utensílios de cozinha, sempre limpos.", en: "Details of kitchen utensils, always clean." },
                { src: "images/cz4.jpg", pt: "Pratos prontos a servir no balcão.", en: "Dishes ready to be served at the counter." },
            ]
        }
    }
};

// State variables
let currentCategory = null;
let currentImageIndex = 0;
let modal, enlargedImage, prevButton, nextButton, modalCaption, modalCloseHint;

document.addEventListener('DOMContentLoaded', () => {
    modal = document.getElementById('image-modal');
    enlargedImage = document.getElementById('enlarged-gallery-image');
    prevButton = document.getElementById('modal-prev-button');
    nextButton = document.getElementById('modal-next-button');
    modalCaption = document.getElementById('modal-caption');
    modalCloseHint = document.getElementById('modal-close-hint');

    setupGalleryListeners();
});

function getLangText(key) {
    const l = document.documentElement.lang || 'pt';
    return galleryLangData[l][key] || "";
}

function updateModalNavigation() {
    const content = getLangText('galleryContent');
    if (!content || !content[currentCategory]) {
        closeImageModal();
        console.error(`A categoria '${currentCategory}' não tem imagens definidas.`);
        return;
    }

    const images = content[currentCategory];
    const totalImages = images.length;

    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === totalImages - 1;

    const lang = document.documentElement.lang || 'pt';
    const captionKey = lang === 'pt' ? 'pt' : 'en';

    enlargedImage.src = images[currentImageIndex].src;
    modalCaption.textContent = images[currentImageIndex][captionKey];
}

function openImageModal(category) {
    currentCategory = category;
    currentImageIndex = 0;
    updateModalNavigation();
    modal.style.display = 'flex';
    modalCloseHint.textContent = getLangText('modalCloseHint');
}

function closeImageModal() {
    modal.style.display = 'none';
    currentCategory = null;
    currentImageIndex = 0;
    enlargedImage.src = '';
}

function navigateImage(direction) {
    const content = getLangText('galleryContent');
    if (!content || !content[currentCategory]) return;

    const images = content[currentCategory];
    const newIndex = currentImageIndex + direction;

    if (newIndex >= 0 && newIndex < images.length) {
        currentImageIndex = newIndex;
        updateModalNavigation();
    }
}

function setupGalleryListeners() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            if (category) {
                openImageModal(category);
            }
        });
    });

    prevButton.addEventListener('click', (e) => { e.stopPropagation(); navigateImage(-1); });
    nextButton.addEventListener('click', (e) => { e.stopPropagation(); navigateImage(1); });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.id === 'modal-close-hint' || e.target.id === 'modal-caption') {
            closeImageModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeImageModal();
        }
    });
}

// Define the update function called by main.js
window.updatePageContent = function (l) {
    const t = galleryLangData[l];

    updateText("gallery-title", t.galleryTitle);
    updateText("item-pratos-title", t.itemPratosTitle);
    updateText("item-pratos-desc", t.itemPratosDesc);
    updateText("item-esplanada-title", t.itemEsplanadaTitle);
    updateText("item-esplanada-desc", t.itemEsplanadaDesc);
    updateText("item-cocktails-title", t.itemCocktailsTitle);
    updateText("item-cocktails-desc", t.itemCocktailsDesc);
    updateText("item-cozinha-title", t.itemCozinhaTitle);
    updateText("item-cozinha-desc", t.itemCozinhaDesc);

    if (modal && modal.style.display === 'flex') {
        updateModalNavigation();
        modalCloseHint.textContent = t.modalCloseHint;
    }
};
