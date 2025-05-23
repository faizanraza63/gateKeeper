
let tenantInput, emailInput, passwordInput;

class General {

    

    async locationPopup() {
        return await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
    }

    async nextButton() {
        return await $('//android.view.ViewGroup[@content-desc="NEXT"]');
    }

    async getStartedBtn() {
        return await $('//android.view.ViewGroup[@content-desc="GET STARTED!"]');
    }

    async acceptLocationPopup() {
        const popup = await this.locationPopup();
        if (await popup.isDisplayed()) {
            await popup.click();
            console.log("Location popup clicked");
        }
    }

    async clickNextButton() {
        const next = await this.nextButton();
        await next.waitForExist({ timeout: 5000 });
        await next.click();
    }

    async clickSimplifyButton() {
        const btn = await this.getStartedBtn();
        await btn.waitForExist({ timeout: 1000 });
        await btn.click();
    }

    async gotoHome() {
        await this.acceptLocationPopup();
        await this.clickNextButton();
        await this.clickSimplifyButton();

   
    }

    async getInputFields() {
        const tenantInput = await $('(//android.widget.EditText)[1]');
        const emailInput = await $('(//android.widget.EditText)[2]');
        const passwordInput = await $('(//android.widget.EditText)[3]');
        return { tenantInput, emailInput, passwordInput };
    }

    async getPasswordInputFields() {
        const currentPassword = await $('(//android.widget.EditText)[1]');
        const newPassword = await $('(//android.widget.EditText)[2]');
        const confirmPassword = await $('(//android.widget.EditText)[3]');
        return { currentPassword, newPassword, confirmPassword };
    }

    async closeandDeleteAppFromDevice()
    {
        await driver.pause(1500)
        await driver.terminateApp("mygatepass.security.com");
        await driver.removeApp("mygatepass.security.com")
        
    }

    async login()
    {

    const { tenantInput, emailInput, passwordInput } = await this.getInputFields();   
    await tenantInput.setValue("mgp")
    await emailInput.setValue("noman8@yopmail.com")
    await passwordInput.setValue("Password123!")
    await driver.hideKeyboard()
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    }

    



    async selectBuilding()
    {
        await driver.$('//android.view.ViewGroup[@content-desc="In5 Media"]').click()
        await driver.$('//android.view.ViewGroup[@content-desc=", Select your gate"]').click()
        await driver.$('//android.view.ViewGroup[@content-desc="Main"]').click()
         await driver.$('//android.view.ViewGroup[@content-desc="SAVE"]').click()


    

    }

    async clickonAllowNotifications()
    {
        try {
            const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
        
            // Wait for the element up to 5 seconds, but don't throw if not found
            const exists = await allowButton.waitForExist({ timeout: 5000, timeoutMsg: '', interval: 500 }).catch(() => false);
        
            if (exists && await allowButton.isDisplayed()) {
                await allowButton.click();
                console.log("Permission allow button clicked.");
            } else {
                console.log("Permission allow button not displayed, clicking on Profile...");
            }
        } catch (err) {
            console.log("Something went wrong while handling permission or navigating to Profile:", err.message);
        }

    }

    async selectDropDown(locator,value)
    {

        const dropdown = await $(locator);
        await dropdown.waitForExist({ timeout: 5000 });
        await dropdown.click(); // open the dropdown
        
        const valueOption = await $(value);
        await valueOption.waitForExist({ timeout: 5000 });
        await valueOption.click(); 


    }

    async selectDropdownOptionByIndex(dropdownSelector, optionSelector, randomIndex) {
        // Open the dropdown
        const dropdown = await $(dropdownSelector);
        await dropdown.click();
    
        // Get all the dropdown options
        const options = await $$(optionSelector);
    
        // Optional: Check if randomIndex is within bounds
        if (randomIndex >= options.length) {
            throw new Error(`Random index ${randomIndex} is out of range. Total options: ${options.length}`);
        }
    
        // Select the option at randomIndex
        await options[randomIndex].click();
    }
    

    
}

export default new General();
