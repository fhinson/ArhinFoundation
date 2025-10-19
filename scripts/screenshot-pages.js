const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewportSize({ width: 1440, height: 900 });
  
  const pages = [
    { url: 'http://localhost:3000', name: 'home' },
    { url: 'http://localhost:3000/mission', name: 'mission' },
    { url: 'http://localhost:3000/about', name: 'about' },
    { url: 'http://localhost:3000/contact', name: 'contact' }
  ];
  
  for (const { url, name } of pages) {
    console.log(`Taking screenshot of ${name}...`);
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: `docs/${name}-screenshot.png`,
      fullPage: true 
    });
  }
  
  await browser.close();
  console.log('Screenshots saved to docs/');
}

takeScreenshots().catch(console.error);
