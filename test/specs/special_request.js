const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const specialRequestpage = require('../pageobjects/special_request.page'); 

before(async () => {
    await browser.url('/'); 
    //await mainpage.clickLanguageButton();
    await signuppage.clickCoockieButton();
});

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Special Request Functionality', () => {        
    it('Check the successful special request creation', async() => {  
        await mainpage.clickSpecialRequestButton();
        await specialRequestpage.enterUserName();
        await specialRequestpage.enterUserLastname();
        await specialRequestpage.enterUserEmail();
        await specialRequestpage.enterPhoneNember();
        await specialRequestpage.enterBrand();
        await specialRequestpage.enterStyle();
        await specialRequestpage.enterKeyword();
        await specialRequestpage.enterRemarks();
        await specialRequestpage.clickSubmitButton();

        await specialRequestpage.urlSuccessRequestChecking();
        await specialRequestpage.isSuccessRequestMessageVisible();
        await specialRequestpage.isSuccessRequestMessageCorrect();
      
    });

    it('Check the successful special request creation with empty optional fields', async() => {  
        await mainpage.clickSpecialRequestButton();
        await specialRequestpage.enterUserName();
        await specialRequestpage.enterUserLastname();
        await specialRequestpage.enterUserEmail();
        await specialRequestpage.clickSubmitButton();

        await specialRequestpage.urlSuccessRequestChecking();
        await specialRequestpage.isSuccessRequestMessageVisible();
        await specialRequestpage.isSuccessRequestMessageCorrect();
      
    });

    it('Check the appropriate labels appears after clicking submit button with empty required fields', async() => {  
        await mainpage.clickSpecialRequestButton();
        await specialRequestpage.clickSubmitButton();

        await specialRequestpage.isRequiredFieldsErrorsVisibleAndCorrect();
      
    });

    it('Check the validation on the email field', async() => {  
        await mainpage.clickSpecialRequestButton();
        await specialRequestpage.enterUserName();
        await specialRequestpage.enterUserLastname();
        await specialRequestpage.enterInvalidEmail();
        await specialRequestpage.clickSubmitButton();

        await specialRequestpage.isErrorEmailMessageVisible();
        await specialRequestpage.isErrorEmailMessageCorrect();
      
    });
   
})

