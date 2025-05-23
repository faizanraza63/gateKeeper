import General from "../Page Object/general"

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

    await emailInput.setValue("noman7@yopmail.com")
    await passwordInput.setValue('Password123!')
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    await driver.hideKeyboard()
    await emailInput.clearValue()
    await passwordInput.clearValue()
    await driver.hideKeyboard();
    

  })


  it('SignIn 002- SignIn without Email', async() =>{

    await tenantInput.setValue("Noman Security7")
    await passwordInput.setValue('Password123!')
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    await driver.hideKeyboard()
    await tenantInput.clearValue()
    await passwordInput.clearValue()
    await driver.hideKeyboard();




  })

  it('SignIn 003- SignIn without Password', async() =>{

    await tenantInput.setValue("Noman Security7")
    await emailInput.setValue("noman7@yopmail.com")
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    await driver.hideKeyboard()
    await tenantInput.clearValue()
    await emailInput.clearValue()
    await passwordInput.clearValue()
    await driver.hideKeyboard();


  })

  it('Sign In 004- SIgnIn with invalid tenant', async()=>{


    await tenantInput.setValue("invalidTenant")
    await ("noman8@yopmail.com")
    await driver.$('//android.widget.EditText[@text="Your password"]').setValue("Password123!")
    await driver.hideKeyboard()
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    await driver.pause(500)
    await tenantInput.clearValue()
    await emailInput.clearValue()
    await passwordInput.clearValue()
    await driver.hideKeyboard();

  })

  it('Sign In 005- SIgnIn with invalid Email', async()=>{


    await tenantInput.setValue("invalidTenant")
    await emailInput.setValue("invalidEmail.com")
    await passwordInput.setValue("Password123!")
    await driver.hideKeyboard()
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    await driver.pause(500)
    await tenantInput.clearValue()
    await emailInput.clearValue()
    await passwordInput.clearValue()
    await driver.hideKeyboard();

  })

  it('Sign In 005- SIgnIn with invalid Password', async()=>{


    await tenantInput.setValue("invalidTenant")
    await emailInput.setValue("noman8@yopmail.com")
    await passwordInput.setValue("123@")
    await driver.hideKeyboard()
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    
    await driver.pause(500)
    await tenantInput.clearValue()
    await emailInput.clearValue()
    await passwordInput.clearValue()
    await driver.hideKeyboard();

  })

  it('Sign In 006- SignIn with valid credentials', async()=>{

    await tenantInput.setValue("mgp")
    await emailInput.setValue("noman8@yopmail.com")
    await passwordInput.setValue("Password123!")
    await driver.hideKeyboard()
    await driver.$('//android.view.ViewGroup[@content-desc="LOGIN"]').click()
    await General.selectBuilding()
    await General.clickonAllowNotifications()

  })

  it('SignIn- close and delete the app', async() =>{

    await General.closeandDeleteAppFromDevice()
})
  

})
 