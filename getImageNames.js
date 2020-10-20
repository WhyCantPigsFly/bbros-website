// Run this script whenever new images are loaded
// copy imageNames.txt content and replace the first line in docs/app.js
const fs = require('fs');

const files = fs.readdirSync('docs/showcase');

const data = `const imageNames = ${JSON.stringify(files)};`;

fs.writeFile('imageNames.txt', data, (err) => {
  if (err) throw err;
  console.log('Saved the image names');
});
