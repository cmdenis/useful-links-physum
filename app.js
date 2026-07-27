// Add a single pill to a row by id
function addPill(rowId, pillContent) {
    const row = document.getElementById(rowId);
    const pillLink = document.createElement('a');
    pillLink.href = pillContent.link
    const pill = document.createElement('div')
    pill.className = 'pill';

    const pillTitle = document.createElement('div');
    pillTitle.innerHTML = '<h3>' + pillContent.title + '</h3>'

    const pillDescription = document.createElement('div')
    pillDescription.innerHTML = '<p>' + pillContent.description + '</p>'

    // Appending element inside of every pill
    pill.appendChild(pillTitle);
    pill.appendChild(pillDescription);

    // pill.innerHTML = pillTitle + ' <br> ' + pillDescription;
    pillLink.appendChild(pill)
    row.appendChild(pillLink);
    return pill;
}

// Add a whole new labeled section (label + its own wrapping pill row)
function addSection(label, rowId, sectionColor, items = []) {
    const board = document.getElementById('board');
    const section = document.createElement('div');
    section.className = 'section';
    section.style = '--pill-bg:' + sectionColor + ';'
    section.innerHTML =
    '<h2 class="section-label">' + label + '</h2>' +
    '<div class="pills-row" id="' + rowId + '"></div>';
    board.appendChild(section);
    items.forEach(item => addPill(rowId, item));
    return section;
}


addSection(
    'Activités Loisirs ♟️', 
    'loisir-row', 
    '#b98fb1',
    [
        {
            title: "Crochet et Tricot 🧶",
            description: "Convo de groupe pour activité crochet et trico",
            link: 'https://signal.group/#CjQKIERTHck1EhKtAyHi6-Nl81BhEmD7yywZf2J2gtAUj5hMEhB_LY1DH24SbkCGGmfLVY6U'
        }, 
        {
            title: "JOULES 🎲",
            description: "Convo de groupe pour les soirées de jeux de sociétés JOULES",
            link: 'https://m.me/j/AbbNj_SAcdDR4IIl/?send_source=gc%3Acopy_invite_link_c'
        }
    ]
);

addSection(
    'Activités Sportives ⚽', 
    'sports-row', 
    '#8f94b9',
    [
        {
            title: "PhySport 🏃‍♀️‍➡️",
            description: "Activités sportives en physique"
        }, 
        {
            title: "PhysAIR ⛰️",
            description: "Activités de plein-air (rando, camping, etc.)",
            link: 'https://m.me/j/AbZZW2BdAMYp97mz/?send_source=gc:copy_invite_link_c'
        }
    ]
);

addSection(
    'Cycles Supérieurs 🎓', 
    'CS-row', 
    '#8fb9ac;',
    [
        {
            title: "Convo CS 👵",
            description: "La convo pour les cycles supérieurs en physique",
            link: 'https://signal.group/#CjQKIOnEFcTFlsCqCwkL5NRUtj3wTI28GPXOmCxQqJlnmpAeEhBfAQZoGWhdCsCWXvFfP0oX'
        }, 
        {
            title: "Club de Journal 📰",
            description: "Convo du club de lecture scientifique des cycles supérieurs en physique",
            link: ''
        }, 
        {
            title: "Franco-midis! 🇫🇷",
            description: "Come practice your spoken french at lunch",
            link: 'https://signal.group/#CjQKIJS-TU1J1ZhGVQD5osqGtHFwvMaNfLkYFMth3NI2rbWzEhCVz_3SjKbHtNqGDoO5fsVB'
        }
    ]
);

addSection(
    'Autres ⚙️', 
    'autres-row', 
    '#ec857a;',
    [
        {
            title: "La Planck ☕",
            description: "La convo pour les utilisateurs du café La Planck"
        }
    ]
);
