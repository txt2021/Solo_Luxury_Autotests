const page = require('./page')

const wishlist_icon = ('[id="authenticationPopup"]~div ol>li:nth-child(1) a[title="Add to Wish List"]');
const counter_label = ('[class="far fa-heart"]~span');
const wishlist_button = ('[id="switcher-language"]~a');
const delete_item_button = ('[class="product-items"]>li:nth-child(1) a[class="btn-remove action delete wishlist"]');
const item_card = ('[class="product-items"]>li:nth-child(1)');
const result_item_card = ('ol[class="filterproducts products list items product-items "]>li:nth-child(1)');
const result_item_card2 = ('ol[class="filterproducts products list items product-items "]>li:nth-child(2)');
const add_to_wishlist_button = ('a[title="Add to Wish List"]');
const empty_wishlist_message = ('[id="wishlist-view-form"]>div>span');
const options_dropdown = ('[id="attribute167"]');
const first_option = ('[id="attribute167"]>option:nth-child(2)');
const add_to_cart_button = ('li button[title="Add to Cart"]');
const add_all_to_cart_butto = ('[data-role="all-tocart"]>span');
const cart_button = ('[data-block="minicart"]');
const cart_item_area = ('#shopping-cart-table > tbody > tr > td.col.item > div');


class WishListPage {

    async clickWishListIcon(){
        await page.scrollIntoView(wishlist_icon);
        await page.waitForDisplayed(wishlist_icon);
        await page.click(wishlist_icon);        
    }

    async clickWishListButton(){
        await page.click(wishlist_button);        
    }


    async clickAddToWishListButton(){
        await page.scrollIntoView(add_to_wishlist_button);
        await page.waitForDisplayed(add_to_wishlist_button);
        await page.click(add_to_wishlist_button);        
    }

    async clickDeleteItemButton(){
        await page.click(delete_item_button);        
    }

    async clickItemCard(){
        await page.scrollIntoView(result_item_card);
        await page.waitForDisplayed(result_item_card);
        await page.click(result_item_card);        
    }

    async clickSecondItemCard(){
        await page.scrollIntoView(result_item_card2);
        await page.waitForDisplayed(result_item_card2);
        await page.click(result_item_card2);        
    }

    async clickOptionsDropdown(){
        await page.scrollIntoView(options_dropdown);
        await page.waitForDisplayed(options_dropdown);
        await page.click(options_dropdown);        
    }

    async clickFirstOptionButton(){
        await page.waitForDisplayed(first_option);
        await page.click(first_option);        
    }

    async clickAddToCartButton(){
        await page.click(add_to_cart_button);        
    }

    async clickAddAllToCartButton(){
        await page.scrollIntoView(add_all_to_cart_butto);
        await page.waitForDisplayed(add_all_to_cart_butto);
        await page.click(add_all_to_cart_butto);        
    }

    async clickCartButton(){
        await page.click(cart_button);        
    }

    async isCounterVisible(){
        await (expect(page.isdisplayed(counter_label)));
    }

    async isCartItemsVisible(){
        await (expect(page.isdisplayed(cart_item_area)));
    }

    async isEmptyWishlistVisible(){
        await (expect(page.isdisplayed(empty_wishlist_message)));
    }

    async isItemDeleted(){
        await (expect((page.isdisplayed(item_card))==false));
    }


}

module.exports = new WishListPage();