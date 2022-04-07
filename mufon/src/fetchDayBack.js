let { execSync } = require('child_process');
let { writeFileSync, existsSync, readFileSync, mkdirSync } = require('fs');
let { JSDOM, VirtualConsole } = require('jsdom');

let virtualConsole = new VirtualConsole();
virtualConsole.on('error', () => { });
let dom = new JSDOM(null, { virtualConsole });

function fetchDayBack(date, geo, data, outputPath) {
  let dateId = `${date}-${geo}`;
  console.log(dateId);

  let records = [];
  let record = {};
  let request;

  //
  // Load/fetch rows page
  //

  if (!existsSync(`${outputPath}/data/${date}/${dateId}.html`)) {
    mkdirSync(`${outputPath}/data/${date}`);

    request = `
      curl 'https://mufoncms.com/cgi-bin/report_handler.pl' \
      -X 'POST' \
      -o '${outputPath}/data/${date}/${dateId}.html' \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -H 'Pragma: no-cache' \
      -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
      -H 'Accept-Language: en-US,en;q=0.9' \
      -H 'Accept-Encoding: gzip, deflate, br' \
      -H 'Cache-Control: no-cache' \
      -H 'Host: mufoncms.com' \
      -H 'Origin: https://mufoncms.com' \
      -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15' \
      -H 'Connection: keep-alive' \
      -H 'Referer: https://mufoncms.com/' \
      --data '${data}'
    `;

    try {
      execSync(request).toString();
    }
    catch {
      setTimeout(() => execSync(request).toString(), 1000);
    }
  }

  dom.window.document.body.innerHTML = readFileSync(`${outputPath}/data/${date}/${dateId}.html`).toString();

  for (let row of dom.window.document.querySelectorAll('tr')) {
    let cells = row.querySelectorAll('td');

    if (!cells[4]?.textContent?.trim()) {
      continue;
    }

    let resultNum = cells?.[0]?.textContent;

    if (resultNum === '50') {
      console.warn('Warning: 50 results, there may be more for this day!', dateId);
    }

    let id = parseInt(cells[5]?.querySelector('input').attributes.onclick.value.match(/\d+/)?.[0], 10);

    record = {
      id,
      submitDate: cells[1]?.textContent,
      eventDate: cells[2]?.textContent,
      summary: cells[3]?.textContent.trim(),
      location: cells[4]?.textContent,
      attachments: [...row.querySelectorAll('a')].map(a => a.href)
    };

    console.log(`${dateId}-${id}`);

    //
    // Load/fetch details page
    //

    if (!existsSync(`${outputPath}/data/${date}/${dateId}-${id}.html`)) {
      request = `
      curl 'https://mufoncms.com/cgi-bin/report_handler.pl?req=view_long_desc&id=${id}&rnd=' \
      -X 'GET' \
      -o '${outputPath}/data/${date}/${dateId}-${id}.html' \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -H 'Pragma: no-cache' \
      -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
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
        execSync(request).toString();
      }
      catch {
        console.log('Retrying...');
        // eslint-disable-next-line no-loop-func
        setTimeout(() => execSync(request).toString(), 1000);
      }
    }

    dom.window.document.body.innerHTML = readFileSync(`${outputPath}/data/${dateId}-${id}.html`).toString();
    record.description = dom.window.document.querySelector('td')?.textContent;

    records.push(record);
  }

  writeFileSync(`${outputPath}/data/${date}/${dateId}.json`, JSON.stringify(records, null, 2));
}

exports.fetchDayBack = fetchDayBack;
