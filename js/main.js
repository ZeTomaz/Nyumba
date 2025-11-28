/**
 * Nyumba Food Concept - Main Script
 * Handles language switching, date/time updates, and common UI elements.
 */

const commonLangData = {
    pt: {
        navHome: "Principal",
        navGallery: "Galeria",
        navMenu: "Menu",
        navContact: "Contactos",
        modalCloseHint: "Clique ou prima ESC para fechar."
    },
    en: {
        navHome: "Home",
        navGallery: "Gallery",
        navMenu: "Menu",
        navContact: "Contacts",
        modalCloseHint: "Click or press ESC to close."
    }
};

/**
 * Get stored language from localStorage or default to 'pt'
 */
function getStoredLang() {
    return localStorage.getItem('nyumba-lang') || 'pt';
}

/**
 * Store language preference
 */
function storeLang(l) {
    localStorage.setItem('nyumba-lang', l);
}

/**
 * Helper to update text content of an element by ID
 */
function updateText(id, text) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = text;
    }
}

/**
 * Update common elements (Navigation, Date/Time)
 */
function updateCommonElements(l) {
    const t = commonLangData[l];
    updateText("nav-home", t.navHome);
    updateText("nav-gallery", t.navGallery);
    updateText("nav-menu", t.navMenu);
    updateText("nav-contact", t.navContact);
    
    // Update date/time immediately when language changes
    updateDateTime();
}

/**
 * Main function to set language
 * @param {string} l - Language code ('pt' or 'en')
 */
function setLang(l) {
    document.documentElement.lang = l;
    storeLang(l);
    updateCommonElements(l);
    
    // Call page specific update if it exists
    if (typeof window.updatePageContent === 'function') {
        window.updatePageContent(l);
    }
}

/**
 * Update the date and time display
 */
function updateDateTime() {
    const now = new Date();
    const langCode = document.documentElement.lang || 'pt';
    const locale = langCode === 'en' ? 'en-US' : 'pt-PT';
    
    const date = now.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const time = now.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const dateTimeEl = document.getElementById('date-time');
    if (dateTimeEl) {
        dateTimeEl.textContent = `${date} | ${time}`;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getStoredLang();
    
    // We need to make setLang global so buttons can access it
    window.setLang = setLang;
    
    // Initial setup
    setLang(savedLang);
    
    // Start clock
    setInterval(updateDateTime, 60000);
});
