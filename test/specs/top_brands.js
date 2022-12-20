const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 

before(async () => {
    await browser.url('/');
    await mainpage.clickLanguageButton(); 
    await signuppage.clickCoockieButton();
});

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Top Brands on the main page', () => {        
    it('Check the functionality of brand link on the main page', async() => {  
        
        await mainpage.isBrandLinkClickable();
        
        await mainpage.clickBrandLink();
    });

    it('Check the functionality of "Show All" brand link on the main page', async() => {  
        await mainpage.clickShowAllBrandsButton();
        
        await mainpage.urlAllBrandsChecking();
    });
    

})

