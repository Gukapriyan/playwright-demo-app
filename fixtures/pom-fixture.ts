import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { LeftNavigationPage } from "../pages/LeftNavigationpage";
import { PimPage } from "../pages/PimPage";
export { expect } from "@playwright/test";


type PomFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavigationPage: LeftNavigationPage;
    pimPage: PimPage;
};

export const test = baseTest.extend<PomFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        // Setup (if required)

        await use(loginPage);

        // Teardown (if required)
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);

        await use(dashboardPage);
    },

    userPage: async ({ page }, use) => {
        const userPage = new UserPage(page);

        await use(userPage);
    },
    leftNavigationPage: async ({ page }, use) => {
        const leftNavigationPage = new LeftNavigationPage(page);

        await use(leftNavigationPage);
    },

    pimPage: async ({ page }, use) => {
        const pimPage = new PimPage(page);

        await use(pimPage);
    }


});
