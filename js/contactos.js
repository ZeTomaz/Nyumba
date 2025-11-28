/**
 * Nyumba Food Concept - Contacts Page Script
 */

const CONTACT_INFO = {
    email: "nyumba.maputo@gmail.com",
    phone: "+258 846695390",
    phoneRaw: "258846695390",
    instagram: "@nyumbafoodconcept",
    instagramUrl: "https://www.instagram.com/nyumbafoodconcept"
};

const contactsLangData = {
    pt: {
        contactTitle: "Fale Connosco",
        contactSubtitle: "Estamos ansiosos por recebê-lo e responder às suas questões.",
        itemPhoneTitle: "Telefone e WhatsApp",
        itemPhoneDesc: "Ligue-nos diretamente ou envie uma mensagem instantânea.",
        emailLink: CONTACT_INFO.email,
        itemInstagramTitle: "Redes Sociais",
        itemInstagramDesc: "Siga-nos para ver as novidades e os pratos do dia.",
        itemEmailDesc: "Envie-nos um e-mail para pedidos de reserva ou informações gerais."
    },
    en: {
        contactTitle: "Contact Us",
        contactSubtitle: "We look forward to welcoming you and answering your questions.",
        itemPhoneTitle: "Phone and WhatsApp",
        itemPhoneDesc: "Call us directly or send an instant message.",
        emailLink: CONTACT_INFO.email,
        itemInstagramTitle: "Social Media",
        itemInstagramDesc: "Follow us to see news and daily specials.",
        itemEmailDesc: "Send us an email for reservations or inquiries."
    }
};

// Define the update function called by main.js
window.updatePageContent = function (l) {
    const t = contactsLangData[l];

    updateText("contact-title", t.contactTitle);
    updateText("contact-subtitle", t.contactSubtitle);
    updateText("item-phone-title", t.itemPhoneTitle);
    updateText("item-phone-desc", t.itemPhoneDesc);
    updateText("item-email-title", "E-mail");
    updateText("item-email-desc", t.itemEmailDesc);
    updateText("email-link", t.emailLink);
    updateText("item-instagram-title", t.itemInstagramTitle);
    updateText("item-instagram-desc", t.itemInstagramDesc);
};
