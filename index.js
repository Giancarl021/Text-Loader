#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');
const args = require('yargs').argv;
let isEditable = (args.hasOwnProperty('e') || args.hasOwnProperty('editable')).toString();

const path = 'C:/users/Pichau/Documents/Git/Text-Loader/front-end/data/constants.js';
const text = parseText(args.t || args.text);

fs.writeFileSync(
    path,
    `const html = '${text}';\nconst isEditable = ${isEditable};`
);

execSync('start C:/users/Pichau/Documents/Git/Text-Loader/front-end/index.html');

function parseText(text) {
    if(!text) {
        isEditable = true;
        return 'Sem texto definido';
    }
    const t = text.replace(/{/g, '<mark>').replace(/}/g, '</mark>');
    return t;
}