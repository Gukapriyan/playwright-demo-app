import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator ;
    readonly loginButton: Locator;
    readonly invalidCredentialsErrorMessage: Locator;

    constructor(page:Page){
        this.page=page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsErrorMessage = page.getByText('Invalid credentials');
    }


/**
 * 
 */
    async gotoOrangeHRM(){
        const base = process.env.BASE_URL || '';
        await this.page.goto(`${base}/web/index.php/auth/login`);
    }

    /**
     * 
     * @param userName 
     * @param password 
     */
    async loginOrangeHRM(userName: string, password: string){

        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
}