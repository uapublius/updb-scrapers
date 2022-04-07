const fs = require('fs');
const process = require('process');

process.stdin.resume();

let filenames = '';
let f = '';

process.stdin.on('data', d => {
  filenames += d.toString();
});

process.stdin.on('end', () => {
  for (const jj of filenames.split(/\n/g)) {
    let ff = fs.readFileSync(jj.toString());
    let j = JSON.parse(ff);
    for (const a of j) {
      for (const aa of a.attachments) {
        f += `${aa}\n`;
      }
    }
  }

  fs.writeFileSync('all.json', f);
});
