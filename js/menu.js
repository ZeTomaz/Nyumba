/**
 * Nyumba Food Concept - Menu Page Script
 */

// menuLangData is now loaded from menu-data.js

const dailyMenuDayMapping = {
    1: { id: "day-1" },
    2: { id: "day-2" },
    3: { id: "day-3" },
    4: { id: "day-4" },
    5: { id: "day-5" }
};

let modal, enlargedImage, modalCloseHint;

// Initialize DOM elements
document.addEventListener('DOMContentLoaded', () => {
    modal = document.getElementById('image-modal');
    enlargedImage = document.getElementById('enlarged-menu-image');
    modalCloseHint = document.getElementById('modal-close-hint');

    setupDailyMenuListeners();

    // Expose functions to global scope for HTML onclick handlers
    window.toggleAlacarteMenu = toggleAlacarteMenu;
});

function highlightDailyMenu() {
    const now = new Date();
    let day = now.getDay();
    document.querySelectorAll('.daily-menu-item').forEach(item => {
        item.classList.remove('highlighted');
    });
    const lang = document.documentElement.lang || 'pt';
    const t = menuLangData[lang];
    const dailySubtitle = document.getElementById('daily-menu-subtitle');
    const todayDayOfWeek = (day === 0) ? 7 : day;

    if (todayDayOfWeek >= 1 && todayDayOfWeek <= 5) {
        const item = dailyMenuDayMapping[todayDayOfWeek];
        const dayElement = document.getElementById(item.id);
        if (dayElement) {
            dayElement.classList.add('highlighted');
            dailySubtitle.textContent = `${t.dailyMenuSubtitleToday} ${t.dayNames[todayDayOfWeek]}`;
        } else {
            dailySubtitle.textContent = `${t.dailyMenuSubtitleToday} ${t.dayNames[todayDayOfWeek]}`;
        }
    } else {
        dailySubtitle.textContent = t.dailyMenuWeekend;
    }
}

function toggleAlacarteMenu() {
    const content = document.getElementById('alacarte-menu-content');
    const button = document.getElementById('alacarte-toggle-button');
    const lang = document.documentElement.lang || 'pt';
    const t = menuLangData[lang];
    const isOpen = content.classList.toggle('open');
    button.textContent = isOpen ? t.aLaCarteButtonOpen : t.aLaCarteButtonClosed;
}

function openImageModal(imgSrc) {
    enlargedImage.src = imgSrc;
    modal.style.display = 'flex';
    const lang = document.documentElement.lang || 'pt';
    // Use common data for modal hint if available, or fallback
    const commonT = typeof commonLangData !== 'undefined' ? commonLangData[lang] : { modalCloseHint: "Close" };
    modalCloseHint.textContent = commonT.modalCloseHint;
}

function closeImageModal() {
    modal.style.display = 'none';
    enlargedImage.src = '';
}

function setupDailyMenuListeners() {
    document.querySelectorAll('.daily-menu-item img').forEach(img => {
        img.addEventListener('click', () => openImageModal(img.src));
    });
    modal.addEventListener('click', closeImageModal);
    enlargedImage.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeImageModal();
    });
}

