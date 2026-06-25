import { test as baseTest, expect } from './commonFixture';

type HooksFixtureType = {
    gotoUrl: void;
    logout: void;
};

export const test = baseTest.extend<HooksFixtureType>({

    gotoUrl: async ({ loginPage }, use) => {
        await loginPage.gotoOrangeHRM();
        await use();
    },

    logout: async ({ userPage }, use) => {
        await use();
        await userPage.logout();
    }



});

export { expect } from '@playwright/test';