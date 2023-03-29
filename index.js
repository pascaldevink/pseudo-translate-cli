const { program } = require('commander');
const fs = require('fs');
const ptify = require('pseudo-translate');

program
  .name('pseudo-translate-cli')
  .description('CLI to translate a JSON file to a pseudo language with expanded characters')
  .requiredOption('-i, --input <input>')
  .option('-e, --expand');

program.parse();

const options = program.opts();

const pt = ptify(options.input, { increase_lengh_30_pct: options.expand });
console.log(JSON.stringify(pt, null, " ")); 

