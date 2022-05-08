let fs = require("fs");
let process = require("process");
let { execSync } = require("child_process");
let canada = require("./canada");
let baass = require("./baass");
let skinwalker = require("./skinwalker");
let nids = require("./nids");
let pilots = require("./pilots");
let uk = require("./uk");
let brazil = require("./brazil");
let bluebook = require("./bluebook");

if (process.argv.length < 3) {
  console.log("phenomainon.js <sourcePath>");
  process.exit(1);
}

let sourcePath = process.argv[2];

fetchDatabase("baass", baass);
fetchDatabase("canada", canada);
fetchDatabase("skinwalker", skinwalker);
fetchDatabase("nids", nids);
fetchDatabase("pilots", pilots);
fetchDatabase("uk", uk);
fetchDatabase("brazil", brazil);
fetchDatabase("bluebook", bluebook);
fetchDatabase("bluebook2", bluebook, 10001);

preprocess("baass", baass.colNames);
preprocess("canada", canada.colNames);
preprocess("skinwalker", skinwalker.colNames);
preprocess("nids", nids.colNames);
preprocess("pilots", pilots.colNames);
preprocess("uk", uk.colNames);
preprocess("brazil", brazil.colNames);
preprocess("bluebook", bluebook.colNames);
preprocess("bluebook2", bluebook.colNames);

function preprocess(id, colNames) {
  try {
    let fullInPath = `${sourcePath}/${id}.json`;
    console.log(fullInPath);
    res = JSON.parse(fs.readFileSync(fullInPath).toString());
    let dataset = res.dataResponse[0].dataSubset[0].dataset.tableDataset;
    let datasetColumns = dataset.column;

    let rows = {};

    for (let col = 0; col < datasetColumns.length; col++) {
      let datasetColumn = datasetColumns[col];
      let nulls = datasetColumn.nullIndex;
      let values = datasetColumn.dateColumn || datasetColumn.stringColumn;
      if (values.values) values = values.values;
      let name = colNames[col];

      for (let row = 0; row < dataset.totalCount; row++) {
        if (!rows[row]) rows[row] = {};
        if (nulls.includes(row)) {
          rows[row][name] = null;
        } else {
          rows[row][name] = values.shift();
        }
      }
    }

    rows = object2array(rows);

    fs.writeFileSync(`${sourcePath}/${id}.out.json`, JSON.stringify(rows, null, 2));
  } catch (error) {
    console.error(error);
  }
}

function fetchDatabase(id, module, startRow = 1) {
  try {
    let fullOutPath = `${sourcePath}/${id}.json`;
    console.log(fullOutPath);

    let rowsCount = 10000;

    let requestData = module.buildRequest(startRow, rowsCount);
    let res = execSync(buildRequest(requestData));
    res = res.toString();
    res = res.replace(")]}'", "").trim();

    console.log(JSON.parse(res));

    fs.writeFileSync(fullOutPath, res);
  } catch (error) {
    console.error(error);
  }
}

function buildRequest(requestData) {
  let request = `
    curl 'https://datastudio.google.com/embed/batchedDataV2?appVersion=20220505_01020039' \
    --compressed \
    -X POST \
    -H 'Accept: application/json, text/plain, */*' \
    -H 'Accept-Language: en-US,en;q=0.5' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    -H 'Content-Type: application/json' \
    -H 'encoding: null' \
    -H 'Origin: https://datastudio.google.com' \
    -H 'DNT: 1' \
    -H 'Connection: keep-alive' \
    -H 'Referer: https://datastudio.google.com/embed/reporting/6e5b0397-b434-4c1e-be5f-9b2a4a88cedf/page/iBcqC' \
    -H 'Sec-Fetch-Dest: empty' \
    -H 'Sec-Fetch-Mode: cors' \
    -H 'Sec-Fetch-Site: same-origin' \
    -H 'TE: trailers' \
    --data-raw '${JSON.stringify(requestData)}'`;

  return request;
}

function object2array(o) {
  let arr = [];

  for (let idx = 0; idx < Object.keys(o).length; idx++) {
    arr.push(o[idx]);
  }

  return arr;
}
