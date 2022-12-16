const page = require('./page')

const menu_form = ('[id="mySidenav"]');
const menu_class_attribute = 'class';
const menu_class_value = 'sidenav';

const filter_column = ('[class="sidebar sidebar-main"]');
const message = ('[class="no-page"]>h1');

class MenuPage {

    async isDisplayedMenuForm(){
        await (expect(page.isdisplayed(menu_form)));
    }

    async HaveAttributeMenuForm(){
        await (expect(page.haveattribute(menu_form, menu_class_attribute, menu_class_value)));
    }

    async urlWomenChecking(){
        await (expect(page.urlChecking('women')));

    }

    async isExistingFilterColumnOrMessage(){
        await (expect(page.isexisting(filter_column)) || expect(page.isdisplayed(message)));
    }

    async urlMenChecking(){
        await (expect(page.urlChecking('men')));
    }

    async urlKidsChecking(){
        await (expect(page.urlChecking('kids')));
    }

    async urlSaleChecking(){
        await (expect(page.urlChecking('sale')));
    }

    async urlHeelsChecking(){
        await (expect(page.urlChecking('heels')));
    }

    async urlPreownedChecking(){
        await (expect(page.urlChecking('preowned')));
    }

    async urlToteBagsChecking(){
        await (expect(page.urlChecking('tote-bags')));
    }

    async urlSatchelChecking(){
        await (expect(page.urlChecking('satchel')));
    }

    async urlTravelBagChecking(){
        await (expect(page.urlChecking('travel-bag')));
    }

    async urlWhatsNewChecking(){
        await (expect(page.urlChecking('whats+new')));
    }

    async urlBrandsChecking(){
        await (expect(page.urlChecking('brands')));
    }

}

module.exports = new MenuPage();