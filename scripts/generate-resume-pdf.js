const puppeteer = require('puppeteer');
const path = require('path');

async function generateResumePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML resume
  const htmlPath = path.join(__dirname, '../public/resume.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Set viewport for A4 size
  await page.setViewport({ width: 816, height: 1056 }); // A4 dimensions at 96 DPI
  
  // Generate PDF
  await page.pdf({
    path: path.join(__dirname, '../public/resume.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    }
  });
  
  await browser.close();
  console.log('Resume PDF generated successfully!');
}

generateResumePDF().catch(console.error);
