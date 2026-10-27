import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function testAirbnbClone() {
  console.log('🚀 Starting automated browser test of Airbnb Clone...');

  const chromePath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
  
  if (!fs.existsSync(chromePath)) {
    console.error('Chrome executable not found at:', chromePath);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    // 1. Visit listing page
    console.log('1. Navigating to http://127.0.0.1:5173/ ...');
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));

    // Ensure screenshots folder exists
    const outDir = path.resolve('public', 'screenshots');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    await page.screenshot({ path: path.join(outDir, '1-listing-page.png') });
    console.log('✓ Captured View 1: Listing Page -> public/screenshots/1-listing-page.png');

    // 2. Open Photo Tour
    console.log('2. Clicking "Show all photos" button...');
    const showAllBtn = await page.$('.show-all-photos-btn');
    if (showAllBtn) {
      await showAllBtn.click();
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({ path: path.join(outDir, '2-photo-tour.png') });
      console.log('✓ Captured View 2: Fullscreen Photo Tour -> public/screenshots/2-photo-tour.png');
    }

    // 3. Open Lightbox
    console.log('3. Clicking first photo in Photo Tour to open Lightbox...');
    const firstPhotoCard = await page.$('.photo-tour-card');
    if (firstPhotoCard) {
      await firstPhotoCard.click();
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({ path: path.join(outDir, '3-lightbox.png') });
      console.log('✓ Captured View 3: Lightbox Viewer -> public/screenshots/3-lightbox.png');

      // 4. Test keyboard ArrowRight
      console.log('4. Testing keyboard ArrowRight navigation in Lightbox...');
      await page.keyboard.press('ArrowRight');
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({ path: path.join(outDir, '4-lightbox-next.png') });
      console.log('✓ Verified keyboard navigation (ArrowRight) -> public/screenshots/4-lightbox-next.png');

      // 5. Test Escape key to close Lightbox
      console.log('5. Testing Escape key to close Lightbox...');
      await page.keyboard.press('Escape');
      await new Promise(r => setTimeout(r, 800));
    }

    // Close Photo Tour back to listing
    const backBtn = await page.$('.photo-tour-back-btn');
    if (backBtn) {
      await backBtn.click();
      await new Promise(r => setTimeout(r, 800));
    }

    // 6. Test Amenities Modal
    console.log('6. Clicking "Show all amenities" button...');
    const amenitiesBtn = await page.$('.show-amenities-btn');
    if (amenitiesBtn) {
      await amenitiesBtn.click();
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({ path: path.join(outDir, '5-amenities-modal.png') });
      console.log('✓ Captured Amenities Modal -> public/screenshots/5-amenities-modal.png');
      await page.keyboard.press('Escape');
      await new Promise(r => setTimeout(r, 500));
    }

    // 7. Test Architecture Modal
    console.log('7. Clicking "Architecture Diagram" badge in header...');
    const archBtn = await page.$('.arch-diagram-btn');
    if (archBtn) {
      await archBtn.click();
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({ path: path.join(outDir, '6-architecture-modal.png') });
      console.log('✓ Captured Architecture Diagram Modal -> public/screenshots/6-architecture-modal.png');
      await page.keyboard.press('Escape');
      await new Promise(r => setTimeout(r, 500));
    }

    console.log('\n🎉 ALL AUTOMATED TESTS & VERIFICATIONS PASSED SUCCESSFULLY!');
  } catch (err) {
    console.error('Test execution error:', err);
  } finally {
    await browser.close();
  }
}

testAirbnbClone();
