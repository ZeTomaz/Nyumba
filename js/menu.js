/**
 * Nyumba Food Concept - Menu Page Script
 */

const menuLangData = {
    pt: {
        menuTitle: "Especialidades do Dia",
        dailyMenuTitle: "Menu Semanal de Almoço",
        dailyMenuSubtitleToday: "Destaque de Hoje:",
        dailyMenuWeekend: "Fim-de-semana: Hoje não há Menu Especial. Consulte o Menu À La Carte.",
        aLaCarteButtonOpen: "Ocultar Menu",
        aLaCarteButtonClosed: "Ver Menu Completo",
        alacarteTitle: "Menu À La Carte",
        petiscosTitle: "Petiscos",
        sopasTitle: "Sopas",
        snacksTitle: "Snacks",
        dessertsTitle: "Sobremesas",

        // Petiscos
        petisco1Title: "Rabada", petisco1Desc: "",
        petisco2Title: "Amêijoas a Nyumba", petisco2Desc: "",
        petisco3Title: "Cabeça de Salmão", petisco3Desc: "",
        petisco4Title: "Camarão Alhinho", petisco4Desc: "",
        petisco5Title: "Chouriço (c/ Batata e Salada)", petisco5Desc: "",
        petisco6Title: "Tábua de 7 Queijos e Broa", petisco6Desc: "",
        petisco7Title: "Dobradinha", petisco7Desc: "",

        // Sopas
        sopa1Title: "Creme de Cenoura", sopa1Desc: "",
        sopa2Title: "Creme de Abóbora", sopa2Desc: "",
        sopa3Title: "Sopa de Mandioca", sopa3Desc: "",
        sopa4Title: "Caldo Verde", sopa4Desc: "",
        sopa5Title: "Sopa de Feijão", sopa5Desc: "",
        sopa6Title: "Sopa de Legumes", sopa6Desc: "",

        // Snacks
        snack1Title: "Salgados (4)", snack1Desc: "",
        snack2Title: "Hamburguer Simples (c/ Ovo ou Queijo e Batata)", snack2Desc: "",
        snack3Title: "Hamburguer Completo", snack3Desc: "Com queijo, ovo, alface, queijo cheddar, maionese caseira, alface, cebola caramelizada e batata frita",
        snack4Title: "Nyumba Burguer", snack4Desc: "Com maionese caseira, fiambre ou bacon, queijo mozzarella, batatas fritas, cebola caramelizada, picles, rúcula",
        snack5Title: "Hamburguer de Alheira", snack5Desc: "Com ovo, rúcula, queijo mozzarella e batata frita",
        snack6Title: "Hamburguer de Frango", snack6Desc: "Com ovo, queijo mozzarella, alface e batata",
        snack7Title: "Prego no Pão", snack7Desc: "",
        snack8Title: "Cachorro quente (c/ Batatas)", snack8Desc: "",
        snack9Title: "Tosta Mista", snack9Desc: "",
        snack10Title: "Tosta de Atum", snack10Desc: "",
        snack11Title: "Tosta de Caranguejo", snack11Desc: "",
        snack12Title: "Tosta de Frango", snack12Desc: "",
        snack13Title: "Matabicho Thafo", snack13Desc: "Com 2 ovos, tomate, salsichas, torradas, feijão doce, bacon",

        // Sobremesas
        dessert1Title: "Sorvete", dessert1Desc: "",
        dessert2Title: "Salada de Fruta", dessert2Desc: "",
        dessert3Title: "Pudim", dessert3Desc: "",
        dessert4Title: "Bolo de Chocolate", dessert4Desc: "",
        dessert5Title: "Doce de Mandioca", dessert5Desc: "",
        dessert6Title: "Arroz Doce", dessert6Desc: "",

        dayNames: { 1: "2ª Feira", 2: "3ª Feira", 3: "4ª Feira", 4: "5ª Feira", 5: "6ª Feira", 6: "Sábado", 0: "Domingo" },
    },
    en: {
        menuTitle: "Daily Specials",
        dailyMenuTitle: "Weekly Lunch Menu",
        dailyMenuSubtitleToday: "Today's Highlight:",
        dailyMenuWeekend: "Weekend: No special menu today. Please check the À La Carte Menu.",
        aLaCarteButtonOpen: "Hide Menu",
        aLaCarteButtonClosed: "View Full Menu",
        alacarteTitle: "À La Carte Menu",
        petiscosTitle: "Appetizers",
        sopasTitle: "Soups",
        snacksTitle: "Snacks",
        dessertsTitle: "Desserts",

        // Petiscos
        petisco1Title: "Oxtail", petisco1Desc: "",
        petisco2Title: "Clams Nyumba Style", petisco2Desc: "",
        petisco3Title: "Salmon Head", petisco3Desc: "",
        petisco4Title: "Garlic Prawns", petisco4Desc: "",
        petisco5Title: "Chouriço (with Potato and Salad)", petisco5Desc: "",
        petisco6Title: "Platter of 7 Cheeses and Cornbread", petisco6Desc: "",
        petisco7Title: "Tripe Stew", petisco7Desc: "",

        // Sopas
        sopa1Title: "Carrot Cream Soup", sopa1Desc: "",
        sopa2Title: "Pumpkin Cream Soup", sopa2Desc: "",
        sopa3Title: "Cassava Soup", sopa3Desc: "",
        sopa4Title: "Portuguese Kale Soup", sopa4Desc: "",
        sopa5Title: "Bean Soup", sopa5Desc: "",
        sopa6Title: "Vegetable Soup", sopa6Desc: "",

        // Snacks
        snack1Title: "Savory Pastries (4)", snack1Desc: "",
        snack2Title: "Simple Burger (with Egg or Cheese and Potato)", snack2Desc: "",
        snack3Title: "Complete Burger", snack3Desc: "With cheese, egg, lettuce, cheddar cheese, homemade mayonnaise, lettuce, caramelized onion and fries",
        snack4Title: "Nyumba Burger", snack4Desc: "With homemade mayonnaise, ham or bacon, mozzarella cheese, fries, caramelized onion, pickles, arugula",
        snack5Title: "Alheira Sausage Burger", snack5Desc: "With egg, arugula, mozzarella cheese and fries",
        snack6Title: "Chicken Burger", snack6Desc: "With egg, mozzarella cheese, lettuce and potato",
        snack7Title: "Steak Sandwich", snack7Desc: "",
        snack8Title: "Hot Dog (with Potatoes)", snack8Desc: "",
        snack9Title: "Grilled Ham and Cheese Sandwich", snack9Desc: "",
        snack10Title: "Tuna Melt", snack10Desc: "",
        snack11Title: "Crab Melt", snack11Desc: "",
        snack12Title: "Chicken Melt", snack12Desc: "",
        snack13Title: "Thafo Breakfast", snack13Desc: "With 2 eggs, tomato, sausages, toast, baked beans, bacon",

        // Sobremesas
        dessert1Title: "Ice Cream", dessert1Desc: "",
        dessert2Title: "Fruit Salad", dessert2Desc: "",
        dessert3Title: "Pudding", dessert3Desc: "",
        dessert4Title: "Chocolate Cake", dessert4Desc: "",
        dessert5Title: "Cassava Sweet", dessert5Desc: "",
        dessert6Title: "Rice Pudding", dessert6Desc: "",

        dayNames: { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 0: "Sunday" },
    }
};

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
    updateText("petisco-2-title", t.petisco2Title);
    updateText("petisco-2-desc", t.petisco2Desc);
    updateText("petisco-3-title", t.petisco3Title);
    updateText("petisco-3-desc", t.petisco3Desc);
    updateText("petisco-4-title", t.petisco4Title);
    updateText("petisco-4-desc", t.petisco4Desc);
    updateText("petisco-5-title", t.petisco5Title);
    updateText("petisco-5-desc", t.petisco5Desc);
    updateText("petisco-6-title", t.petisco6Title);
    updateText("petisco-6-desc", t.petisco6Desc);
    updateText("petisco-7-title", t.petisco7Title);
    updateText("petisco-7-desc", t.petisco7Desc);

    // Sopas items
    updateText("sopa-1-title", t.sopa1Title);
    updateText("sopa-1-desc", t.sopa1Desc);
    updateText("sopa-2-title", t.sopa2Title);
    updateText("sopa-2-desc", t.sopa2Desc);
    updateText("sopa-3-title", t.sopa3Title);
    updateText("sopa-3-desc", t.sopa3Desc);
    updateText("sopa-4-title", t.sopa4Title);
    updateText("sopa-4-desc", t.sopa4Desc);
    updateText("sopa-5-title", t.sopa5Title);
    updateText("sopa-5-desc", t.sopa5Desc);
    updateText("sopa-6-title", t.sopa6Title);
    updateText("sopa-6-desc", t.sopa6Desc);

    // Snacks items
    updateText("snack-1-title", t.snack1Title);
    updateText("snack-1-desc", t.snack1Desc);
    updateText("snack-2-title", t.snack2Title);
    updateText("snack-2-desc", t.snack2Desc);
    updateText("snack-3-title", t.snack3Title);
    updateText("snack-3-desc", t.snack3Desc);
    updateText("snack-4-title", t.snack4Title);
    updateText("snack-4-desc", t.snack4Desc);
    updateText("snack-5-title", t.snack5Title);
    updateText("snack-5-desc", t.snack5Desc);
    updateText("snack-6-title", t.snack6Title);
    updateText("snack-6-desc", t.snack6Desc);
    updateText("snack-7-title", t.snack7Title);
    updateText("snack-7-desc", t.snack7Desc);
    updateText("snack-8-title", t.snack8Title);
    updateText("snack-8-desc", t.snack8Desc);
    updateText("snack-9-title", t.snack9Title);
    updateText("snack-9-desc", t.snack9Desc);
    updateText("snack-10-title", t.snack10Title);
    updateText("snack-10-desc", t.snack10Desc);
    updateText("snack-11-title", t.snack11Title);
    updateText("snack-11-desc", t.snack11Desc);
    updateText("snack-12-title", t.snack12Title);
    updateText("snack-12-desc", t.snack12Desc);
    updateText("snack-13-title", t.snack13Title);
    updateText("snack-13-desc", t.snack13Desc);

    // Desserts items
    updateText("dessert-1-title", t.dessert1Title);
    updateText("dessert-1-desc", t.dessert1Desc);
    updateText("dessert-2-title", t.dessert2Title);
    updateText("dessert-2-desc", t.dessert2Desc);
    updateText("dessert-3-title", t.dessert3Title);
    updateText("dessert-3-desc", t.dessert3Desc);
    updateText("dessert-4-title", t.dessert4Title);
    updateText("dessert-4-desc", t.dessert4Desc);
    updateText("dessert-5-title", t.dessert5Title);
    updateText("dessert-5-desc", t.dessert5Desc);
    updateText("dessert-6-title", t.dessert6Title);
    updateText("dessert-6-desc", t.dessert6Desc);

    if (modal && modal.style.display === 'flex') {
        // Use common data if available
        const commonT = typeof commonLangData !== 'undefined' ? commonLangData[l] : { modalCloseHint: "Close" };
        modalCloseHint.textContent = commonT.modalCloseHint;
    }

    highlightDailyMenu();
};
