const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './eventos/Forum/photos/';
const outputDir = './photos/eventos/Forum/thumbnails/';
const thumbnailWidth = 150; // Width of the thumbnails (adjust as needed)

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp']; // Supported image formats

  if (validExtensions.includes(ext)) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);

    // Generate thumbnail
    sharp(inputFilePath)
      .resize(thumbnailWidth) // Set thumbnail width
      .toFile(outputFilePath)
      .then(() => {
        console.log(`Thumbnail created: ${outputFilePath}`);
      })
      .catch((err) => {
        console.error(`Error processing ${file}:`, err.message);
      });
  } else {
    console.log(`Skipping non-image file: ${file}`);
  }
});
