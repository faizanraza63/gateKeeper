import General from "../Page Object/generalIOS"

let tenantInput, emailInput, passwordInput;

describe('history Cases', () => 
{
    it('History 001- Go to History', async()=>
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

  //  await driver.$('//XCUIElementTypeOther[@name="Allow"]').click()
   // await driver.$('//XCUIElementTypeOther[@name="Allow"]').click()

   await driver.acceptAlert();  
    })


    beforeEach(async () => {
        
        const inputs = await General.getInputFields();
        tenantInput = inputs.tenantInput;
        emailInput = inputs.emailInput;
        passwordInput = inputs.passwordInput;
        });


    it('History - Go to Hisory', async() =>{

        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
        
    })

    it('History 002- Check "WalkIn" entries', async()=>
    {
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()
    })
    
    

    it('History 003- Check "Drive In" entries', async()=>
    {
        await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()

    })

    it('History 004- Check "All" entries', async()=>
    {
        await driver.$('//XCUIElementTypeOther[@name="All"]').click()
    
    })

    it('History 005- Check today entries for Delivery', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })

    it('History 006- Check today entries for Notified', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 007- Check today entries for Visitor', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
    })


    it('History 008- Check WEEK entries for Delivery', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Week"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })


    it('History 009- Check WEEK entries for Notified', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Week"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 010- Check WEEK entries for Visitor', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Week"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();

    })


    it('History 011- Check MONTH entries for Delivery', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Month"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })


    it('History 012- Check MONTH entries for Notified', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Month"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 013- Check MONTH entries for Visitor', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Month"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();

    })



it('History 014- Check YEAR entries for Delivery', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Year"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })


    it('History 015- Check YEAR entries for Notified', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Year"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 016- Check YEAR entries for Visitor', async()=>
    {
        
        
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Year"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();

    })
    
})


describe('WALK in for all filters', ()=>
{

    it('History 017- Check today entries for Delivery', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
        
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
        })
    
        it('History 018- Check today entries for Notified', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
        
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
    
            
    
        })
    
        it('History 019- Check today entries for Visitor', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
        
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
        
        })
    
    
        it('History 020- Check WEEK entries for Delivery', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()      
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Week"]').click();
        
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
        })
    
    
        it('History 021- Check WEEK entries for Notified', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()     
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Week"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
    
            
    
        })
    
        it('History 022- Check WEEK entries for Visitor', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()      
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Week"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
        })
    
    
        it('History 023- Check MONTH entries for Delivery', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Month"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
        })
    
    
        it('History 024- Check MONTH entries for Notified', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Month"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
    
            
    
        })
    
        it('History 025- Check MONTH entries for Visitor', async()=>
        {
            
       await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Month"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
        })
    
    
    
    it('History 026- Check YEAR entries for Delivery', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()     
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Year"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
        })
    
    
        it('History 027- Check YEAR entries for Notified', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Year"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
    
            
    
        })
    
        it('History 028- Check YEAR entries for Visitor', async()=>
        {
            
        await driver.$('//XCUIElementTypeOther[@name="WalkIn"]').click()    
        await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Year"]').click();
    
    
        await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
        await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();
    
    
        await driver.pause(1000)
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
        })


})


describe('Drive IN for all filters', ()=>
    {
    
it('History 029- Check today entries for Delivery', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()    
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })

    it('History 030- Check today entries for Notified', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()   
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 031- Check today entries for Visitor', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()    
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Today"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    
    })


    it('History 032- Check WEEK entries for Delivery', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()      
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Week"]').click();
    

    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })


    it('History 033- Check WEEK entries for Notified', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()   
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Week"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 034- Check WEEK entries for Visitor', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()     
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Week"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();

    })


    it('History 035- Check MONTH entries for Delivery', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click() 
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Month"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })


    it('History 036- Check MONTH entries for Notified', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()    
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Month"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 037- Check MONTH entries for Visitor', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()   
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Month"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();

    })



it('History 038- Check YEAR entries for Delivery', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click() 
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Year"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Delivery"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();
    })


    it('History 039- Check YEAR entries for Notified', async()=>
    {
        
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()   
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Year"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Notified"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();


        

    })

    it('History 040- Check YEAR entries for Visitor', async()=>
    {
  
    await driver.$('//XCUIElementTypeOther[@name="DriveIn"]').click()
    await driver.$('(//XCUIElementTypeOther[@name=" Today"])[2]').click();
    await driver.$('//XCUIElementTypeOther[@name="Year"]').click();


    await driver.$('(//XCUIElementTypeOther[@name=" Select Visitor Type"])[2]').click()
    await driver.$('//XCUIElementTypeOther[@name="Visitor"]').click();


    await driver.pause(1000)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeButton[@name=" History"]').click();

    })


    it('Messages 003- Back from Messages to Main', async()=> 
    {
        await General.closeandDeleteAppFromDevice()
        
    })
    
    
    })