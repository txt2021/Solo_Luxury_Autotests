const signuppage = require('../pageobjects/signup.page');
const mainpage = require('../pageobjects/main.page'); 
const menupage = require('../pageobjects/menu.page');  

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests for Menu functionality', () => {
    it('Check the functionality of the menu button', async() =>{
        await mainpage.clickOpenMenuButton();

        await menupage.isDisplayedMenuForm();
    });

    it('Check the functionality of the close menu button', async() =>{
        await signuppage.clickCoockieButton();
        await mainpage.clickOpenMenuButton();
        await mainpage.clickCloseMenuButton();

        await menupage.HaveAttributeMenuForm();
    });

    it('Check the functionality of the "Women" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickWomenMenuCategory();

        await menupage.urlWomenChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Men" category ', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickMenMenuCategory();

        await menupage.urlMenChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Kids" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await browser.pause(20000);
        await mainpage.clickKidsMenuCategory();

        await menupage.urlKidsChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Sale" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickSaleMenuCategory();

        await menupage.urlSaleChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Heels" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickHeelsMenuCategory();

        await menupage.urlHeelsChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Preowned" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickPreownedMenuCategory();

        await menupage.urlPreownedChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Tote Bags" category and "Bags" subcategory', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.hoverToToteBagsMenuCategory();
        await mainpage.clickToteBagsSubcategory();

        await menupage.urlToteBagsChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Satchel" category and "Bags" subcategory', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.hoverToSatchelMenuCategory();
        await mainpage.clickAllBugsSubcategory();

        await menupage.urlSatchelChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Travel Bags" category and "Bags" subcategory', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.hoverToTravelBagMenuCategory();
        await mainpage.clickTravelBugSubcategory();

        await menupage.urlTravelBagChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });

    it('Check the functionality of the "Whats New" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickWhatsNewMenuCategory();

        await menupage.urlWhatsNewChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });
    
    it('Check the functionality of the "Brands" category', async() =>{
        await mainpage.clickOpenMenuButton();
        await mainpage.clickBrandsMenuCategory();

        await menupage.urlBrandsChecking();
        await menupage.isExistingFilterColumnOrMessage();
    });
})