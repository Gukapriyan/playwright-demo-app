import {expect} from '@playwright/test';
import { test } from '../fixtures/hooks-fixture';


test('Temp test', async ({ page, gotoUrl, logout }) => {

    // const decryptedUserName = commonUtils.decryptData(
    //     process.env.USER_NAME!
    // );

    // const decryptedPassword = commonUtils.decryptData(
    //     process.env.PASSWORD!
    // );

    // console.log('Decrypted Username:', decryptedUserName);
    // console.log('Decrypted Password:', decryptedPassword);

    // await loginPage.gotoOrangeHRM();

    console.log('Page Title:', await page.title());

});

test('Tem test 2', async ({ page, gotoUrl, logout }) => {

    await expect(page).toHaveTitle('OrangeHRM');

});

test('Tem test 3', async ({ page, gotoUrl, logout }) => {

    await expect(page).toHaveTitle('OrangeHRM');

});