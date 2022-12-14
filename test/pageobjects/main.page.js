const page = require('./page')


const personal_accountButton = ('[class="top-links-icon"]');
const logout_button = ('[id="switcher-language"]~div[class="top-links-area"] ul>li:nth-child(1)>a')

class MainPage {

    async clickpersonalAccountButton(){
        await page.click(personal_accountButton);        
        }

    async clickLogoutButton(){
            await page.click(logout_button);        
            }

}

module.exports = new MainPage();