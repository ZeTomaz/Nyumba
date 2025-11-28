/**
 * Nyumba Food Concept - Gallery Page Script
 */

// galleryLangData is now loaded from gallery-data.js

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
