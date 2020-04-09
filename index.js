const fs = require('fs');
const { execSync } = require('child_process');
const args = require('yargs').argv;
const isEditable = (!!((args.t || args.text) || (args.hasOwnProperty('e') || args.hasOwnProperty('editable')))).toString();

const path = 'front-end/data/constants.js';

fs.writeFileSync(
    path,
    `const text = '${args.t || args.text || 'Sem texto definido'}';\nconst isEditable = ${isEditable};`
);

execSync('start front-end\\index.html');