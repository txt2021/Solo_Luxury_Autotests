const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page');  
const localizationpage = require('../pageobjects/localization.page'); 

before(async () => {
    await browser.url('/'); 
    await mainpage.clickLanguageButton();
    await signuppage.clickCoockieButton();
       
  });

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Localization functionalities', () => {        
    it('Check the ability to change the country', async() => {  
        await localizationpage.clickCountryList();
        await localizationpage.clickUkraineButton();

        await localizationpage.urlUaEnChecking();   
  
    });

    xit('Check the ability to choose different availabe language for particular country', async() => {  
        await localizationpage.clickCountryList();
        await localizationpage.clickUkraineButton();
        await localizationpage.clickEnglishButton();
        await localizationpage.clickLanguageList();
        
        await localizationpage.clickAnotherLanguageButton();

        await localizationpage.urlUA_ruChecking();
  
    });

    xit('Check the ability to change currency for particular country', async() => {  
        await localizationpage.clickCountryList();
        await localizationpage.clickUkraineButton();
        await localizationpage.clickEnglishButton();
        await localizationpage.clickCurrencyList(); 
        await localizationpage.clickAnotherCurrencyButton(); 
        
        await localizationpage.isCurrencyeCorrect();
  
    });

    it('Check the functionality to search country', async() => {  
        await localizationpage.clickCountryList();
        await localizationpage.enterSearchKeyword();

        await localizationpage.isCountryVisible();
  
    });

    it('Check the search country functionality with invalid data', async() => {  
        await localizationpage.clickCountryList();
        await localizationpage.enterInvalidKeyword();

        await localizationpage.isErrorMessageVisible();
        await localizationpage.isErrorMessageCorrect();
  
    });

       
})

