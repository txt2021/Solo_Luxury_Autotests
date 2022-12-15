const page = require('./page')


const personal_accountButton = ('[class="top-links-icon"]');
const logout_button = ('[class="user-login-option"] a[href*="logout"]');
const search_icon = ('[class="search-area"]>a');
const search_field = ('input[id="search"]');
const search_text = 'Shoes';
const invalid_search_text = 'Взуття';
const search_button = ('[id="search_mini_form"]');
const special_request_button = ('[id="myspecialreq"]');

class MainPage {

    async clickpersonalAccountButton(){
        await page.click(personal_accountButton);        
        }

    async clickLogoutButton(){
            await page.click(logout_button);        
        }

    async clickSearchIcon(){
            await page.click(search_icon);        
        }
    
    async clickSearchButton(){
            await page.click(search_button);        
        }
    
    async clickSpecialRequestButton(){
        await page.click(special_request_button);        
    }

    async enterSearchKeyword(){
            await page.setvalue(search_field,search_text);     
        }
    
    async enterInvalidSearchKeyword(){
            await page.setvalue(search_field,invalid_search_text);     
        }

}

module.exports = new MainPage();