// Define the update function called by main.js
window.updatePageContent = function (l) {
    const t = menuLangData[l];

    // Main titles
    updateText("menu-title", t.menuTitle);
    updateText("daily-menu-title", t.dailyMenuTitle);
    updateText("day-1-label", t.dayNames[1]);
    updateText("day-2-label", t.dayNames[2]);
    updateText("day-3-label", t.dayNames[3]);
    updateText("day-4-label", t.dayNames[4]);
    updateText("day-5-label", t.dayNames[5]);

    // Menu sections
    const alacarteContent = document.getElementById('alacarte-menu-content');
    const alacarteButton = document.getElementById('alacarte-toggle-button');
    if (alacarteContent && alacarteButton) {
        if (alacarteContent.classList.contains('open'))
            alacarteButton.textContent = t.aLaCarteButtonOpen;
        else
            alacarteButton.textContent = t.aLaCarteButtonClosed;
    }
    updateText("alacarte-title", t.alacarteTitle);
    updateText("petiscos-section-title", t.petiscosTitle);
    updateText("sopas-section-title", t.sopasTitle);
    updateText("snacks-section-title", t.snacksTitle);
    updateText("desserts-section-title", t.dessertsTitle);

    // Petiscos items
    updateText("petisco-1-title", t.petisco1Title);
    updateText("petisco-1-desc", t.petisco1Desc);
    updateText("petisco-1-price", t.petisco1Price);
    updateText("petisco-2-title", t.petisco2Title);
    updateText("petisco-2-desc", t.petisco2Desc);
    updateText("petisco-2-price", t.petisco2Price);
    updateText("petisco-3-title", t.petisco3Title);
    updateText("petisco-3-desc", t.petisco3Desc);
    updateText("petisco-3-price", t.petisco3Price);
    updateText("petisco-4-title", t.petisco4Title);
    updateText("petisco-4-desc", t.petisco4Desc);
    updateText("petisco-4-price", t.petisco4Price);
    updateText("petisco-5-title", t.petisco5Title);
    updateText("petisco-5-desc", t.petisco5Desc);
    updateText("petisco-5-price", t.petisco5Price);
    updateText("petisco-6-title", t.petisco6Title);
    updateText("petisco-6-desc", t.petisco6Desc);
    updateText("petisco-6-price", t.petisco6Price);
    updateText("petisco-7-title", t.petisco7Title);
    updateText("petisco-7-desc", t.petisco7Desc);
    updateText("petisco-7-price", t.petisco7Price);

    // Sopas items
    updateText("sopa-1-title", t.sopa1Title);
    updateText("sopa-1-desc", t.sopa1Desc);
    updateText("sopa-1-price", t.sopa1Price);
    updateText("sopa-2-title", t.sopa2Title);
    updateText("sopa-2-desc", t.sopa2Desc);
    updateText("sopa-2-price", t.sopa2Price);
    updateText("sopa-3-title", t.sopa3Title);
    updateText("sopa-3-desc", t.sopa3Desc);
    updateText("sopa-3-price", t.sopa3Price);
    updateText("sopa-4-title", t.sopa4Title);
    updateText("sopa-4-desc", t.sopa4Desc);
    updateText("sopa-4-price", t.sopa4Price);
    updateText("sopa-5-title", t.sopa5Title);
    updateText("sopa-5-desc", t.sopa5Desc);
    updateText("sopa-5-price", t.sopa5Price);
    updateText("sopa-6-title", t.sopa6Title);
    updateText("sopa-6-desc", t.sopa6Desc);
    updateText("sopa-6-price", t.sopa6Price);

    // Snacks items
    updateText("snack-1-title", t.snack1Title);
    updateText("snack-1-desc", t.snack1Desc);
    updateText("snack-1-price", t.snack1Price);
    updateText("snack-2-title", t.snack2Title);
    updateText("snack-2-desc", t.snack2Desc);
    updateText("snack-2-price", t.snack2Price);
    updateText("snack-3-title", t.snack3Title);
    updateText("snack-3-desc", t.snack3Desc);
    updateText("snack-3-price", t.snack3Price);
    updateText("snack-4-title", t.snack4Title);
    updateText("snack-4-desc", t.snack4Desc);
    updateText("snack-4-price", t.snack4Price);
    updateText("snack-5-title", t.snack5Title);
    updateText("snack-5-desc", t.snack5Desc);
    updateText("snack-5-price", t.snack5Price);
    updateText("snack-6-title", t.snack6Title);
    updateText("snack-6-desc", t.snack6Desc);
    updateText("snack-6-price", t.snack6Price);
    updateText("snack-7-title", t.snack7Title);
    updateText("snack-7-desc", t.snack7Desc);
    updateText("snack-7-price", t.snack7Price);
    updateText("snack-8-title", t.snack8Title);
    updateText("snack-8-desc", t.snack8Desc);
    updateText("snack-8-price", t.snack8Price);
    updateText("snack-9-title", t.snack9Title);
    updateText("snack-9-desc", t.snack9Desc);
    updateText("snack-9-price", t.snack9Price);
    updateText("snack-10-title", t.snack10Title);
    updateText("snack-10-desc", t.snack10Desc);
    updateText("snack-10-price", t.snack10Price);
    updateText("snack-11-title", t.snack11Title);
    updateText("snack-11-desc", t.snack11Desc);
    updateText("snack-11-price", t.snack11Price);
    updateText("snack-12-title", t.snack12Title);
    updateText("snack-12-desc", t.snack12Desc);
    updateText("snack-12-price", t.snack12Price);
    updateText("snack-13-title", t.snack13Title);
    updateText("snack-13-desc", t.snack13Desc);
    updateText("snack-13-price", t.snack13Price);

    // Desserts items
    updateText("dessert-1-title", t.dessert1Title);
    updateText("dessert-1-desc", t.dessert1Desc);
    updateText("dessert-1-price", t.dessert1Price);
    updateText("dessert-2-title", t.dessert2Title);
    updateText("dessert-2-desc", t.dessert2Desc);
    updateText("dessert-2-price", t.dessert2Price);
    updateText("dessert-3-title", t.dessert3Title);
    updateText("dessert-3-desc", t.dessert3Desc);
    updateText("dessert-3-price", t.dessert3Price);
    updateText("dessert-4-title", t.dessert4Title);
    updateText("dessert-4-desc", t.dessert4Desc);
    updateText("dessert-4-price", t.dessert4Price);
    updateText("dessert-5-title", t.dessert5Title);
    updateText("dessert-5-desc", t.dessert5Desc);
    updateText("dessert-5-price", t.dessert5Price);
    updateText("dessert-6-title", t.dessert6Title);
    updateText("dessert-6-desc", t.dessert6Desc);
    updateText("dessert-6-price", t.dessert6Price);

    if (modal && modal.style.display === 'flex') {
        // Use common data if available
        const commonT = typeof commonLangData !== 'undefined' ? commonLangData[l] : { modalCloseHint: "Close" };
        modalCloseHint.textContent = commonT.modalCloseHint;
    }

    highlightDailyMenu();
};
