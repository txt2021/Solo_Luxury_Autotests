
const page = require('./page');

var randomEmail = require('random-email');
const user_email = ('[id="email_address"]');
const user_firstname = '[id="firstname"]';
const test_firstname = 'Tester';
const user_lastname = '[id="lastname"]';
const test_lastname = 'Testerer';
const user_password= ('[id="password"]');
const user_confirm_password= ('[id="password-confirmation"]');
const test_password = 'Good_Pas12';
const user_dob = ('[id="dob"]');
const test_dob = '10/10/1999';
const user_dom = ('[id="dom"]');
const test_dom = '12.12.20';
const submit_button = ('button[class="action submit primary"]');
const already_used_email = 'jebepi9455@ceoshub.com';
const email_error_message = ('[id="authenticationPopup"]~div>p:nth-child(2)');
const email_error_message_text = 'There Is Already A Account With This Email Address, You can Reset Your Password For ( email address ) or Create An Account With A New Email Address'

const coockie_button = ('[class="phpro-cookie-notice"] button:nth-child(1)');

const required_fields_errors = ['[id="firstname-error"]','[id="lastname-error"]','[id="email_address-error"]','[id="password-error"]','[id="password-confirmation-error"]'];
const required_fields_errors_text = 'This is a required field.';


class SignUpPage {    

    async enterFirstName(){
        await page.setvalue(user_firstname,test_firstname);     
    }

    async enterLastName(){
        await page.setvalue(user_lastname,test_lastname);     
    }

    async enterEmail(){
        await page.setvalue(user_email,randomEmail({ domain: 'example.com' }));     
    }

    async enterInvalidEmail(){
        await page.setvalue(user_email,already_used_email);     
    }

    async enterPassword(){
        await page.setvalue(user_password,test_password);     
    }
  
    async enterConfirmationPassword(){
        await page.setvalue(user_confirm_password,test_password);     
    }

    async enterDateOfBirth(){
        await page.setvalue(user_dob,test_dob);     
    }

    async enterDateOfMarrige(){
        await page.setvalue(user_dom,test_dom);     
    }

    async scrollToSubmitButton(){
        await page.scrollIntoView(submit_button);        
    }

    async clickcSubmitButton(){
        await page.scrollIntoView(submit_button);
        await page.waitForDisplayed(submit_button);  
        await page.click(submit_button);        
    }

    async clickCoockieButton(){
        await page.scrollIntoView(coockie_button);
        await page.waitForDisplayed(coockie_button);
        await page.click(coockie_button);        
    }
    
    async urlUserChecking(){
        await (expect(page.urlChecking('account')));
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
   
  

    

}

module.exports = new SignUpPage();
