const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const minicart = require('../pageobjects/minicart.page'); 



beforeEach(async () => {
  await browser.url('/'); 
});

xdescribe('Tests in Login Page', () => {        
    it('Check the functionality of the close shopping cart form button', async() => {   
        await minicart.clickCloseSelectLanguageButton();
        await signuppage.clickCoockieButton(); 
        await mainpage.clickShowcartIcon();

        await mainpage.clickCloseMinicartButton();

        await minicart.isDisplayedMenuForm();
    });

    it('Check "I want to donate" button functionality', async() => {
        //await signuppage.clickCoockieButton(); 
        await mainpage.clickShowcartIcon();

        await mainpage.clickCloseMinicartButton();

        await minicart.isDisplayedMenuForm1();
    });

    xit('Check the "View Cart" button functionality', async() => {});

    xit('Check the empty cart functionality', async() => {});

    xit('Check the functionality of adding one item to the cart', async() => {});

    xit('Check the increase the quantity of the item from the cart functionality', async() => {});

    xit('Check the removing one item from the cart functionality', async() => {});

    xit('Check the removing all items from the cart functionality', async() => {});
    

})

