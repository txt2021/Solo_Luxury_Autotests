const page = require('./page')

const result_item_card = ('ol[class="filterproducts products list items product-items "]>li:nth-child(1)');
const item_title = ('[id="maincontent"] h1');
const brand_link = ('[id="brands"]>li:nth-child(1)');
const category_button = ('[id="narrow-by-list"]>div:nth-child(1)');
const men_category_button = ('[id="narrow-by-list"]>div:nth-child(1) ol>li:nth-child(2)');
const category_label =('[id="layered-filter-block"] ol>li>span:nth-child(1)');
const men_category_label = ('[id="layered-filter-block"] ol>li>span:nth-child(2)');
const men_category_label_text = 'Men';
const price_button = ('#narrow-by-list > div:nth-child(2)');
const higher_price_button = ('[id="narrow-by-list"]>div:nth-child(2) a:nth-child(3)');
const price_label = ('[id="layered-filter-block"] ol>li:nth-child(2)>span:nth-child(1)');
const clear_all_button = ('[class="action clear filter-clear"]');
const sort_by_name_button = ('[id="sorter"]>option[value="name"]');
const clear_category_button = ('[id="layered-filter-block"] ol>li>a[title="Remove Category Men"]');
const create_ticket_button = ('[id="create-ticket-btn"]');
const create_ticket_form = ('[id="myModalspec"] h3');
const continue_shopping_button = ('[id="create-ticket-btn"]~a');


class SeacrhResultsPage {

    async clickcItemCard(){
        await page.click(result_item_card);        
    }

    async clickcOnBrand(){
        await page.waitForDisplayed(brand_link);
        await page.click(brand_link);        
    }

    async clickcCategoryButton(){
        await page.click(category_button);        
    }

    async clickClearAllButton(){
        await page.click(clear_all_button);        
    }

    async clickClearCategoryButton(){
        await page.waitForDisplayed(clear_category_button);
        await page.click(clear_category_button);        
    }

    async clickPriceButton(){
        await page.waitForDisplayed(price_button);
        await page.click(price_button);    
    }

    async clickcMenCategoryButton(){
        await page.click(men_category_button);        
    }

    async clickNameSortButton(){
        await page.waitForDisplayed(sort_by_name_button);
        await page.click(sort_by_name_button);        
    }

    async clickCreateTicketButton(){
        await page.waitForDisplayed(create_ticket_button);
        await page.click(create_ticket_button);        
    }

    async clickContinueShoppingButton(){
        await page.waitForDisplayed(continue_shopping_button);
        await page.click(continue_shopping_button);        
    }
    

    async dragHigherPriceButton(){
        await page.waitForDisplayed(higher_price_button);
        await $(higher_price_button).click({ x: -30 })  
    }

    async isItemPageVisible(){
        await (expect(page.isdisplayed(item_title)));
    }

    async urlBrandChecking(){
        await (expect(page.urlChecking('brand')));
    }

    async isChosenCategoryVisible(){
        await (expect(page.isdisplayed(category_label)));
    }

    async isSortByNameVisible(){
        await (expect(page.isdisplayed(sort_by_name_button)));
    }

    async isFiltersCleared(){
        await (expect((page.isdisplayed(category_label))==false));
    }

    async isChosenPriceVisible(){
        await (expect(page.isdisplayed(price_label)));
    }

    async isCreateTicketFormVisible(){
        await (expect(page.isdisplayed(create_ticket_form)));
    }

    async isChosenCategoryCorrect(){
        await (expect(page.checkElement(men_category_label,men_category_label_text)));
        }

    async urlShoppingChecking(){
        await (expect(page.urlChecking('brands')));
    }
    

}

module.exports = new SeacrhResultsPage();