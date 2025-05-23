import General from "../Page Object/generalIOS"

let tenantInput, emailInput, passwordInput;


describe('Messages Cases', () => 
{
    it('Messages 001- Go to Home', async()=>{

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


    beforeEach(async () => 
    {

    const inputs = await General.getInputFields();
    tenantInput = inputs.tenantInput;
    emailInput = inputs.emailInput;
    passwordInput = inputs.passwordInput;
    });


    it('Messages 001- Go to Messages', async()=>
    {
        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" Messages"]').click();
        

    })

    it('Messages 002- Back from Messages to Main', async()=> 
    {
        await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
        

    })

    it('Meessages 003', async()=>
    {
        await General.closeandDeleteAppFromDevice()


    })



})