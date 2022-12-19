const page = require('./page')


const create_an_accountButton = ('[class="login-container"] [href*=create]');
const user_email = ('[name="login[username]"]');
const test_email = 'jebepi9455@ceoshub.com';
const user_password = ('[name="login[password]"]');
const test_password = 'Good_Pas12';
const submit_button = ('#send2[class="action login primary"]');
const coockie_button = ('[class="phpro-cookie-notice"] button:nth-child(1)');
const invalid_test_email = 'jebepi9454@ceoshub';
const invalid_test_password = 'testpass';
const email_error_message = ('[id="email-error"]');
const email_error_message_text = 'Please enter a valid email address (Ex: johndoe@domain.com).';

const required_fields_errors = ['[id="email-error"]','[id="pass-error"]'];
const required_fields_errors_text = 'This is a required field.';
const forgot_password_button = ('[class="secondary cls_forget"] a');
const facebook_button = ('[class="sociallogin-box"]>a[data-href*=facebook]');
const twitter_button = ('span[class="pslogin-button-auto  "]');
const google_button = ('//*[@id="maincontent"]/div[2]/div/div[1]/div/div[2]/div[2]/a');

class LoginPage {

    async clickcreateAccountButton(){
        await page.click(create_an_accountButton);        
    }

    async enterEmail(){
        await page.setvalue(user_email,test_email);     
    }

    async enterInvalidEmail(){
        await page.setvalue(user_email,invalid_test_email);     
    }

    async enterPassword(){
        await page.setvalue(user_password,test_password);     
    }

    async enterInvalidPassword(){
        await page.setvalue(user_password,invalid_test_password);     
    }

    async clickcSubmitButton(){
        await page.scrollIntoView(submit_button);
        await page.waitForDisplayed(submit_button);
        await page.click(submit_button);        
    }

    async urlAccountChecking(){
        await (expect(page.urlChecking('account')));
    }

    async clickCoockieButton(){
        await page.click(coockie_button);        
    }

    async isErrorEmailMessageVisible(){
        await (expect(page.isdisplayed(email_error_message)));
        }

    async isErrorEmailMessageCorrect(){
        await (expect(page.checkElement(email_error_message,email_error_message_text)));
        }
    
    async isRequiredFieldsErrorsVisibleAndCorrect(){
        for(let i = 0; i<=required_fields_errors.length; i++){
            await (expect(page.isdisplayed(i)));
            await (expect(page.checkElement(i,required_fields_errors_text)));
            }
        }

    async clickcForgotPasswordButton(){
        await page.click(forgot_password_button);        
    }

    async urlForgorPassChecking(){
        await (expect(page.urlChecking('forgotpassword')));
    }

    async clickFacebookButton(){
        await page.click(facebook_button);        
    }

    async clickGoogleButton(){
        await page.click(google_button);        
    }

    async clickTwitterButton(){
        await page.click(twitter_button);        
    }

    async isMediaFormDisplayed(){
        const handles = await browser.getWindowHandles()
        let windows = handles.length;
        if(windows==2){
            return true
        }
    }

}

module.exports = new LoginPage();



