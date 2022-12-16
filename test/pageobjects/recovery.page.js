const page = require('./page')


const user_email = ('[id="email_address"]');
const test_user_email = 'jebepi9453@ceoshub.com';
const reset_password_button = ('form[class="form password forget"] [class="actions-toolbar"] button');
const success_message = ('[id="authenticationPopup"]~div>p');
const test_invalid_user_email = 'email.com';
const invalid_test_email_message = ('[id="email_address-error"]'); 
const invalid_test_email_text = 'Please enter a valid email address (Ex: johndoe@domain.com).';
const empty_field_text = 'This is a required field.';
const back_to_login_button = ('#form-validate  a');


class PasswordRecoveryPage {

    async enterEmail(){
        await page.setvalue(user_email,test_user_email);     
    }

    async enterInvalidEmail(){
        await page.setvalue(user_email,test_invalid_user_email);     
    }

    async clickResetMyPasswordButton(){
            await page.click(reset_password_button);        
    }

    async clickBackToLoginButton(){
        await page.click(back_to_login_button);        
}

    async urlRecoveryChecking(){
                await (expect(page.urlChecking('success')));
    }

    async urlLoginChecking(){
        await (expect(page.urlChecking('login')));
}
        
    async isSuccessRecoveryMessageVisible(){
                await (expect(page.isdisplayed(success_message)));
    }

    async isErrorEmailMessageVisible(){
        await (expect(page.isdisplayed(invalid_test_email_message)));
    }

    async isErrorEmailMessageCorrect(){
        await (expect(page.checkElement(invalid_test_email_message,invalid_test_email_text)));
        }
    
    async isEmptyFieldMessageCorrect(){
        await (expect(page.checkElement(invalid_test_email_message,empty_field_text)));
        }

}

module.exports = new PasswordRecoveryPage();