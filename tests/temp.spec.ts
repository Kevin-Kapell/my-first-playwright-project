//from ChatGPT to get 50 records.
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the StackOverflow questions page
  await page.goto('https://stackoverflow.com/questions');

  // Wait for the questions to load
  await page.waitForSelector('.s-post-summary');

  // Scroll and load more questions until we have at least 50
  let loadedQuestions = [];
  while (loadedQuestions.length < 50) {
    // Scroll to the bottom of the page to load more questions
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for additional questions to load
    await page.waitForTimeout(2000);  // Adjust timeout as needed to allow for loading

    // Extract the questions again after loading more
    loadedQuestions = await page.$$eval('.s-post-summary', (posts) => {
      return posts.map((post) => {
        // Extract the title of the question
        const title = post.querySelector('h3 a').innerText;

        // Extract the tags associated with the question
        const tags = Array.from(post.querySelectorAll('.tags a')).map(tag => tag.innerText);

        // Extract the number of votes
        const votes = post.querySelector('.s-post-summary--stats-item span').innerText;

        // Extract the timestamp of when the question was asked
        const timestamp = post.querySelector('time').getAttribute('datetime');

        return {
          title,
          tags,
          votes,
          timestamp
        };
      });
    });
  }

  // Slice to ensure we only have the first 50 questions
  const first50Questions = loadedQuestions.slice(0, 50);

  // Output the extracted data
  console.log(first50Questions);

  // Close the browser
  await browser.close();
})();
