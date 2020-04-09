const fs = require('fs');
const { execSync } = require('child_process');
const args = require('yargs').argv;
const isEditable = (!!((args.t || args.text) || (args.hasOwnProperty('e') || args.hasOwnProperty('editable')))).toString();

const path = 'front-end/data/constants.js';
const text = parseText(args.t || args.text);

fs.writeFileSync(
    path,
    `const html = '${text}';\nconst isEditable = ${isEditable};`
);

execSync('start front-end\\index.html');

function parseText(text) {
    if(!text) return 'Sem texto definido';
    const t = text.replace(/{/g, '<mark>').replace(/}/g, '</mark>');
    return t;
}