const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const minicartpage = require('../pageobjects/minicart.page'); 


beforeEach(async () => {
  await browser.url('/');
});

describe('Tests in Login Page', () => {        
    it('Check the functionality of the close shopping cart form button', async() => { 
        await minicartpage.clickCloseSelectLanguageButton();
        await signuppage.clickCoockieButton(); 
        
        await mainpage.clickShowcartIcon();
        await mainpage.clickCloseMinicartButton();

        await minicartpage.isDisplayedMenuForm();
    });

    it('Check "I want to donate" button functionality', async() => {
        await mainpage.clickShowcartIcon();
        await minicartpage.clickDonateButton();
        
        await minicartpage.isCharityHaveText();
    });

    it('Check the "View Cart" button functionality', async() => {
        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickPopupContinueShoppingButton();
        await browser.pause(1000);
        await mainpage.clickShowcartIcon();
        await browser.pause(1000);
        await minicartpage.clickCartButton();
        await minicartpage.urlCartChecking();
    });

    it('Check the empty cart functionality', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();

        await minicartpage.clickRemoveItemButton();

        await minicartpage.isEmptyMessageVisible();
        await minicartpage.isContinueButtonClickable();
    });

    it('Check the functionality of adding one item to the cart', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();
        
        await minicartpage.isDisplayedShoppingCartTable();
    });

    it('Check the increase the quantity of the item from the cart functionality', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();

        await minicartpage.clickCartQuantityPlusButton();
        await minicartpage.haveCartQuantityValueAttribute();
    });

    it('Check the adding of multiple items of different types', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();

        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickPopupContinueShoppingButton();
        
        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickWomenMenuCategory();

        await minicartpage.clickItemIcon();
        await minicartpage.clickOptionSelect();
        await minicartpage.clickSize42OptionSelect();
        
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();
        await browser.pause(1000);
        
        await minicartpage.isDisplayedLastCartItem();
    });

    it('Check the removing one item from the cart functionality', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();

        await minicartpage.clickRemoveItemButton();
    
        await minicartpage.isEmptyMessageVisible();
    });

    it('Check the removing all items from the cart functionality', async() => {        
        await mainpage.clickOpenMenuButton();
        await mainpage.clickWomenMenuCategory();

        await minicartpage.clickItemIcon();
        await minicartpage.clickOptionSelect();
        await minicartpage.clickSize42OptionSelect();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickPopupContinueShoppingButton();

        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickMenMenuCategory();

        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();
        
        await minicartpage.clickRemoveItemButton();
        await minicartpage.isEmptyMessageVisible();
    });

    it('Check that ability to redirect user form the cart to the item page', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickWomenMenuCategory();

        await minicartpage.clickItemIcon();
        await minicartpage.clickOptionSelect();
        await minicartpage.clickSize42OptionSelect();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();

        await minicartpage.itemGetAttribute();
        await minicartpage.clickItemOnCart();
        await minicartpage.ItemUrlChecking();
    });

    it('Check that added item is save after the browser/app was closed', async() => {
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();
        await browser.pause(1000);

        await browser.reloadSession();
        await browser.url('/');

        await minicartpage.clickCloseSelectLanguageButton();
        await signuppage.clickCoockieButton();

        await mainpage.clickShowcartIcon();
        await minicartpage.clickCartButton();
        await browser.pause(1000);    
        await minicartpage.isDisplayedShoppingCartTable();
    });
})

