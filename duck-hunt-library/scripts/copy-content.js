const fs = require('fs-extra');
const path = require('path');

// Copy content directory to .open-next/assets
fs.copySync(
  path.join(__dirname, '..', 'content'),
  path.join(__dirname, '..', '.open-next/assets/content'),
  { overwrite: true }
);
