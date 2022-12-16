const page = require('./page')

const cart_form = ('div[id="ui-id-228"]');
const close_select_language_button = ('[id="modal-title-0"]~[data-role="closeBtn"]');
const menu_class_value = 'sidenav';

class MinicartPage {

    async isDisplayedMenuForm(){
        await (expect(page.isdisplayed(cart_form)));
    }

    async isDisplayedMenuForm1(){
        await (expect(page.isdisplayed(cart_form)==false));
    }

    async clickCloseSelectLanguageButton(){
        await page.click(close_select_language_button);        
    }

    async HaveAttributeMenuForm(){
        await (expect(page.haveattribute(menu_form, menu_class_attribute, menu_class_value)));
    }

}

module.exports = new MinicartPage();