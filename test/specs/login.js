const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const loginpage = require('../pageobjects/login.page'); 



beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests in Login Page', () => {        
    it('Check the user successful sign in with valid credentials', async() => {   
      await mainpage.clickpersonalAccountButton();

      await loginpage.enterEmail();
      await loginpage.enterPassword();
      await loginpage.clickcSubmitButton();
      await loginpage.urlAccountChecking();
      
      await mainpage.clickpersonalAccountButton();
      await mainpage.clickLogoutButton(); 
    });

    it('Check the user failed authorization with invalid credentials', async() => {   
        await mainpage.clickpersonalAccountButton();
  
        await loginpage.enterInvalidEmail();
        await loginpage.enterInvalidPassword();
        await loginpage.clickcSubmitButton();

        await loginpage.isErrorEmailMessageVisible();
        await loginpage.isErrorEmailMessageCorrect();
        
    });

    it('Check the validation error occurs after sign in button clicked with empty required fields ', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickcSubmitButton();

        await loginpage.isErrorEmailMessageVisible();
        
    });

    it('Check the forgot "Forgot Your Password" functionality', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickcForgotPasswordButton();

        await loginpage.urlForgorPassChecking();
        
    });

    it('Check the ability to login with Facebook account', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickFacebookButton();

        await loginpage.isMediaFormDisplayed();
        
    });

    it('Check the ability to login with Google account', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickGoogleButton();

        await loginpage.isMediaFormDisplayed();
        
    });

    it('Check the ability to login with Twitter account', async() => {   
        await mainpage.clickpersonalAccountButton();
        await loginpage.clickTwitterButton();

        await loginpage.isMediaFormDisplayed();
        
    });

  
    

})

