import { expect, Page } from '@playwright/test';
import loginPage from '../pages/loginPage';

export default class loginPageHelper {

    readonly loginPage: loginPage;

    constructor(page: Page) {

        this.loginPage = new loginPage(page);
    }

    async verifyLoginPageVisible() {

        await expect(
            this.loginPage.usernameField, 'username field is visible properly'
        ).toBeVisible();
    }

    async login(username: string, password: string) {

        await this.loginPage.clickSignIn();

        await this.verifyLoginPageVisible();

        await this.loginPage.enterUsername(username);

        await this.loginPage.enterPassword(password);

        await this.loginPage.clickSubmitSignIn();

        await expect(
            this.loginPage.usernameField
        ).toBeHidden();
    }
}