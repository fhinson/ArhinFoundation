import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const inputPath = join(projectRoot, 'public', 'francis-kumi-arhin.jpg');
const outputPath = join(projectRoot, 'public', 'francis-kumi-arhin-grayscale.jpg');

try {
  await sharp(inputPath)
    .greyscale()
    .jpeg({ quality: 85 })
    .toFile(outputPath);
  
  console.log(`✅ Successfully created grayscale image: ${outputPath}`);
} catch (error) {
  console.error('❌ Error converting image to grayscale:', error);
  process.exit(1);
}


