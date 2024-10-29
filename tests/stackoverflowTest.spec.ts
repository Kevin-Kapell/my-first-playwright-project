import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://stackoverflow.com')

    //address the accept cookies dialog
    const CookieAcknowledgmentDialog = page.locator('#onetrust-banner-sdk')
    if (await expect (CookieAcknowledgmentDialog).toBeVisible) {
        // await CookieAcknowledgmentDialog.locator('#onetrust-reject-all-handler').click()
        await page.getByRole('button', { name: 'Necessary cookies only' }).click();
    }
})

test('sort stackoverflow Questions', async({page}) => {
    // await page.locator('#nav-questions').click()
    await page.getByLabel('Primary').getByRole('link', { name: 'Questions' }).click();

    //select the sort option Newest
    await page.getByRole('link', {name: "Newest"}).click()

    //filter for the tag javascript
    await page.getByRole('button', { name: 'Filter', exact: true }).click()

    await page.locator('#uql-form').getByText('Newest').click()
    await page.getByRole('radio', { name: 'The following tags:' }).click()
    await page.locator('.s-expandable--content').getByRole('combobox').pressSequentially('javascript', {delay: 300})
    await page.getByRole('button', {name: 'Apply filter'}).click({timeout: 50000})
    await page.locator('.s-pagination--item', {hasText: '50'}).click()

    // Wait for the questions to load
    await page.waitForSelector('.s-post-summary');

    // Scroll and load more questions until we have at least 50
    let loadedQuestions = [] //The array that will gather the questions
    let temporaryQuestionsArray = [] //Temporary array to hold first 50 questions
    let allLoadedQuestions = [] //Final array with all questions

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
                const timestamp = post.querySelector('.s-user-card--time span').title

                return {
                    title,
                    tags,
                    votes,
                    timestamp
                }
            })
        })
    }

    temporaryQuestionsArray = loadedQuestions //Fill temporary array with first set of questions
    loadedQuestions = [] //Clear the array to gather the next 50 questions

    //go to next page
    await page.locator('[class="s-pagination--item js-pagination-item"]', {hasText: "Next"}).click()
    await page.waitForTimeout(10000);  // Adjust timeout as needed to allow for loading

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
                const timestamp = post.querySelector('.s-user-card--time span').title

                return {
                    title,
                    tags,
                    votes,
                    timestamp
                }
            })
        })
    }
    
    // Log the extracted data - need to change this to output to a text file and to the console if in debug mode
    allLoadedQuestions = temporaryQuestionsArray.concat(loadedQuestions) //combine the data in the arrays into one final array

    //evaluate the questions per the test requirements
    for (const allLoadedQuestion  of allLoadedQuestions){
        expect(allLoadedQuestion.tags).toContain('javascript')
    }

    for (let i = 1; i < allLoadedQuestions.length; i++) {
        const currentTimestamp = new Date(allLoadedQuestions[i].timestamp);
        const previousTimestamp = new Date(allLoadedQuestions[i - 1].timestamp);

        //uncomment the following 2 lines for debugging
        // console.log('Current time stamp = ' + currentTimestamp)
        // console.log('Previous time stamp = ' + previousTimestamp)

        // Assert that the current timestamp is older than the previous timestamp
        expect(currentTimestamp <= previousTimestamp).toBeTruthy();
    }

    console.log(allLoadedQuestions)
})