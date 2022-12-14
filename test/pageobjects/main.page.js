const page = require('./page')


const personal_accountButton = ('[class="top-links-icon"]');
const logout_button = ('[class="user-login-option"] a[href*="logout"]')

class MainPage {

    async clickpersonalAccountButton(){
        await page.click(personal_accountButton);        
        }

    async clickLogoutButton(){
            await page.click(logout_button);        
        }

}

module.exports = new MainPage();