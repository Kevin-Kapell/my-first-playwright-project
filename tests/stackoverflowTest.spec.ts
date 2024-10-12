import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://stackoverflow.com')

    //address the accept cookies dialog
    const CookieAcknowledgmentDialog = page.locator('#onetrust-banner-sdk')
    if (await expect (CookieAcknowledgmentDialog).toBeVisible) {
        await CookieAcknowledgmentDialog.locator('#onetrust-reject-all-handler').click()
    }
})

// test.describe('StackoverFlow questions view', () => {

    test('sort stackoverflow Questions', async({page}) => {
        await page.locator('#nav-questions').click()
        const questionsPage = await page.locator('#mainbar', {hasText: "All Questions"})

        //select the sort option Newest
        await questionsPage.locator('.js-gps-track', {hasText:"Newest"}).click()

        //filter for the tag javascript
        await questionsPage.getByRole('button', {name: "Filter"}).click()

        await questionsPage.locator('.s-expandable--content').getByText('Newest').click()
        await questionsPage.locator('.s-expandable--content').getByText('The following tags:').click()
        await questionsPage.locator('.s-expandable--content').getByRole('combobox').pressSequentially('javascript', {delay: 500})
        await questionsPage.locator('.s-expandable--content').getByRole('button', {name: "Apply filter"}).click()


    })
