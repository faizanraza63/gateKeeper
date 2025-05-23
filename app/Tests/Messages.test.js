import General from "../Page Object/general"



describe('Messages Cases', () => 
{
    it('Messages 001- Go to Home', async()=>{

    await General.gotoHome()
    await General.login()
    await General.selectBuilding()
    await General.clickonAllowNotifications()    
    await driver.$('//android.widget.TextView[@text=""]').click()
    await driver.$("(//android.widget.TextView[@text='Messages' and @clickable='false' and @enabled='true'])").click();


    })


    it ('Messages 002- Back from Messages to Main', async()=> 
        {
            await driver.$('//android.widget.TextView[@text="Back"]').click()
            
    
        })

it('Messages- close and delete the app', async() =>
    {
        await General.closeandDeleteAppFromDevice()
    })


})