const puppeteer = require('puppeteer');

(async () => {
  console.log('Starte QA-Agent (Browser Automation)...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  let errors = [];
  page.on('pageerror', error => {
    errors.push(error.message);
  });
  page.on('requestfailed', request => {
    errors.push(`${request.failure().errorText} ${request.url()}`);
  });

  try {
    console.log('Navigiere zu http://localhost:3000 ...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Clear Service Workers just in case
    await page.evaluate(async () => {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (let registration of registrations) {
        await registration.unregister();
      }
    });

    console.log('Klicke auf "Erstgespräch"...');
    // Find a link that goes to /services
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      const servicesLink = links.find(l => l.href.includes('services'));
      if (servicesLink) {
        servicesLink.click();
      } else {
        throw new Error('Link nicht gefunden!');
      }
    });

    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 5000 });
    console.log('Navigation zu /services erfolgreich!');

    console.log('Klicke auf "Shop"...');
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      const shopLink = links.find(l => l.href.includes('shop'));
      if (shopLink) shopLink.click();
    });

    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 5000 });
    console.log('Navigation zu /shop erfolgreich!');

  } catch (error) {
    console.error('Fehler während des E2E Tests:', error.message);
  } finally {
    if (errors.length > 0) {
      console.log('\nGefundene Konsolen/Lade-Fehler:');
      errors.forEach(e => console.log('-', e));
    } else {
      console.log('\nKeine Fehler gefunden. Alle geklickten Seiten wurden sauber geladen!');
    }
    await browser.close();
  }
})();
