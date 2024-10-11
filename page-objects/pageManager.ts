import { Page, expect } from "@playwright/test";
import {SidebarNavigationPage} from '../page-objects/sidebarNavigationPage'


export class PageManager{

    private readonly page: Page
    private readonly sidebarNavigationPage: SidebarNavigationPage

    constructor(page: Page) {
        this.page = page
        this.sidebarNavigationPage = new SidebarNavigationPage(this.page)
    }

    navigateToQuestions(){
        return this.sidebarNavigationPage
    }
}