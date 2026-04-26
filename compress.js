import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('./src/fundo-jogo-orcamento-grande.png');
const outputPath = path.resolve('./src/fundo-jogo-orcamento.webp');

async function compressImage() {
  try {
    console.log('Compressing user image...');
    
    // Check old size
    if (!fs.existsSync(inputPath)) {
        console.error('Input file not found:', inputPath);
        return;
    }
    const oldSize = fs.statSync(inputPath).size / 1024 / 1024;
    console.log(`Original size: ${oldSize.toFixed(2)} MB`);

    await sharp(inputPath)
      .resize(1200) // Resize to a good max width for the game map
      .webp({ quality: 80 }) 
      .toFile(outputPath);
      
    console.log('Image compressed successfully!');
    
    const newSize = fs.statSync(outputPath).size / 1024;
    console.log(`New size: ${newSize.toFixed(2)} KB`);
    
    // Delete the original large file
    fs.unlinkSync(inputPath);
    console.log('Original large image deleted to save space.');
  } catch (error) {
    console.error('Error compressing image:', error);
  }
}

compressImage();
