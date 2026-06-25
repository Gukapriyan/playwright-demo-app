import {Page, Locator} from "@playwright/test";

export class PimPage{
    readonly page: Page;
    readonly addPimButton: Locator;
    readonly firstNameTextBoxInput: Locator;
    readonly lastNameTextBoxInput: Locator;
    readonly middleNameTextBoxInput: Locator;
    readonly employeeIdInput: Locator;
    readonly newEmployeeNameHeading : Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addPimButton = page.getByRole('button', { name: 'Add' });
        this.firstNameTextBoxInput = page.getByPlaceholder('First Name');
        this.lastNameTextBoxInput = page.getByPlaceholder('Last Name');
        this.middleNameTextBoxInput = page.getByPlaceholder('Middle Name');
        this.employeeIdInput = page.locator('xpath=//label[normalize-space()="Employee Id"]/ancestor::div[contains(@class,"oxd-input-group")]//input');
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name h6');
        this.saveButton = page.getByRole('button', { name: 'Save' });

    }


    /**
     * to add two employee in the PIM module of OrangeHRM application
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */

    async addEmployee(firstName: string, middleName: string, lastName: string) {
        await this.addPimButton.click();
        await this.firstNameTextBoxInput.fill(firstName);
        await this.middleNameTextBoxInput.fill(middleName);
        await this.lastNameTextBoxInput.fill(lastName);
        await this.employeeIdInput.fill(Date.now().toString().slice(-8));
        await this.saveButton.click();
        await this.newEmployeeNameHeading.waitFor({ state: 'visible' });
    }

    
    
}
