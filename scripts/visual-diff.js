#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

const SCREENSHOT_SIZE = { width: 1440, height: 900 };
const TOLERANCE = 0.15; // 15% pixel difference tolerance
const MAX_DIFF_PERCENT = 5; // Allow up to 5% difference for color/font changes

async function takeScreenshot(url, outputPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize(SCREENSHOT_SIZE);
  await page.goto(url, { waitUntil: 'networkidle' });
  
  // Wait for any animations to settle
  await page.waitForTimeout(1000);
  
  await page.screenshot({ 
    path: outputPath,
    fullPage: true,
    clip: { x: 0, y: 0, width: SCREENSHOT_SIZE.width, height: SCREENSHOT_SIZE.height }
  });
  
  await browser.close();
}

async function compareImages(goldenPath, currentPath, diffPath) {
  const golden = PNG.sync.read(fs.readFileSync(goldenPath));
  const current = PNG.sync.read(fs.readFileSync(currentPath));
  
  const { width, height } = golden;
  const diff = new PNG({ width, height });
  
  const numDiffPixels = pixelmatch(
    golden.data, 
    current.data, 
    diff.data, 
    width, 
    height, 
    { threshold: 0.1 }
  );
  
  const totalPixels = width * height;
  const diffPercent = (numDiffPixels / totalPixels) * 100;
  
  if (numDiffPixels > 0) {
    fs.writeFileSync(diffPath, PNG.sync.write(diff));
  }
  
  return { numDiffPixels, diffPercent };
}

async function main() {
  const command = process.argv[2];
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  
  const docsDir = path.join(__dirname, '..', 'docs');
  const goldenPath = path.join(docsDir, 'golden.png');
  const currentPath = path.join(docsDir, 'current.png');
  const diffPath = path.join(docsDir, 'diff.png');
  
  // Ensure docs directory exists
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }
  
  if (command === 'capture') {
    console.log('📸 Capturing baseline screenshot...');
    await takeScreenshot(`${baseUrl}/baseline`, goldenPath);
    console.log(`✅ Golden baseline saved to ${goldenPath}`);
    
  } else if (command === 'check') {
    console.log('🔍 Taking current screenshot...');
    await takeScreenshot(`${baseUrl}/`, currentPath);
    
    if (!fs.existsSync(goldenPath)) {
      console.error('❌ Golden baseline not found. Run "npm run vis:capture" first.');
      process.exit(1);
    }
    
    console.log('🔍 Comparing images...');
    const { numDiffPixels, diffPercent } = await compareImages(goldenPath, currentPath, diffPath);
    
    console.log(`📊 Difference: ${diffPercent.toFixed(2)}% (${numDiffPixels} pixels)`);
    
    if (diffPercent > MAX_DIFF_PERCENT) {
      console.error(`❌ Visual diff too large: ${diffPercent.toFixed(2)}% > ${MAX_DIFF_PERCENT}%`);
      if (fs.existsSync(diffPath)) {
        console.log(`🔍 Diff heatmap saved to ${diffPath}`);
      }
      process.exit(1);
    } else {
      console.log(`✅ Visual diff within tolerance: ${diffPercent.toFixed(2)}% ≤ ${MAX_DIFF_PERCENT}%`);
    }
    
  } else if (command === 'update') {
    console.log('🔄 Updating golden baseline...');
    if (fs.existsSync(currentPath)) {
      fs.copyFileSync(currentPath, goldenPath);
      console.log(`✅ Golden baseline updated from current screenshot`);
    } else {
      console.error('❌ Current screenshot not found. Run "npm run vis:check" first.');
      process.exit(1);
    }
    
  } else {
    console.log('Usage:');
    console.log('  npm run vis:capture  - Capture baseline from /baseline');
    console.log('  npm run vis:check    - Compare / with baseline');
    console.log('  npm run vis:update  - Update baseline with current /');
  }
}

main().catch(console.error);
