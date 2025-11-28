/**
 * Nyumba Admin Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    renderGalleryEditor();
    renderMenuEditor();
});

// --- GALLERY EDITOR ---

function renderGalleryEditor() {
    const container = document.getElementById('gallery-editor');
    container.innerHTML = '';

    const categories = ['pratos', 'esplanada', 'cocktails', 'cozinha'];
    const categoryNames = {
        'pratos': 'Pratos do Chefe',
        'esplanada': 'Esplanada',
        'cocktails': 'Cocktails',
        'cozinha': 'Cozinha'
    };

    categories.forEach(cat => {
        const section = document.createElement('div');
        section.innerHTML = `<h3 class="section-title">${categoryNames[cat]}</h3>`;

        // We assume the structure is consistent across languages, editing primarily based on PT structure but saving both
        const items = galleryLangData.pt.galleryContent[cat];

        items.forEach((item, index) => {
            const block = document.createElement('div');
            block.className = 'item-block';
            block.innerHTML = `
                <div class="item-header">Imagem ${index + 1}</div>
                <div class="form-group">
                    <label>URL da Imagem:</label>
                    <input type="text" id="gal-${cat}-${index}-src" value="${item.src}">
                </div>
                <div class="form-group">
                    <label>Legenda (PT):</label>
                    <input type="text" id="gal-${cat}-${index}-pt" value="${item.pt}">
                </div>
                <div class="form-group">
                    <label>Legenda (EN):</label>
                    <input type="text" id="gal-${cat}-${index}-en" value="${galleryLangData.en.galleryContent[cat][index].en}">
                </div>
            `;
            section.appendChild(block);
        });

        container.appendChild(section);
    });
}

function downloadGalleryData() {
    // Update data object from form
    const categories = ['pratos', 'esplanada', 'cocktails', 'cozinha'];

    categories.forEach(cat => {
        const items = galleryLangData.pt.galleryContent[cat];
        items.forEach((item, index) => {
            const src = document.getElementById(`gal-${cat}-${index}-src`).value;
            const pt = document.getElementById(`gal-${cat}-${index}-pt`).value;
            const en = document.getElementById(`gal-${cat}-${index}-en`).value;

            // Update PT
            galleryLangData.pt.galleryContent[cat][index].src = src;
            galleryLangData.pt.galleryContent[cat][index].pt = pt;

            // Update EN (src is shared usually, but we update it to match just in case)
            galleryLangData.en.galleryContent[cat][index].src = src;
            galleryLangData.en.galleryContent[cat][index].en = en;
        });
    });

    const content = `const galleryLangData = ${JSON.stringify(galleryLangData, null, 4)};`;
    downloadFile('gallery-data.js', content);
}

// --- MENU EDITOR ---

function renderMenuEditor() {
    const container = document.getElementById('menu-editor');
    container.innerHTML = '';

    // Helper to create input fields for simple key-value pairs
    function createField(key, label, isTextArea = false) {
        const valPT = menuLangData.pt[key] || '';
        const valEN = menuLangData.en[key] || '';

        const block = document.createElement('div');
        block.className = 'item-block';
        block.innerHTML = `
            <div class="item-header">${label} (${key})</div>
            <div class="form-group">
                <label>Português:</label>
                ${isTextArea ? `<textarea id="menu-${key}-pt">${valPT}</textarea>` : `<input type="text" id="menu-${key}-pt" value="${valPT}">`}
            </div>
            <div class="form-group">
                <label>Inglês:</label>
                ${isTextArea ? `<textarea id="menu-${key}-en">${valEN}</textarea>` : `<input type="text" id="menu-${key}-en" value="${valEN}">`}
            </div>
        `;
        return block;
    }

    // Sections
    const sections = [
        { id: 'petiscos', title: 'Petiscos', count: 7 },
        { id: 'sopas', title: 'Sopas', count: 6 },
        { id: 'snacks', title: 'Snacks', count: 13 },
        { id: 'dessert', title: 'Sobremesas', count: 6, prefix: 'dessert' } // Special case for prefix
    ];

    sections.forEach(sec => {
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = `<h3 class="section-title">${sec.title}</h3>`;

        const prefix = sec.prefix || sec.id.slice(0, -1); // 'petisco', 'sopa', 'snack'

        for (let i = 1; i <= sec.count; i++) {
            const titleKey = `${prefix}${i}Title`;
            const descKey = `${prefix}${i}Desc`;
            const priceKey = `${prefix}${i}Price`;

            sectionDiv.appendChild(createField(titleKey, `Item ${i} - Título`));
            sectionDiv.appendChild(createField(descKey, `Item ${i} - Descrição`, true));
            sectionDiv.appendChild(createField(priceKey, `Item ${i} - Preço`));
        }
        container.appendChild(sectionDiv);
    });
}

function downloadMenuData() {
    // Sections
    const sections = [
        { id: 'petiscos', count: 7 },
        { id: 'sopas', count: 6 },
        { id: 'snacks', count: 13 },
        { id: 'dessert', count: 6, prefix: 'dessert' }
    ];

    sections.forEach(sec => {
        const prefix = sec.prefix || sec.id.slice(0, -1);
        for (let i = 1; i <= sec.count; i++) {
            const titleKey = `${prefix}${i}Title`;
            const descKey = `${prefix}${i}Desc`;
            const priceKey = `${prefix}${i}Price`;

            menuLangData.pt[titleKey] = document.getElementById(`menu-${titleKey}-pt`).value;
            menuLangData.en[titleKey] = document.getElementById(`menu-${titleKey}-en`).value;

            menuLangData.pt[descKey] = document.getElementById(`menu-${descKey}-pt`).value;
            menuLangData.en[descKey] = document.getElementById(`menu-${descKey}-en`).value;

            menuLangData.pt[priceKey] = document.getElementById(`menu-${priceKey}-pt`).value;
            menuLangData.en[priceKey] = document.getElementById(`menu-${priceKey}-en`).value;
        }
    });

    const content = `const menuLangData = ${JSON.stringify(menuLangData, null, 4)};`;
    downloadFile('menu-data.js', content);
}

// --- UTILS ---

function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    alert(`O ficheiro '${filename}' foi gerado. Por favor, guarde-o na pasta 'js' do seu site, substituindo o existente.`);
}
