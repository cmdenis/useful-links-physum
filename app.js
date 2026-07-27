// Add a single pill to a row by id
function addPill(rowId, pillContent) {
    const row = document.getElementById(rowId);
    const pill = document.createElement('div');
    pill.className = 'pill';

    const pillTitle = document.createElement('div');
    pillTitle.innerHTML = '<h3>' + pillContent.title + '</h3>'

    const pillDescription = document.createElement('div')
    pillDescription.innerHTML = '<p>' + pillContent.description + '</p>'

    // Appending element inside of every pill
    pill.appendChild(pillTitle);
    pill.appendChild(pillDescription);

    // pill.innerHTML = pillTitle + ' <br> ' + pillDescription;
    row.appendChild(pill);
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
            title: "Crochet et Tricot",
            description: "Convo de groupe pour activité crochet et trico"
        }, 
        {
            title: "JOULES",
            description: "Convo de groupe pour les soirées de jeux de sociétés JOULES"
        }
    ]
);

addSection(
    'Activités Sportives ⚽', 
    'sports-row', 
    '#8f94b9',
    [
        {
            title: "PhySport",
            description: "Activités sportives en physique"
        }, 
        {
            title: "PhysAIR",
            description: "Activités de plein-air (rando, camping, etc.)"
        }
    ]
);

addSection(
    'Cycles Supérieurs 🎓', 
    'CS-row', 
    '#8fb9ac;',
    [
        {
            title: "Convo CS",
            description: "La convo pour les cycles supérieurs en physique"
        }, 
        {
            title: "Club de Journal",
            description: "Convo du club de lecture scientifique des cycles supérieurs en physique"
        }, 
        {
            title: "Franco-midis!",
            description: "Come practice your spoken french at lunch",
        }
    ]
);