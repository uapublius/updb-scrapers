let { execSync } = require('child_process');

if (process.argv.length < 3) {
  console.log('nuforc.js <outputPath>');
  process.exit(1);
}

let outputPath = process.argv[2];

// wget -e robots=off --mirror --page-requisites --adjust-extension --convert-links -H --domains='nuforc.org,www.nuforc.org' --include-directories='webreports,wp-content/uploads/' 'https://nuforc.org/webreports/ndxevent.html'
let request = `
wget \
-e robots=off \
--mirror \
--no-clobber \
--page-requisites \
--adjust-extension \
--convert-links \
-H \
--domains='nuforc.org,www.nuforc.org' \
-P ${outputPath} \
'https://nuforc.org/webreports/ndxevent.html'
`;

execSync(request);
