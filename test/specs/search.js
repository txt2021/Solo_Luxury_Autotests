const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const searchpage = require('../pageobjects/search.page'); 

before(async () => {
    await browser.url('/'); 
    await signuppage.clickCoockieButton();
});

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Search functionality', () => {        
    it('Check the search button functionality on the search field', async() => { 
      await mainpage.clickSearchIcon();      
      await mainpage.enterSearchKeyword();     
      
      await mainpage.clickSearchButton();
      await searchpage.urlSearchChecking();
      
    });

    it('Check the Enter button functionality on the search field', async() => {       
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword();        
        await browser.keys("\uE007");
  
        await searchpage.urlSearchChecking();
        
    });

    it('Check the search button functionality is disable on the empty search field', async() => {       
        await mainpage.clickSearchIcon();       
        
        await mainpage.clickSearchButton();
        await searchpage.urlEmptySearchChecking();
        
    });

    it('Check the Enter button functionality on the search field', async() => {       
        await mainpage.clickSearchIcon();       
        
        await browser.keys("\uE007");
        await searchpage.urlEmptySearchChecking();
        
    });

    it('Check the search functionality with invalid data', async() => {       
        await mainpage.clickSearchIcon();      
        await mainpage.enterInvalidSearchKeyword();        
        await browser.keys("\uE007");
  
        await searchpage.isErrorSearcgMessageVisible();
        await searchpage.isErrorSearchMessageCorrect();
        
    });
})

