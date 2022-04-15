let fs = require("fs");
let process = require("process");
let { execSync } = require("child_process");

if (process.argv.length < 4) {
  console.log('mufon.js <outputPath> <lastestId>');
  process.exit(1);
}

let outputPath = process.argv[2];
const latestId = parseInt(process.argv[3], 10);

for (let id = latestId; id > 0; id--) {
  fetchId(id, outputPath);
}

function fetchId(id, outputPath) {
  try {
    let fullOutPath = `${outputPath}/${id}.html`;
    console.log(fullOutPath);

    if (!fs.existsSync(fullOutPath)) {
      execSync(buildRequest(id, fullOutPath));
    }

    fullOutPath = `${outputPath}/${id}-detail.html`;
    console.log(fullOutPath);

    if (!fs.existsSync(fullOutPath)) {
      execSync(buildRequest2(id, fullOutPath));
    }
  } catch (error) {
    console.error(error);
  }
}

function buildRequest(id, fullOutPath) {
  let request = `
    curl -sS 'https://mufoncms.com/cgi-bin/report_handler.pl' \
    -L \
    -o '${fullOutPath}' \
    -X 'POST' \
    -H 'Pragma: no-cache' \
    -H 'Accept-Language: en-US,en;q=0.9' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    -H 'Cache-Control: no-cache' \
    -H 'Host: mufoncms.com' \
    -H 'Origin: https://mufoncms.com' \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15' \
    -H 'Connection: keep-alive' \
    -H 'Referer: https://mufoncms.com/' \
    --data 'req=search_page2&submitted_date_lo__month=&submitted_date_lo__day=&submitted_date_lo__year=&submitted_date_hi__month=&submitted_date_hi__day=&submitted_date_hi__year=&event_date_lo__month=&event_date_lo__day=&event_date_lo__year=&event_date_hi__month=&event_date_hi__day=&event_date_hi__year=&country_id=227&state_id=&county_id=&nearest_city=&keyword=&case_number=${id}&entity_type=&landing_type_id=&distance_from_witness=&sql_order_primary=f1_submitted_datetime+DESC&sql_order_secondary='
  `;

  return request;
}

function buildRequest2(id, fullOutPath) {
  let request = `
    curl -sS 'https://mufoncms.com/cgi-bin/report_handler.pl?req=view_long_desc&id=${id}&rnd=' \
    -L \
    -o '${fullOutPath}' \
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

  return request;
}