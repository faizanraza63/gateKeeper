import General from "../Page Object/general"



describe('Manual Entry Cases', () => 
{

    it('Manual Registration 001- Go to Home', async()=> 
    {
        await General.gotoHome()
        await General.login()
        await General.selectBuilding()
        await General.clickonAllowNotifications()    

    })

    it('Manual Entry 002-   ', async()=> 
    {
        await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[13]/android.view.ViewGroup/android.widget.ImageView').click()
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

        const idFoundpopup = await driver.$('//android.widget.Button[@resource-id="android:id/button1"]')

        if(await idFoundpopup.isDisplayed())
        {
            await idFoundpopup.click()

        }

        await driver.$('android=new UiSelector().className("android.widget.EditText").instance(1)').setValue('Test Destination')

        const randomVisitorType = Math.floor(Math.random() * 4) + 1;

        if(randomVisitorType ==1)
        { await driver.$('//android.view.ViewGroup[@content-desc="Contractor"]').click()}
        if(randomVisitorType ==2)
            { await driver.$('//android.view.ViewGroup[@content-desc="Delivery"]').click()}
        if(randomVisitorType ==3)
            { await driver.$('//android.view.ViewGroup[@content-desc="Inspection"]').click()}
        if(randomVisitorType ==4)
            { await driver.$('//android.view.ViewGroup[@content-desc="Parent"]').click()}


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
          //await General.selectDropDown('//android.view.ViewGroup[@content-desc=", Dubai"]','//android.view.ViewGroup[@content-desc="Dubai"]')
          await driver.$('//android.widget.EditText[@text="Y"]').setValue('D')
          const randomNumberPlate = Math.floor(Math.random() * (15560 - 12560 + 1)) + 12560;
          await driver.$('//android.widget.EditText[@text="45983"]').setValue(randomNumberPlate)
          await driver.hideKeyboard()
          await driver.$('//android.view.ViewGroup[@content-desc="ADD PLATE"]').click()
          await driver.$('//android.view.ViewGroup[@content-desc="SAVE ENTRY"]').click()
            
        }


        it('Manual Entry 003- close and delete the app', async() =>
        {
            await General.closeandDeleteAppFromDevice()
        })
    })

})