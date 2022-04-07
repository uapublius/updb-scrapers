let fs = require('fs');
let path = require('path');
let { execSync } = require('child_process');
let { fetchDayBack } = require('./fetchDayBack');
let { getDate } = require('./getDate');
let { getFieldData } = require('./getFieldData');

let outputPath = "/Volumes/External 1/uap/Archives/mufoncms.com";

let daysBack = 10000; // ~1/1/97

//
// Fetch all rows to daily json files
//

for (let dayBack = 1; dayBack < daysBack; dayBack++) {
  let date = getDate(dayBack);
  fetchDayBack(`${date.year}-${date.month}-${date.day}`, 'us', getFieldData(dayBack), outputPath);
  fetchDayBack(`${date.year}-${date.month}-${date.day}`, 'nonus', getFieldData(dayBack, true), outputPath);
}

//
// Fetch all attachments from json files
//

let files = fs.readdirSync(`${outputPath}/data/`);

for (let file of files) {
  if (!file.endsWith('.json')) continue;

  let fileData = JSON.parse(fs.readFileSync(`${outputPath}/data/${file}`).toString());

  for (let data of fileData) {
    for (let attachment of data.attachments) {
      let parts = path.parse(attachment);
      let base = parts.base;
      attachment = encodeURI(attachment);
      let id = parseInt(base.split('_')[0], 10);

      if (!fs.existsSync(`${outputPath}/attachments/${id}/${base}`)) {
        request = `
          curl '${attachment}' \
          -L \
          -o '${outputPath}/attachments/${id}/${base}' \
          -X 'GET' \
          -H 'Pragma: no-cache' \
          -H 'Accept-Language: en-US,en;q=0.9' \
          -H 'Accept-Encoding: gzip, deflate, br' \
          -H 'Cache-Control: no-cache' \
          -H 'Host: mufoncms.com' \
          -H 'Origin: https://mufoncms.com' \
          -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15' \
          -H 'Connection: keep-alive' \
          -H 'Referer: https://mufoncms.com/'
        `;

        try {
          execSync(request);
        }
        catch {
          console.log('Retrying...');
          // eslint-disable-next-line no-loop-func
          setTimeout(() => execSync(request), 1000);
        }
      }
    }
  }
}
