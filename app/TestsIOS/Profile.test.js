import General from "../Page Object/generalIOS"


let currentPassword,newPassword,confirmPassword
let tenantInput, emailInput, passwordInput;






describe('Profile Cases', () => {

   

    async function gotoPassword()
{

    await driver.pause(500)
    await driver.$('(//XCUIElementTypeOther[@name=" Back"])[3]').click()
    await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD "]').click()

}
    it('Profile 001- Go to Home', async() => 
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


    const passInputs = await General.getPasswordInputFields()
    currentPassword = passInputs.currentPassword;
    newPassword = passInputs.newPassword
    confirmPassword = passInputs.confirmPassword

    });

    it('Profile 002- Go to Profile', async() =>{

        await driver.$('//XCUIElementTypeOther[@name=""]').click()
        await driver.$('//XCUIElementTypeButton[@name=" Profile"]').click();
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD "]').click()

    })

    it('Profile 003- Try on all blank fields', async() =>{
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD"]').click()
        await gotoPassword()
    })

    
    it('Profie 004- Skipping currentPassword', async() =>{
        

        await newPassword.setValue('qwertY12#')
        await confirmPassword.setValue('qwertY12#')
        await General.closeKeyboard('//XCUIElementTypeStaticText[@name="Password update"]')
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD"]').click()

         await gotoPassword()

    })

    it('Profie 005- Skipping new Password', async() =>{

        await currentPassword.setValue('Password123!')
        await confirmPassword.setValue('qwertY12#')
        await General.closeKeyboard('//XCUIElementTypeStaticText[@name="Password update"]')
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD"]').click()

        await gotoPassword()


    })

    it('Profie 006- Skipping Confirm Password', async() =>{

        await currentPassword.setValue('Password123!')
        await newPassword.setValue('qwertY12#')
        await General.closeKeyboard('//XCUIElementTypeStaticText[@name="Password update"]')
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD"]').click()
        await gotoPassword()
    })

    it('Profie 006- Try with wrong current Password', async() =>{

        await currentPassword.setValue('wrongPassword')
        await newPassword.setValue('qwertY12#')
        await confirmPassword.setValue('qwertY12#')
        await General.closeKeyboard('//XCUIElementTypeStaticText[@name="Password update"]')
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD"]').click()
        await gotoPassword()
    })

    it('Profie 006- Updating the Password', async() =>{

        await currentPassword.setValue('Password123!')
        await newPassword.setValue('Password123!')
        await confirmPassword.setValue('Password123!')
        await General.closeKeyboard('//XCUIElementTypeStaticText[@name="Password update"]')
        await driver.$('//XCUIElementTypeOther[@name="UPDATE PASSWORD"]').click()
        
    })

    it('Profile 007- close and delete the app', async() =>{
    
        await General.closeandDeleteAppFromDevice()
    })
})