import {Locator, Page} from "@playwright/test";

export class LeftNavigationPage {

    readonly page:Page;
    readonly pimLink: Locator;
    readonly orangeHrmLogo: Locator;
    readonly leftNavigationPanel: Locator;

    constructor(page : Page){
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.orangeHrmLogo = page.getByRole('link', { name: 'client brand banner' });
        this.leftNavigationPanel = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul');
    }

    /**
     * to open the PIM module of OrangeHRM application
     */
    async openPimModule(){
        await this.pimLink.click();
    }   


}

