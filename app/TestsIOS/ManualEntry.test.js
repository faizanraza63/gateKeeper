import General from "../Page Object/generalIOS"

let tenantInput, emailInput, passwordInput;


describe('Manual Entry Cases', () => 
{

    it('Manual Registration 001- Go to Home', async()=> 
    {
        await General.gotoHome()
        await tenantInput.setValue("mgp")
        await emailInput.setValue("noman8@yopmail.com")
        await passwordInput.setValue("Password123!")
        await driver.$('//XCUIElementTypeStaticText[@name="Welcome to MyGatePass"]').click() 
        await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
        await driver.$('(//XCUIElementTypeOther[@name="In5 Media"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name=" Select your gate"]').click()
        await driver.$('(//XCUIElementTypeOther[@name="Main"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="SAVE"]').click()
        await driver.acceptAlert();  

        
    })

    beforeEach(async () => {
        
        const inputs = await General.getInputFields();
        tenantInput = inputs.tenantInput;
        emailInput = inputs.emailInput;
        passwordInput = inputs.passwordInput;
        });


    it.only('Go to Manual Screen', async()=>
    {

        await driver.$('~+').click();

    })

    it('Manual Entry 002-   ', async()=> 
    {
        await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.ImageView').click()
        await driver.$('//android.view.ViewGroup[@content-desc="New Visitor"]').click()

        await driver.$('//android.view.ViewGroup[@content-desc="🇦🇪"]').click()
        await driver.$('//android.widget.EditText[@resource-id="text-input-country-filter"]').setValue('Pak')
        await driver.pause(1500)
        await driver.$('//android.widget.TextView[@text="Pakistan (+92)"]').click()

        const phoneNumbers = [
            '3301234567', '3312345678', '3323456789', '3334567890', '3345678901',
            '3406789012', '3417890123', '3428901234', '3439012345', '3440123456',
            '3087750880', '3097750881', '3107750882', '3307750883', '3307750884'
          ];

          const randomPhoneNumber = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
          

        await driver.$('//android.widget.EditText[@text="Phone Number"]').setValue(randomPhoneNumber)
        await driver.$('//android.view.ViewGroup[@content-desc="NEXT"]').click()

        await driver.$('android=new UiSelector().className("android.widget.EditText").instance(1)').setValue('Test Destination')

        await driver.$('//android.view.ViewGroup[@content-desc="test 4"]').click()

        const randomEntryType = Math.floor(Math.random() * 2);

        if(randomEntryType ==0)
        {
            await driver.$('//android.view.ViewGroup[@content-desc="Walk in"]').click()
            await driver.$('//android.view.ViewGroup[@content-desc="SAVE ENTRY"]').click()
        }

        if(randomEntryType==1)
        {
          await driver.$('//android.view.ViewGroup[@content-desc="Drive in"]').click()
          await driver.$('//android.widget.TextView[@text="Add new plate"]').click()
          const randomIndex = Math.floor(Math.random() * 7);
          //  await General.selectDropdownOptionByIndex('//android.view.ViewGroup[starts-with(@content-desc, ",")]','android.view.ViewGroup',randomIndex)
          await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Dubai"]')
          await driver.$('//android.widget.EditText[@text="Y"]').setValue('D')
          const randomNumberPlate = Math.floor(Math.random() * (15560 - 12560 + 1)) + 12560;
          await driver.$('//android.widget.EditText[@text="45983"]').setValue(randomNumberPlate)
          await driver.$('//android.view.ViewGroup[@content-desc="ADD PLATE"]').click()
          await driver.$('//android.view.ViewGroup[@content-desc="SAVE ENTRY"]').click()
            
        }


        it('Manual Entry 003- close and delete the app', async() =>
        {
            await General.closeandDeleteAppFromDevice()
        })
    })

})