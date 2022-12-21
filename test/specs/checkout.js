const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const minicartpage = require('../pageobjects/minicart.page');
const checkoutpage = require('../pageobjects/checkout.page');  


beforeEach(async () => {
    await browser.url('/');
});

afterEach(async () => {
    await browser.reloadSession();
});

describe('Checkout Tests', () => {        
    it('Check the product information on checkout page', async() => { 
        await minicartpage.clickCloseSelectLanguageButton();
        await signuppage.clickCoockieButton();
        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickBuyNowButton();
        
        await checkoutpage.urlCheckoutChecking();
        await checkoutpage.isDisplayedProductItemName();
        await checkoutpage.isDisplayedProductQuantity();
    });

    it('Check the successful checkout with all mandatory fields filled', async() => {
        await checkoutpage.buyNowItemFromMenCategory();
        await browser.pause(1000);
        await checkoutpage.enterEmail();
        await checkoutpage.enterFirstName();
        await checkoutpage.enterLastName();
        await checkoutpage.enterStrretAddressLine1();
        await checkoutpage.enterCity();
        await checkoutpage.clickAlaskaOptions();
        await checkoutpage.enterTelephone();
        await checkoutpage.clickCashPaymentMethod();
        await checkoutpage.clickFreeShippingMethod();
        await checkoutpage.clickPlaceOrderButton();

        await checkoutpage.urlCheckoutOrder();
    });

    it('Check the failed checkout with invalid data in required fields', async() => {
        await checkoutpage.buyNowItemFromMenCategory();
        
        await checkoutpage.enterInvalidEmail();
        await checkoutpage.clickCashPaymentMethod();
        await checkoutpage.clickFreeShippingMethod();
        await checkoutpage.clickPlaceOrderButton();
        await checkoutpage.isDisplayedEmailError();
    });

    it('Check the ability to move back to the shopping cart', async() => {
        await checkoutpage.buyNowItemFromMenCategory();

        await browser.pause(5000);
        await mainpage.clickShowcartIcon();
        await minicartpage.clickCartButton();

        await minicartpage.urlCartChecking();
        await minicartpage.isDisplayedShoppingCartTable();
    });

    it('Check the failed checkout with empty required fields', async() => {
        await checkoutpage.buyNowItemFromMenCategory();
        await browser.pause(3000);
        await checkoutpage.clickPlaceOrderButton();

        await checkoutpage.isDisplayedPaymentValidationError();
    });

    it('Check the cancel button is available for checkout', async() => {
        await checkoutpage.buyNowItemFromMenCategory();

        await minicartpage.urlCartChecking();
        await browser.back();
        await checkoutpage.urlCatalogProductView();
    });

    it('Check the correctness of the total price on checkout page', async() => {
        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickMenMenuCategory();
        await minicartpage.clickItemIcon();
        await minicartpage.clickAddToCartButton();
        await minicartpage.clickViewCartButton();

        await minicartpage.clickCartQuantityPlusButton();

        await minicartpage.checkSubtotal();
        await browser.pause(1000);
        await minicartpage.clickGoCheckoutButton();
        await checkoutpage.clickFreeShippingMethod();
        await browser.pause(1000);
        await minicartpage.checkOrdertotal();
        await minicartpage.checkOrdertotalOnCheckout();
        await minicartpage.Checking();
    });

    it('Check the successsful order creation', async() => {
        await checkoutpage.buyNowItemFromMenCategory();

        await checkoutpage.mandatoryFieldsFill();

        await checkoutpage.urlCheckoutOrder();
    });

    it('Check the order number on the my orders page', async() => {
        await checkoutpage.clickLoginItem();
        await checkoutpage.enterEmailSignIn();
        await checkoutpage.enterPasswordSignIn();
        await checkoutpage.clickSignInButton();

        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickBuyNowButton();

        await checkoutpage.clickCashPaymentMethod();
        await checkoutpage.clickFreeShippingMethod();
        await checkoutpage.clickPlaceOrderButton();
        await browser.pause(5000);
        await checkoutpage.clickLoginItem();
        await checkoutpage.clickMyAccountButton();
        await checkoutpage.clickMyOrdersSection();
        await checkoutpage.isDisplayedOrderTable();
    });
})

