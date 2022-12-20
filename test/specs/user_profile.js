const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const loginpage = require('../pageobjects/login.page'); 
const userprofilepage = require('../pageobjects/user_profile.page'); 



beforeEach(async () => {
  await browser.url('/');   
});

describe('Tests for User Profile', () => {        
    it('Check the ability to update profile name', async() => {  
        await mainpage.clickpersonalAccountButton();
        await loginpage.enterEmail();
        await loginpage.enterPassword();
        await loginpage.clickcSubmitButton();  
        await mainpage.clickpersonalAccountButton();
        await mainpage.clickMyAccountButton();
        await userprofilepage.clickEditButton();
        await userprofilepage.enterFirstName();
        await userprofilepage.enterLastName();
        await userprofilepage.clickSaveButton();

        await userprofilepage.isUserInfoCorrect();        
    });

    it('Check the ability to update profile name', async() => {  
        await mainpage.clickpersonalAccountButton();
        await mainpage.clickMyAccountButton();     
        await userprofilepage.clickEditButton();
        await userprofilepage.deleteFirstName();
        await userprofilepage.deleteLastName();
        await userprofilepage.clickSaveButton(); 
        
        await userprofilepage.isRequiredFieldsErrorsVisibleAndCorrect();
    });

    it('Check the functionality of personal account sections', async() => {  
        await mainpage.clickpersonalAccountButton();
        await mainpage.clickMyAccountButton();       
              
        await userprofilepage.clickandCheckAccountButton();
        await userprofilepage.clickandCheckOrderButton();
        await userprofilepage.clickandCheckWishlistButton();
        await userprofilepage.clickandCheckAddressButton();
        await userprofilepage.clickandCheckCreditsButton();
        await userprofilepage.clickandCheckReturnButton();
        await userprofilepage.clickandCheckCouponButton();
        await userprofilepage.clickandCheckTicketsButton();
        await userprofilepage.clickandCheckSocialButton();

    });

    it('Check the functionality of personal account sections', async() => {  
        await mainpage.clickpersonalAccountButton();
        await mainpage.clickLogoutButton();

        await userprofilepage.urlLogoutChecking();
    });

    

})

