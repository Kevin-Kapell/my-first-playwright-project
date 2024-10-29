const { chromium } = require("playwright");
const path = require('path');
const fs = require('fs');

(async () => {
//   // Launch a new browser instance
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

//   // Navigate to Stack Overflow's questions page 
//   console.log("Navigating to Stack Overflow...");
//   await page.goto("https://stackoverflow.com/questions", {
//     waitUntil: "domcontentloaded", 
//     timeout: 120000
// });

  async function runTests() {
    const testFiles = fs.readdirSync(path.join(__dirname, 'tests'));

    for (const file of testFiles) {
        const test = require('./tests/${file}')
        await test(); //Assuming each test file exports an async function
    }    
  }

  await runTests
  
  // Close the browser
//   await browser.close();
})();
