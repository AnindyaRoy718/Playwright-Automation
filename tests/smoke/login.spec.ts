import { test, expect } from '../../src/fixture/BaseTest';
import loginPageHelper from '../../src/helpers/loginPageHelper';

import loginData from '../../src/testdata/loginData.json';

test('Verify valid login', async ({ page }) => {

    const LoginPageHelper = new loginPageHelper(page);

    await page.goto('https://qabrains.com/');

    await LoginPageHelper.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
});