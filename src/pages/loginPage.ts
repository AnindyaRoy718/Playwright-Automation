import { Page, Locator } from '@playwright/test';
import { loginPageLocators } from '../locators/loginPageLocators';

export default class LoginPage {

    readonly page: Page;

    readonly signInButton: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly submitSignInButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.signInButton =
            page.locator(loginPageLocators.signInButton);

        this.usernameField =
            page.locator(loginPageLocators.usernameField);

        this.passwordField =
            page.locator(loginPageLocators.password);

        this.submitSignInButton =
            page.locator(loginPageLocators.submitSigninButton);
    }

    async clickSignIn() {

        await this.signInButton.click();
    }

    async enterUsername(username: string) {

        await this.usernameField.fill(username);
    }

    async enterPassword(password: string) {

        await this.passwordField.fill(password);
    }

    async clickSubmitSignIn() {

        await this.submitSignInButton.click();
    }

}