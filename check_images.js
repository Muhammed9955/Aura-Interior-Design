const fs = require('fs');
const path = require('path');

const galleryDir = path.join(process.cwd(), 'public', 'gallery');
const filesOnDisk = new Set(fs.readdirSync(galleryDir));

const pageTsxPath = path.join(process.cwd(), 'src', 'app', 'gallery', 'page.tsx');
const content = fs.readFileSync(pageTsxPath, 'utf8');

const regex = /'\/gallery\/([^']+)'/g;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null) {
  count++;
  const filename = match[1];
  if (!filesOnDisk.has(filename)) {
    console.log(`[BROKEN #${count}]: /gallery/${filename}`);
  }
}
console.log(`Finished checking ${count} gallery images.`);
