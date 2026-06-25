import { test } from './fixtures/commonFixture';

import {expect} from '@playwright/test'


test('Global set for Auto Login', async ({page, loginPage,dashboardPage, commonUtils }) => {

    const decryptedUserName = commonUtils.decryptData(
        process.env.USER_NAME!
    );

    const decryptedPassword = commonUtils.decryptData(
        process.env.PASSWORD!
    );

    await loginPage.gotoOrangeHRM();

    await loginPage.loginOrangeHRM(
        decryptedUserName,
        decryptedPassword
    );

    // Wait a bit longer for the dashboard to load and verify the title
    await page.waitForURL((url) => {
        const str = typeof url === 'string' ? url : url.toString();
        return str.includes('/web/index.php/dashboard/index');
    }, { timeout: 20000 });
    await expect(dashboardPage.dashboardTitletext).toHaveText('Dashboard', { timeout: 20000 });
    await page.context().storageState({ path: './playwright/.auth/storageState.json' });
});