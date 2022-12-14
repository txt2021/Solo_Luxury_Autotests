const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const searchpage = require('../pageobjects/search.page'); 
const search_resultpage = require('../pageobjects/search_results.page'); 

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Search Results functionality', () => {        
    it('Check the functioanality of the founded items cards', async() => { 
      await signuppage.clickCoockieButton(); 
      await mainpage.clickSearchIcon();      
      await mainpage.enterSearchKeyword(); 
      await browser.keys("\uE007");
      await search_resultpage.clickcItemCard();

      await search_resultpage.isItemPageVisible();
      
    });

    it('Check the functioanality of the Brands Results list', async() => { 
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await search_resultpage.clickcOnBrand();
  
        await search_resultpage.urlBrandChecking();
        
    });

    it('Check the category filters functionality', async() => { 
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        //await search_resultpage.clickcCategoryButton();
        await search_resultpage.clickcMenCategoryButton();

        await search_resultpage.isChosenCategoryVisible();
        await search_resultpage.isChosenCategoryCorrect();
        
    });

    it('Check the clear all filters functionality', async() => { 
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await search_resultpage.clickcMenCategoryButton();
        await search_resultpage.clickClearAllButton();

        await search_resultpage.isFiltersCleared();
        
    });

    it('Check the sorting by product name functionality', async() => { 
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await search_resultpage.clickNameSortButton();

        await search_resultpage.isSortByNameVisible();
        
    });

    it('Check the clear category filters functionality', async() => { 
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await search_resultpage.clickcMenCategoryButton();
        await search_resultpage.clickClearCategoryButton();

        await search_resultpage.isFiltersCleared();
        
    });

    it('Check the "Create Ticket" button functionality on the result page after search with invalid data', async() => {       
        await mainpage.clickSearchIcon();      
        await mainpage.enterInvalidSearchKeyword();        
        await browser.keys("\uE007");  
        await search_resultpage.clickCreateTicketButton();

        await search_resultpage.isCreateTicketFormVisible();
        
    });

    it('Check the "Continue Shopping" button functionality on the result page after search with invalid data', async() => {       
        await mainpage.clickSearchIcon();      
        await mainpage.enterInvalidSearchKeyword();        
        await browser.keys("\uE007");  
        await search_resultpage.clickContinueShoppingButton();

        await search_resultpage.urlShoppingChecking();
        
    });

})

