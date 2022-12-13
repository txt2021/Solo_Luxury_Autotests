
const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const loginpage = require('../pageobjects/login.page'); 

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests in Sign Up Page', () => {        
    it('Check the user successful registration with valid credentials', async() => {   
      await mainpage.clickpersonalAccountButton();
      await loginpage.clickcreateAccountButton();

      await signuppage.enterFirstName();
      await signuppage.enterLastName();
      await signuppage.enterEmail();
      await signuppage.enterPassword();
      await signuppage.enterConfirmationPassword();
      await signuppage.enterDateOfBirth();
      await signuppage.enterDateOfMarrige();
      await signuppage.scrollToSubmitButton();
      await signuppage.clickCoockieButton();
      await signuppage.clickcSubmitButton();
      await signuppage.urlUserChecking();   
      
      await mainpage.clickpersonalAccountButton();
      await mainpage.clickLogoutButton(); 
    });

    it('Check the successful registration with empty optional fields', async() => {   
      await mainpage.clickpersonalAccountButton();
      await loginpage.clickcreateAccountButton();

      await signuppage.enterFirstName();
      await signuppage.enterLastName();
      await signuppage.enterEmail();
      await signuppage.enterPassword();
      await signuppage.enterConfirmationPassword();
      await signuppage.scrollToSubmitButton();
      await signuppage.clickcSubmitButton();
      await signuppage.urlUserChecking();   
      
      await mainpage.clickpersonalAccountButton();
      await mainpage.clickLogoutButton(); 
    }); 

    it('Check the user failed registration with already existing email', async() => {   
      await mainpage.clickpersonalAccountButton();
      await loginpage.clickcreateAccountButton();

      await signuppage.enterFirstName();
      await signuppage.enterLastName();
      await signuppage.enterInvalidEmail();
      await signuppage.enterPassword();
      await signuppage.enterConfirmationPassword();
      await signuppage.enterDateOfBirth();
      await signuppage.enterDateOfMarrige();
      await signuppage.scrollToSubmitButton();
      await signuppage.clickcSubmitButton();
      await signuppage.isErrorEmailMessageVisible();
      await signuppage.isErrorEmailMessageCorrect();   

    });
    
    it('Check the validation error occurs after submission form with empty required fields', async() => {   
      await mainpage.clickpersonalAccountButton();
      await loginpage.clickcreateAccountButton();

      await signuppage.scrollToSubmitButton();
      //await signuppage.clickCoockieButton();
      await signuppage.clickcSubmitButton();
      await signuppage.isRequiredFieldsErrorsVisibleAndCorrect();

    }) 

})

