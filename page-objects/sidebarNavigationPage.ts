import { Locator, Page } from "@playwright/test";

export class SidebarNavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async questionsPage(){
        await this.page.getByText('Questions').click()
    }




}