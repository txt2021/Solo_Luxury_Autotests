const page = require('./page')

const country_list = ('[id="switcher-website-trigger_old"]');
const Ukraine_button = ('[data-websiteid="107"]');
const language_list = ('#switcher-language-trigger > strong > span');
const currency_list = ('[id="switcher-currency-trigger"]');
const another_language_button = ('#ui-id-227 > li > a');
const another_currency_button = ('[id="ui-id-226"]>li>a');
const currency_label = ('#switcher-currency-trigger > strong > span');
const currency_label_text = 'EUR';
const search_field = ('[id="searchText"]');
const search_text = 'Ukraine';
const invalid_search_text = 'Data';
const error_message = ('[id="no-result"]>p');
const error_message_text = "We don't ship to this country. Please raise a ticket for any queries.";

const english_button = ('[id="countrypopup-modal"] ul>li>a[href*="en"]');

class LocalizationPage {

    async clickCountryList(){
        await page.click(country_list);        
    }

    async clickLanguageList(){
        await page.click(language_list);        
    }

    async clickCurrencyList(){
        await page.click(currency_list);        
    }

    async clickUkraineButton(){
        await page.click(Ukraine_button);        
    }

    async clickAnotherLanguageButton(){
        await page.isclickable(another_language_button);
        await page.click(another_language_button);        
    }

    async clickAnotherCurrencyButton(){
        await page.isclickable(another_currency_button);
        await page.click(another_language_button);        
    }

    async clickEnglishButton(){
        await page.click(english_button);        
    }

    async enterSearchKeyword(){
        await page.setvalue(search_field,search_text);     
    }

    async enterInvalidKeyword(){
        await page.setvalue(search_field,invalid_search_text);     
    }

    async urlUaEnChecking(){
        await (expect(page.urlChecking('ua-en')));
    }

    async urlUA_ruChecking(){
        await (expect(page.urlChecking('ua-ru')));
    }

    async isCurrencyeCorrect(){
        await (expect(page.checkElement(currency_label,currency_label_text)));
    }

    async isCountryVisible(){
        await (expect(page.isdisplayed(Ukraine_button)));
    }

    async isErrorMessageVisible(){
        await (expect(page.isdisplayed(error_message)));
    }

    async isErrorMessageCorrect(){
        await (expect(page.checkElement(error_message,error_message_text)));
    }


}

module.exports = new LocalizationPage();