const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 

before(async () => {
    await browser.url('/'); 
    //await mainpage.clickLanguageButton();
    await signuppage.clickCoockieButton();
});

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for functionalities in the main page footer', () => {        
    it('Check the user successful subscription submission with valid data', async() => {  
        await mainpage.enterNewsletterEmail();
        await mainpage.clickSubscribeButton();

        await mainpage.isNewsletterSuccessMessageVisible();
        await mainpage.isNewsletterSuccessMessageCorrect();        
    });

    it('Check the validation on the email field', async() => {  
        await mainpage.enterInvalidNewsletterEmail();
        await mainpage.clickSubscribeButton();

        await mainpage.isSubscribeButtonClickable();    
    });

    it('Check the user failed subscription with already taken email', async() => {  
        await mainpage.enterTakenNewsletterEmail();
        await mainpage.clickSubscribeButton();

        await mainpage.isNewsletterErrorMessageVisible();
        await mainpage.isNewsletterErrorMessageCorrect();   
    });

    it('Check the "Subscribe" button functionality with the empty field', async() => {  
        await mainpage.clickSubscribeButton();

        await mainpage.isSubscribeButtonClickable();    
    });

    it('Check the functionality of the "About Us" category ', async() => {  
        await mainpage.hoverToAboutUs();
        await mainpage.clickAppButton();
        
        await mainpage.urlAppChecking();
    });

    it('Check the functionality of the "Contact" category ', async() => {  
        await mainpage.hoverToContact();
        await mainpage.clickShippingButton();
        
        await mainpage.urlShippingChecking();
    });

    it('Check the functionality of the "Social" category ', async() => {  
        await mainpage.hoverToSocial();
        await mainpage.clickHopeButton();
        
        await mainpage.urlHopeChecking();
    });

    it('Check the functionality of the "Company" category ', async() => {  
        await mainpage.hoverToCompany();
        await mainpage.clickTestimonialsButton();
        
        await mainpage.urlTestimonialsChecking();
    });
    

})

