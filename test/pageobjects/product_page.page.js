const page = require('./page')

const result_item_card = ('ol[class="filterproducts products list items product-items "]>li:nth-child(1)');
const item_image = ('[class="fotorama__stage__shaft fotorama__grab"] img:nth-child(2)');
const item_title = ('[class="product-info-main"] h1');
const options_dropdown_menu = ('[id="product-options-wrapper"]');
const thefirst_option = ('[id="product-options-wrapper"] select>option:nth-child(2)');
const options_paceholder = ('[id="product-options-wrapper"] select>option:nth-child(1)');
const add_cart_button = ('button[id="product-addtocart-button"]');
const view_cart_button = ('[class="view-cart"]>button');
const product_title_in_cart = ('[id="shopping-cart-table"] [class="product-item-name"]');
const add_to_wishlist_button = ('a[title="Add to Wish List"]');
const wishlist_button = ('[id="switcher-language"]~a');
const item_in_wishlist = ('[id="item_487"]');
const buy_now_button = ('button[id="buy-now"]');
const item_in_checkout = ('');


class ProductPage {

    async clickcItemCard(){
        await page.scrollIntoView(result_item_card);
        await page.click(result_item_card);        
    }

    async clickcOptionsMenu(){
        await page.waitForDisplayed(options_dropdown_menu);
        await page.click(options_dropdown_menu);        
    }

    async clickcTheFirstOption(){
        await page.waitForDisplayed(thefirst_option);
        await page.click(thefirst_option);        
    }

    async clickAddToCartButton(){
        await page.scrollIntoView(add_cart_button);
        await page.waitForDisplayed(add_cart_button);
        await page.click(add_cart_button);        
    }

    async clickAddToWishlistButton(){
        await page.scrollIntoView(add_to_wishlist_button);
        await page.waitForDisplayed(add_to_wishlist_button);
        await page.click(add_to_wishlist_button);        
    }

    async clickAddToCheckoutButton(){
        await page.scrollIntoView(buy_now_button);
        await page.waitForDisplayed(buy_now_button);
        await page.click(buy_now_button);        
    }

    async clickViewCartButton(){
        await page.waitForDisplayed(view_cart_button);
        await page.click(view_cart_button);        
    }

    async clickWishlistButton(){
        await page.click(wishlist_button);        
    }

    async urlItemChecking(){
        await (expect(page.urlChecking('shoes')));
        await (expect(page.urlChecking('.html')));
    }

    async isItemImageVisible(){
        await (expect(page.isdisplayed(item_image)));
    }

    async isItemNameVisible(){
        await (expect(page.isdisplayed(item_title)));
    }

    async isChosenOptionVisible(){
        await (expect((page.isdisplayed(options_paceholder))==false));
    }
   
    async isItemInTheCartVisible(){
        await (expect(page.isdisplayed(product_title_in_cart)));
    }

    async isItemInTheWishlistVisible(){
        await (expect(page.isdisplayed(item_in_wishlist)));
    }

    async isItemInTheCheckoutVisible(){
        await (expect(page.isdisplayed(item_in_wishlist)));
    }

    async urlCartChecking(){
        await (expect(page.urlChecking('cart')));
    }

    async urlWishListChecking(){
        await (expect(page.urlChecking('wishlist')));
    }

    async urlCheckoutChecking(){
        await (expect(page.urlChecking('checkout')));
    }

}

module.exports = new ProductPage();