const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page');  
const loginpage = require('../pageobjects/login.page');  
const wishlistpage = require('../pageobjects/wishlist.page'); 

before(async () => {
    await browser.url('/'); 
    await mainpage.clickLanguageButton();
    await signuppage.clickCoockieButton();
       
  });

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Wishlist functionalities', () => {        
    it('Check the ability to add item to the wishlist', async() => {  
        await mainpage.clickpersonalAccountButton();
        await loginpage.enterEmail();
        await loginpage.enterPassword();
        await loginpage.clickcSubmitButton(); 
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword();        
        await browser.keys("\uE007"); 
        await wishlistpage.clickWishListIcon();

        await wishlistpage.isCounterVisible();
  
    });

    it('Check the ability to remove item from the wishlist', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword();        
        await browser.keys("\uE007"); 
        await wishlistpage.clickItemCard();
        await wishlistpage.clickAddToWishListButton();
        await wishlistpage.clickWishListButton();
        await wishlistpage.clickDeleteItemButton();
        

        await wishlistpage.isEmptyWishlistVisible();

  
    });

    it('Check the add one item to the shopping cart functionality', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword();        
        await browser.keys("\uE007"); 
        await wishlistpage.clickSecondItemCard();
        await wishlistpage.clickOptionsDropdown();
        await wishlistpage.clickFirstOptionButton();
        await wishlistpage.clickAddToWishListButton();
        await wishlistpage.clickWishListButton();
        await wishlistpage.clickAddToCartButton();

    });

    it('Check the add all items to the shopping cart functionality', async() => {  

        await wishlistpage.clickWishListButton();
        await wishlistpage.clickAddAllToCartButton();
        await wishlistpage.clickCartButton();

        await wishlistpage.isCartItemsVisible();


    });

   
})

