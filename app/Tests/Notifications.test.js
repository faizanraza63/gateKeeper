import General from "../Page Object/general"



describe('Notifications Cases', () => 
{
    it('Notifications 001- Go to Home', async()=>{

        await General.gotoHome()
        await General.login()
        await General.selectBuilding()
        await General.clickonAllowNotifications()
        await driver.$('//android.widget.TextView[@text=""]').click()
        await driver.$("(//android.widget.TextView[@text='Notifications' and @clickable='false' and @enabled='true'])").click();

    })


    it ('Notifications 002- Back from notifications to Main', async()=> 
    {
        await driver.$('//android.widget.TextView[@text="Back"]').click()
        

    })

    it('Notifications- close and delete the app', async() =>
        {
            await General.closeandDeleteAppFromDevice()
        })
    

})