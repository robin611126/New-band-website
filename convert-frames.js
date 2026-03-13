const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, 'public', 'hero-sequence');
const OUTPUT_DIR = path.join(__dirname, 'public', 'hero-sequence-webp');

async function convertFrames() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.jpg'));
  console.log(`Found ${files.length} JPG files. Starting conversion...`);

  let completed = 0;

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    const filenameWithoutExt = path.basename(file, '.jpg');
    const outputPath = path.join(OUTPUT_DIR, `${filenameWithoutExt}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 4 }) // 80 is a great balance of quality and size, effort 4 is default
        .toFile(outputPath);
      
      completed++;
      if (completed % 10 === 0 || completed === files.length) {
        console.log(`Converted ${completed}/${files.length} frames...`);
      }
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }

  console.log('🎉 All frames converted to WebP successfully!');
}

convertFrames();
