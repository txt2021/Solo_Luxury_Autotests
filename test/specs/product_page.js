const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page');  
const productpage = require('../pageobjects/product_page.page'); 

before(async () => {
    await browser.url('/'); 
    await mainpage.clickLanguageButton();
    await signuppage.clickCoockieButton();
       
  });

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Product Page', () => {        
    it('Check the redirecting to the particular product page', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await productpage.clickcItemCard();        
        
        await productpage.urlItemChecking();  
    });  

    it('Check the visibility of product image and name', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await productpage.clickcItemCard();        
        
        await productpage.isItemImageVisible();
        await productpage.isItemNameVisible();  
    });  

    it('Check the ability to choose the different option of the product (size,color,etc.)', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await productpage.clickcItemCard();        
        await productpage.clickcOptionsMenu();
        await productpage.clickcTheFirstOption();

        await productpage.isChosenOptionVisible();
    });  

    it('Check the ability to add product to the shopping cart', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await productpage.clickcItemCard();  
        await productpage.clickcOptionsMenu();
        await productpage.clickcTheFirstOption();
        await productpage.clickAddToCartButton(); 
        await productpage.clickViewCartButton();

        await productpage.isItemInTheCartVisible();
        await productpage.urlCartChecking();

    });

    it('Check the ability to add product to the wishlist', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await productpage.clickcItemCard();  
        await productpage.clickcOptionsMenu();
        await productpage.clickcTheFirstOption();
        await productpage.clickAddToWishlistButton(); 
        await productpage.clickWishlistButton();

        await productpage.isItemInTheWishlistVisible();
        await productpage.urlWishListChecking();

    });

    it('Check the ability to add product to the checkout', async() => {  
        await mainpage.clickSearchIcon();      
        await mainpage.enterSearchKeyword(); 
        await browser.keys("\uE007");
        await productpage.clickcItemCard();  
        await productpage.clickcOptionsMenu();
        await productpage.clickcTheFirstOption();
        await productpage.clickAddToCheckoutButton();

        await productpage.urlCheckoutChecking();

    });

       
})

