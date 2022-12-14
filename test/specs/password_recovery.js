const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const loginpage = require('../pageobjects/login.page'); 
const recoverypage = require('../pageobjects/recovery.page'); 

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests in Password Recovery Page', () => {        
    it('Check the recovery confirmation with valid email', async() => {   
      await signuppage.clickCoockieButton(); 
      await mainpage.clickpersonalAccountButton();
      await loginpage.clickcForgotPasswordButton();

      await recoverypage.enterEmail();
      await recoverypage.clickResetMyPasswordButton();

      await recoverypage.isSuccessRecoveryMessageVisible();
      await recoverypage.urlRecoveryChecking();
    });

    it('Check the user failed recovery confirmation with invalid email', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickcForgotPasswordButton();
  
        await recoverypage.enterInvalidEmail();
        await recoverypage.clickResetMyPasswordButton();
  
        await recoverypage.isErrorEmailMessageVisible();
        await recoverypage.isErrorEmailMessageCorrect();
      });  

    it('Check the "Back to login" element functionality', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickcForgotPasswordButton();
  
        await recoverypage.clickBackToLoginButton();
  
        await recoverypage.urlLoginChecking();
    }); 
    
    it('Check the validation error occurs after clicking on "Reset My Password" with empty email fields ', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickcForgotPasswordButton();
  
        await recoverypage.clickResetMyPasswordButton();
  
        await recoverypage.isErrorEmailMessageVisible();
        await recoverypage.isEmptyFieldMessageCorrect();
    }); 

})

