#!/usr/bin/env node

const fs = require('fs');
const opn = require('opn');
const { join } = require('path');
const args = require('yargs').argv;

let isEditable = (args.hasOwnProperty('e') || args.hasOwnProperty('editable')).toString();

function main() {
    if(args._[0] && args._[0].toLowerCase() === 'config') {
        opn(join(__dirname, 'front-end'));
        return;
    }
    
    const path = join(__dirname, 'front-end', 'data', 'constants.js');
    const text = parseText(args.t || args.text);
    
    fs.writeFileSync(
        path,
        `const html = '${text}';\nconst isEditable = ${isEditable};`
    );
    opn(join(__dirname, 'front-end', 'index.html'));
}

function parseText(text) {
    if (!text) {
        isEditable = true;
        return 'No text defined';
    }
    const t = text.replace(/{/g, '<mark>').replace(/}/g, '</mark>');
    return t;
}

main();