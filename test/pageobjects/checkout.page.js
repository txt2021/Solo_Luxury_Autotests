const page = require('./page');
const mainpage = require('../pageobjects/main.page');
const minicartpage = require('../pageobjects/minicart.page');

const product_item_name = ('[class="product-item-details"] [class$="block"]>[class="product-item-name"]');
const product_quantity = ('[class="product-item-details"] [class$="block"]>[class="details-qty"]>[class="value"]');
const email_address = /*('[class="field required"] [type="email"]')*/('div>li>div>div>form:nth-child(1)>fieldset>div>div>input');
const test_email = 'jebepi9455@ceoshub.com';
const test_invalid_email = 'jebepi9455';
const email_error = ('[id="customer-email-error"]');
const first_name = ('//*/form[2]/div/div[1]/div/input');
const test_first_name = 'Tom';
const last_name = ('//*/form[2]/div/div[2]/div/input');
const test_last_name = 'Hanks';
const strret_address_line_1 = ('//*/form[2]/div/fieldset/div/div[1]/div/input');
const test_strret_address_line_1 = '1234 Main Street';
const city = ('//*/form[2]/div/div[4]/div/input');
const test_city = 'Anchorage';
const alaska_options = ('//*/div/div[6]/div/select/option[3]');
const telephone = ('//*/form[2]/div/div[9]/div/div[1]/input');
const test_telephone = '689334718';
const cash_payment_method = ('label[for="cashondelivery"]');
const free_shipping_method = ('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]');
const place_order_button = ('//*/div[4]/div/div/button');
const payment_validation_error = /*('//aside[8]/div[2]/div')*/('div.modals-wrapper > aside.modal-popup.confirm._show');/////
const login_item = ('[class="far fa-user"]');
const email_for_signin = ('fieldset>div:nth-child(2)>div>input');
const test_email_for_signin = 'ttq59187@cdfaq.com';
const password_for_signin = ('fieldset>div:nth-child(3)>div>input');
const test_password_for_signin = 'AsdFGghjkl1';
const signin_button = ('fieldset>div:nth-child(4)>div:nth-child(1)>button');
const my_account_button = ('[class="user-login-option"] li:nth-child(2)>a');
const my_orders_section = ('[id="account-nav"]>ul>li:nth-child(2)>a');
const order_table = ('[id="my-orders-table"]');

class CheckoutPage {

    async isDisplayedProductItemName(){
        await (expect(page.isdisplayed(product_item_name)));
    }

    async isDisplayedProductQuantity(){
        await (expect(page.isdisplayed(product_quantity)));
    }

    async urlCheckoutChecking(){
        await (expect(page.urlChecking('checkout/')));
    }

    async clickCashPaymentMethod(){
        await page.scrollIntoView(cash_payment_method);
        await page.click(cash_payment_method);
    }

    async clickFreeShippingMethod(){
        await page.scrollIntoView(free_shipping_method);
        await page.click(free_shipping_method);
    }

    async enterEmail(){
        await page.setvalue(email_address,test_email);     
    }

    async enterInvalidEmail(){
        await page.setvalue(email_address,test_invalid_email);     
    }

    async isDisplayedEmailError(){
        await (expect(page.isdisplayed(email_error)));
    }

    async enterFirstName(){
        await page.setvalue(first_name,test_first_name);     
    }

    async enterLastName(){
        await page.setvalue(last_name,test_last_name);     
    }

    async enterStrretAddressLine1(){
        await page.setvalue(strret_address_line_1,test_strret_address_line_1);     
    }

    async enterCity(){
        await page.setvalue(city,test_city);     
    }

    async clickAlaskaOptions(){
        await page.click(alaska_options);
    }

    async enterTelephone(){
        await page.scrollIntoView(telephone);
        await page.setvalue(telephone,test_telephone);     
    }

    async clickPlaceOrderButton(){
        await page.scrollIntoView(place_order_button);
        await page.click(place_order_button);
    }

    async urlCheckoutOrder(){
        await (expect(page.urlChecking('checkout/onepage/success/')));
    }

    async isDisplayedPaymentValidationError(){
        await (expect(page.isdisplayed(payment_validation_error)));
    }

    async urlCatalogProductView(){
        await (expect(page.urlChecking('catalog/product/view/')));
    }

    async clickLoginItem(){
        await page.click(login_item);
    }

    async enterEmailSignIn(){
        await page.setvalue(email_for_signin,test_email_for_signin);     
    }

    async enterPasswordSignIn(){
        await page.setvalue(password_for_signin,test_password_for_signin);     
    }

    async clickSignInButton(){
        await page.click(signin_button);
    }

    async clickMyAccountButton(){
        await page.click(my_account_button);
    }

    async clickMyOrdersSection(){
        await page.click(my_orders_section);
    }

    async isDisplayedOrderTable(){
        await (expect(page.isdisplayed(order_table)));
    }

    async buyNowItemFromMenCategory(){
        await mainpage.clickOpenMenuButton();
        await browser.pause(1000);
        await mainpage.clickMenMenuCategory();
        
        await minicartpage.clickItemIcon();
        await minicartpage.clickBuyNowButton();
    }

    async mandatoryFieldsFill(){
        await this.enterEmail();
        await this.enterFirstName();
        await this.enterLastName();
        await this.enterStrretAddressLine1();
        await this.enterCity();
        await this.clickAlaskaOptions();
        await this.enterTelephone();
        await this.clickCashPaymentMethod();
        await this.clickFreeShippingMethod();
        await this.clickPlaceOrderButton();
    }


}

module.exports = new CheckoutPage();