import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PROJECTS_DIR = 'public/projects';
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function optimizeImages() {
  try {
    const files = await fs.readdir(PROJECTS_DIR);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg')
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(PROJECTS_DIR, file);
      const outputFileName = file.replace(/\.(png|jpe?g)$/i, '.webp');
      const outputPath = path.join(PROJECTS_DIR, outputFileName);

      console.log(`Optimizing ${file} -> ${outputFileName}...`);

      const image = sharp(inputPath);
      const metadata = await image.metadata();

      let pipeline = image;
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }

      await pipeline
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const oldSize = (await fs.stat(inputPath)).size;
      const newSize = (await fs.stat(outputPath)).size;
      console.log(`  Done: ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(2)}KB`);
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
