const puppeteer = require('puppeteer');
const path = require('path');

async function generateResumePDF() {
  // Launch browser with additional arguments for better font rendering
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });
  
  const page = await browser.newPage();
  
  // Load the HTML resume
  const htmlPath = path.join(__dirname, '../public/resume.html');
  await page.goto(`file://${htmlPath}`, { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  
  // Set viewport for A4 size with higher resolution
  await page.setViewport({ 
    width: 816, 
    height: 1056,
    deviceScaleFactor: 2 // Higher resolution for better quality
  });
  
  // Generate PDF with enhanced settings
  await page.pdf({
    path: path.join(__dirname, '../public/resume.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    displayHeaderFooter: false,
    scale: 1.0
  });
  
  await browser.close();
  console.log('Resume PDF generated successfully with enhanced styling!');
}

generateResumePDF().catch(console.error);
