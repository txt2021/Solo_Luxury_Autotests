const page = require('./page')

const edit_button = ('[class="box box-information"] div:nth-child(3)>a:nth-child(1)');
const user_name_field = ('[id="firstname"]');
const user_lastname_field = ('[id="lastname"]');
const user_name_text = "John";
const user_lastname_text = "Test";
const empty_user_name_text = "";
const empty_user_lastname_text = "";
const save_button = ('fieldset~div button');
const user_info_field = ('[class="box box-information"] [class="box-content"]>p');
const required_fields_errors = ['[id="firstname-error"]','[id="lastname-error"]'];
const required_fields_errors_text = 'This is a required field.';


class UserProfilePage {

    async clickEditButton(){
        await page.click(edit_button);        
    }

    async clickSaveButton(){
        await page.click(save_button);        
    }

    async enterFirstName(){
        await page.setvalue(user_name_field,user_name_text);     
    }

    async enterLastName(){
        await page.setvalue(user_lastname_field,user_lastname_text);     
    }

    async deleteFirstName(){
        await page.setvalue(user_name_field,empty_user_name_text);     
    }

    async deleteLastName(){
        await page.setvalue(user_lastname_field,empty_user_lastname_text);     
    }

    async isUserInfoCorrect(){
        await (expect(page.checkElement(user_info_field,`${user_name_text} ${user_lastname_text}`)));
        }
    
    async isRequiredFieldsErrorsVisibleAndCorrect(){
        for(let i = 0; i<=required_fields_errors.length; i++){
            await (expect(page.isdisplayed(i)));
            await (expect(page.checkElement(i,required_fields_errors_text)));
            }
    }

    async clickandCheckAccountButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(1)`);
        await (expect(page.urlChecking('account')));
    }

    async clickandCheckOrderButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(2)`);
        await (expect(page.urlChecking('order')));
    }

    async clickandCheckWishlistButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(3)`);
        await (expect(page.urlChecking('wishlist')));
    }

    async clickandCheckAddressButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(5)`);
        await (expect(page.urlChecking('address')));
    }

    async clickandCheckCreditsButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(7)`);
        await (expect(page.urlChecking('credits')));
    }

    async clickandCheckReturnButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(9)`);
        await (expect(page.urlChecking('returnlist')));
    }

    async clickandCheckCouponButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(10)`);
        await (expect(page.urlChecking('coupon')));
    }

    async clickandCheckTicketsButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(11)`);
        await (expect(page.urlChecking('tickets')));
    }

    async clickandCheckSocialButton(){
        await page.click(`[id="account-nav"]>ul>li:nth-child(12)`);
        await (expect(page.urlChecking('sociallogin')));
    }

    async urlLogoutChecking(){
        await (expect(page.urlChecking('login')));
    }

      

}

module.exports = new UserProfilePage();