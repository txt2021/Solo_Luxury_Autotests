const page = require('./page')


const user_name_field = ('[id="name"]');
const user_lastname_field = ('[id="last_name"]');
const user_email_field = ('[id="email"][placeholder]');
const phone_number_field = ('[id="phone"]');
const brand_name_field = ('[id="brand"]');
const style_field = ('[id="style"]');
const keyword_field = ('[id="keyword"]');
const remarks_field = ('[id="remarks"]');
const submit_button = ('[id="btn_submit"]');

const user_name_text = 'Tester';
const user_lastname_text = 'Testerer';
const user_email_text = 'jebepi9455@ceoshub.com';
const invalid_email_text = 'jceoshub.com';
const phone_number_value = '0956178221';
const brand_name_text = 'Gucci';
const style_text = 'Casual';
const keyword_text = 'Dress';
const remarks_text = 'I want to have some testing tips';

const success_message = ('[id="authenticationPopup"]~div p');
const success_message_text = "We'll Get In Touch Soon.";

const error_email_message = ('[id="email-error"]');
const error_email_message_text = "Please enter a valid email address.";

const required_fields_errors = ['[id="name-error"]','[id="last_name-error"]','[id="email-error"]'];
const required_fields_errors_text = 'This is a required field.';

class SpecialRequestPage {

    async enterUserName(){
        await page.setvalue(user_name_field,user_name_text);     
    }   
    
    async enterUserLastname(){
        await page.setvalue(user_lastname_field,user_lastname_text);     
    }  

    async enterUserEmail(){
        await page.setvalue(user_email_field,user_email_text);     
    }  

    async enterInvalidEmail(){
        await page.setvalue(user_email_field,invalid_email_text);     
    }

    async enterPhoneNember(){
        await page.setvalue(phone_number_field,phone_number_value);     
    }  

    async enterBrand(){
        await page.setvalue(brand_name_field,brand_name_text);     
    }  

    async enterStyle(){
        await page.setvalue(style_field,style_text);     
    }  

    async enterKeyword(){
        await page.setvalue(keyword_field,keyword_text);     
    }  

    async enterRemarks(){
        await page.setvalue(remarks_field,remarks_text);     
    }  

    async clickSubmitButton(){
        await page.click(submit_button);        
    }

    async urlSuccessRequestChecking(){
        await (expect(page.urlChecking('success')));
    }   

    async isSuccessRequestMessageVisible(){
        await (expect(page.isdisplayed(success_message)));
    }

    async isSuccessRequestMessageCorrect(){
        await (expect(page.checkElement(success_message,success_message_text)));
    }

    async isErrorEmailMessageVisible(){
        await (expect(page.isdisplayed(error_email_message)));
    }

    async isErrorEmailMessageCorrect(){
        await (expect(page.checkElement(error_email_message,error_email_message_text)));
    }

    async isRequiredFieldsErrorsVisibleAndCorrect(){
        for(let i = 0; i<=required_fields_errors.length; i++){
            await (expect(page.isdisplayed(i)));
            await (expect(page.checkElement(i,required_fields_errors_text)));
            }
        }

    
}

module.exports = new SpecialRequestPage();