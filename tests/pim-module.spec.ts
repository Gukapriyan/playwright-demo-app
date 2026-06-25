import {test,expect} from "../fixtures/hooks-fixture";
import pimModuleData from "../data/pim-module-data.json";


test('[PIM] verify that a new employee is sucessfully created under the PIM module.',{
    tag:['@UI','@UAT'], annotation: {
        type:'Test case Link', description:'Verify that the user cannot log on with an invalid password.'
    }
}, async ({gotoUrl,loginPage,dashboardPage, leftNavigationPage, pimPage, commonUtils}) => {
    await test.step("open PIM module",async()=>{
        await leftNavigationPage.openPimModule();
    })

    await test.step("click on add employee button",async()=>{
        await pimPage.addEmployee(pimModuleData.first_name, pimModuleData.middle_name, pimModuleData.last_name);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
    });
    
});
