import General from "../Page Object/general"


let currentPassword,newPassword,confirmPassword

describe('Profile Cases', () => {

    it('Profile 001- Go to Home', async() => 
    {
        await General.gotoHome()
        await General.login()
        await General.selectBuilding()
        await General.clickonAllowNotifications()
        

    })

      beforeEach(async () => {
        
        const inputs = await General.getInputFields();
        currentPassword = inputs.tenantInput;
        newPassword = inputs.emailInput;
        confirmPassword = inputs.passwordInput;
       
    });

    it('Profile 002- Go to Profile', async() =>{

        await driver.$('//android.widget.TextView[@text=""]').click()
        await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])").click();
        await driver.$('//android.widget.TextView[@text="UPDATE PASSWORD"]').click()

    })

    it('Profile 003- Try on all blank fields', async() =>{
        await driver.$('//android.view.ViewGroup[@content-desc="UPDATE PASSWORD"]').click()
    })

    
    it('Profie 004- Skipping currentPassword', async() =>{

        await newPassword.setValue('qwertY12#')
        await confirmPassword.setValue('qwertY12#')
        await driver.$('//android.view.ViewGroup[@content-desc="UPDATE PASSWORD"]').click()

    })

    it('Profie 005- Skipping new Password', async() =>{

        await currentPassword.setValue('Password123!')
        await newPassword.clearValue()
        await confirmPassword.setValue('qwertY12#')
        await driver.$('//android.view.ViewGroup[@content-desc="UPDATE PASSWORD"]').click()

    })

    it('Profie 006- Skipping Confirm Password', async() =>{

        await currentPassword.setValue('Password123!')
        await newPassword.setValue('qwertY12#')
        await confirmPassword.clearValue()
        await driver.$('//android.view.ViewGroup[@content-desc="UPDATE PASSWORD"]').click()

    })

    it('Profie 006- Try with wrong current Password', async() =>{

        await currentPassword.setValue('wrongPassword')
        await newPassword.setValue('qwertY12#')
        await confirmPassword.setValue('qwertY12#')
        await driver.$('//android.view.ViewGroup[@content-desc="UPDATE PASSWORD"]').click()

    })

    it('Profie 006- Updating the Password', async() =>{

        await currentPassword.setValue('Password123!')
        await newPassword.setValue('Password123!')
        await confirmPassword.setValue('Password123!')
        await driver.$('//android.view.ViewGroup[@content-desc="UPDATE PASSWORD"]').click()
        
    })

    it('Profile- close and delete the app', async() =>{
    
        await General.closeandDeleteAppFromDevice()
    })
})