import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LeftNavigationPage } from '../pages/LeftNavigationpage';
import { PimPage } from '../pages/PimPage';
import CommonUtils from '../utils/CommonUtils';

type PomFixtureType = {
    loginPage: LoginPage;
    userPage: UserPage;
    dashboardPage: DashboardPage;
    leftNavigationPage: LeftNavigationPage;
    pimPage: PimPage;
    commonUtils: CommonUtils;
};

export const test = baseTest.extend<PomFixtureType>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    userPage: async ({ page }, use) => {
        const userPage = new UserPage(page);
        await use(userPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    leftNavigationPage: async ({ page }, use) => {
        const leftNavigationPage = new LeftNavigationPage(page);
        await use(leftNavigationPage);
    },

    pimPage: async ({ page }, use) => {
        const pimPage = new PimPage(page);
        await use(pimPage);
    },

    commonUtils: async ({}, use) => {
        const commonUtils = new CommonUtils();
        await use(commonUtils);
    }

});

export { expect };
