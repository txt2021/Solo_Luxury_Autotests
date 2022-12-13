const page = require('./page')


const create_an_accountButton = ('#maincontent > div.columns > div > div:nth-child(4) > div.block.block-new-customer > div.block-content > div > div > a');

class LoginPage {

    async clickcreateAccountButton(){
        await page.click(create_an_accountButton);        
        }

}

module.exports = new LoginPage();



