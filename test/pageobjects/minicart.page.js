const page = require('./page')

const cart_form = ('div[id="ui-id-228"]');
const cart_button = /*('[class*="action showcart"]')*/('[class="action viewcart"]');
const close_select_language_button = ('[id="modal-title-0"]~[data-role="closeBtn"]');
const donate_button = ('div[class="donateBtn"]');
const charity_form = ('div[class="modal-inner-wrap"]>header>h1');
const charity_text = 'CHARITY TEST';
const empty_cart_message = ('[class="cart-empty"]>p');
const continue_shopping_button = ('div[class="cart-empty"] [href="https://www.sololuxury.com/ua-en/"]');
const item_icon = ('li[class$="nth-child-6np1 nth-child-7n"]');
const add_to_cart_button = ('[id="product-addtocart-button"] i[class$="shopping-cart"]');
const view_cart_button = ('[class*="btn-viewcart"]');
const shopping_cart_table = ('id="shopping-cart-table"');
const cart_quantity_plus_button = ('[class*="ajax-cart-qty-plus"]');
const cart_quantity_value = ('[id="cart-2610-qty"]');
const popup_continue_shopping_button = ('[class="btn-continue"]');
const recommendation_item = ('div:nth-child(3) div:nth-child(36)');
const option_select = ('[id="attribute167"]');
const size_42_option = ('[value="7625"]');
const accept_button = ('[class$="action-accept"]');
const item_on_cart = ('//tbody[1]/tr/td[1]/a');

let count = 0;
let quantity = 0;
let temp;
let cart_item = ('//*[@id="shopping-cart-table"]/tbody[{count}]');
let remove_item_button = ('//*[@id="shopping-cart-table"]/tbody[{count}]/tr/td[5]/div/a[2]')

class MinicartPage {

    async isDisplayedMenuForm(){
        await (expect(page.isdisplayed(cart_form)));
    }

    async clickCloseSelectLanguageButton(){
        await page.click(close_select_language_button);        
    }

    async clickDonateButton(){
        await page.click(donate_button);        
    }

    async isCharityHaveText(){
        await (expect(page.checkElement(charity_form,charity_text)));
    }

    async clickCartButton(){
        await page.scrollIntoView(cart_button);
        await page.click(cart_button);        
    }

    async urlCartChecking(){
        await (expect(page.urlChecking('checkout/cart/')));
    }

    async isEmptyMessageVisible(){
        await (expect(page.isdisplayed(empty_cart_message)));
    }

    async isContinueButtonClickable(){
        await (expect(page.isclickable(continue_shopping_button)));
    }

    async clickItemIcon(){
        await page.scrollIntoView(item_icon);
        await page.click(item_icon);        
    }

    async clickAddToCartButton(){
        await page.scrollIntoView(add_to_cart_button);
        await page.click(add_to_cart_button); 
        quantity++; 
        count++;      
    }

    async clickViewCartButton(){
        await page.click(view_cart_button);        
    }

    async isDisplayedShoppingCartTable(){
        await (expect(page.isdisplayed(shopping_cart_table)));
    }

    async haveCartQuantityValueAttribute(){
        await (expect(page.haveattribute(cart_quantity_value, 'value', quantity)));
    }

    async clickCartQuantityPlusButton(){
        await page.click(cart_quantity_plus_button); 
        quantity++;       
    }

    async showQuantity(){
        console.log(quantity);
    }

    async clickPopupContinueShoppingButton(){
        await page.scrollIntoView(popup_continue_shopping_button);
        await page.click(popup_continue_shopping_button);        
    }

    async clickRecommendationItemIcon(){
        await page.scrollIntoView(recommendation_item);
        await page.click(recommendation_item);        
    }

    async clickOptionSelect(){
        await page.click(option_select);
    }

    async clickSize42OptionSelect(){
        await page.click(size_42_option);
    }

    async showCartItem(){
        console.log("qwe" + cart_item.replace('{count}', count));
    }

    async isDisplayedLastCartItem(){
        await (expect(page.isdisplayed(cart_item.replace('{count}', count))));
    }

    async clickRemoveItemButton(){
        for(let i = 1; i <= count; i++){
            await page.click(remove_item_button.replace('{count}', 1));
            this.clickAcceptButton();
        }
    }

    async clickAcceptButton(){
        await page.click(accept_button);
    }

    async clickItemOnCart(){
        await page.click(item_on_cart);
    }

    async ItemUrlChecking(){
        await (expect(page.urlChecking('t-shirts-alexander-mcqueen-graffiti-logo-t-shirt')));
    }
}

module.exports = new MinicartPage();