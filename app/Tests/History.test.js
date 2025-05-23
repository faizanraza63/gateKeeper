import General from "../Page Object/general"



describe('history Cases', () => 
{
    it('History 001- Go to Home', async()=>
    {

        await General.gotoHome()
        await General.login()
        await General.selectBuilding()
        await General.clickonAllowNotifications()
        await driver.$('//android.widget.TextView[@text=""]').click()
        await driver.$("(//android.widget.TextView[@text='History' and @clickable='false' and @enabled='true'])").click();

    })

    it('History 002- Click "Today" in the dropdown', async()=>
    {
        await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Today"]')



    })

    it('History 003- Click "Week" in the dropdown', async()=>
    {
        await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Week"]')


    })

    it('History 004- Click "Month" in the dropdown', async()=>
    {
        await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Month"]')


    })

    it('History 005- Click "year" in the dropdown', async()=>
    {
        await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Year"]')


    })

    it('History 006- Check "Walk in " for "Today" ', async()=>
    {
        await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Today"]')
        
        await driver.$('//android.widget.TextView[@text="WalkIn"]').click()


    })

    it('History 007- Check "Drive in " for "Today" ', async()=>
    {
        await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Today"]')
        
        await driver.$('//android.widget.TextView[@text="DriveIn"]').click()


    })

    it('History 008- Check "Walk in " for "Week" ', async()=>
        {
            await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Week"]')
            
            await driver.$('//android.widget.TextView[@text="WalkIn"]').click()
    
    
        })
    
        it('History 009- Check "Drive in " for "Week" ', async()=>
        {
            await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Week"]')
            
            await driver.$('//android.widget.TextView[@text="DriveIn"]').click()
    
    
        })

        
        it('History 010- Check "Walk in " for "Month" ', async()=>
            {
                await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Month"]')
                
                await driver.$('//android.widget.TextView[@text="WalkIn"]').click()
        
        
            })
        
            it('History 011- Check "Drive in " for "Month" ', async()=>
            {
                await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Month"]')
                
                await driver.$('//android.widget.TextView[@text="DriveIn"]').click()
        
        
            })

            
            it('History 012- Check "Walk in " for "Year" ', async()=>
                {
                    await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Year"]')
                    
                    await driver.$('//android.widget.TextView[@text="WalkIn"]').click()
            
            
                })
            
                it('History 013- Check "Drive in " for "Year" ', async()=>
                {
                    await General.selectDropDown('//android.view.ViewGroup[starts-with(@content-desc, ",")]','//android.view.ViewGroup[@content-desc="Year"]')
                    
                    await driver.$('//android.widget.TextView[@text="DriveIn"]').click()
            
            
                })
            

    
    

    it('Profile- close and delete the app', async() =>
    {
        await General.closeandDeleteAppFromDevice()
    })

})