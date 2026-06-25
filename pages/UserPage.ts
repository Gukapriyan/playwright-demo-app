import {Locator, Page} from '@playwright/test';


export class UserPage{
    readonly page: Page;
    readonly usermenuebutton:Locator;
    readonly logoutButton:Locator;


    constructor(page:Page){
        this.page= page;
        this.usermenuebutton = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' })

    }
     
    async logout(){
        try {
            if (this.page.isClosed()) return;
            await this.usermenuebutton.waitFor({ state: 'visible', timeout: 3000 });
            await this.usermenuebutton.click();
            await this.logoutButton.waitFor({ state: 'visible', timeout: 3000 });
            await this.logoutButton.click();
        } catch (e) {
            // Swallow errors during logout to avoid failing tests because of teardown issues
            return;
        }

    }

}

