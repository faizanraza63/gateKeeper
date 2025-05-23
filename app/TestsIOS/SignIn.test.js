import General from "../Page Object/generalIOS"

let tenantInput, emailInput, passwordInput;



describe('Sign In Cases', () => {

   
  it('SignIn 001- Go to Home', async() => 
  {
    
    await General.gotoHome()
    
  })


  beforeEach(async () => {

    const inputs = await General.getInputFields();
    tenantInput = inputs.tenantInput;
    emailInput = inputs.emailInput;
    passwordInput = inputs.passwordInput;
   
});

  it('SignIn 002- SignIn without Tenant', async() =>{

    await emailInput.setValue('noman7@yopmail.com')
    await passwordInput.setValue('Password123!')
    await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
   // await General.clearFields('//XCUIElementTypeOther[@name="EMAIL"]')
    
   await General.removeCharacters('//XCUIElementTypeOther[@name="EMAIL"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="PASSWORD"]')
  
  })


  it('SignIn 003- SignIn without Email', async() =>{

    await tenantInput.setValue("Noman Security7")
    await passwordInput.setValue('Password123!')
    await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
    await General.removeCharacters('//XCUIElementTypeOther[@name="TENANT"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="PASSWORD"]')
     



  })

  it('SignIn 004- SignIn without Password', async() =>{

    await tenantInput.setValue("Noman Security7")
    await emailInput.setValue("noman7@yopmail.com")
    await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
    await General.removeCharacters('//XCUIElementTypeOther[@name="TENANT"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="EMAIL"]')

  })

  it('Sign In 005- SIgnIn with invalid tenant', async()=>{


    await tenantInput.setValue("invalidTenant")
    await emailInput.setValue("noman8@yopmail.com")
    await passwordInput.setValue("Password123!")
    await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
    
    await General.removeCharacters('//XCUIElementTypeOther[@name="TENANT"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="EMAIL"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="PASSWORD"]')
    await driver.$('//XCUIElementTypeStaticText[@name="Welcome to MyGatePass"]').click()
    

  })

  it('Sign In 006- SIgnIn with invalid Email', async()=>{


    await tenantInput.setValue("invalidTenant")
    await emailInput.setValue("noman8@yopmail.com")
    await passwordInput.setValue("Password123!!")
    await driver.$('//XCUIElementTypeStaticText[@name="Welcome to MyGatePass"]').click()
    await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
    await General.removeCharacters('//XCUIElementTypeOther[@name="TENANT"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="EMAIL"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="PASSWORD"]')
    await driver.$('//XCUIElementTypeStaticText[@name="Welcome to MyGatePass"]').click()


  })

  it('Sign In 007- SIgnIn with invalid Password', async()=>{


    await tenantInput.setValue("mgp")
    await emailInput.setValue("noman8@yopmail.com")
    await passwordInput.setValue("123@")
    await driver.$('//XCUIElementTypeStaticText[@name="Welcome to MyGatePass"]').click() 
    await driver.$('//XCUIElementTypeOther[@name="LOGIN"]').click()
    await General.removeCharacters('//XCUIElementTypeOther[@name="TENANT"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="EMAIL"]')
    await General.removeCharacters('//XCUIElementTypeOther[@name="PASSWORD"]')
    await driver.$('//XCUIElementTypeStaticText[@name="Welcome to MyGatePass"]').click() 
   

  })

  it('Sign In 008- SignIn with valid credentials', async()=>{

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

  it('SignIn 009- Logout', async()=>
  {

    await driver.$('//XCUIElementTypeOther[@name=""]').click()
    await driver.$('//XCUIElementTypeOther[@name="LOGOUT"]').click()


  })


  it('SignIn- close and delete the app', async() =>{

    await General.closeandDeleteAppFromDevice()
})
  

})
 