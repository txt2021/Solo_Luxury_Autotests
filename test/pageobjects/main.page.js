const page = require('./page')


const personal_accountButton = ('[class="top-links-icon"]');
const logout_button = ('[class="user-login-option"] a[href*="logout"]');
const search_icon = ('[class="search-area"]>a');
const search_field = ('input[id="search"]');
const search_text = 'Shoes';
const invalid_search_text = 'Взуття';
const search_button = ('[id="search_mini_form"]');
const special_request_button = ('[id="myspecialreq"]');

const newsletter_input = ('[id="newsletter"]');
const newsletter_input_text = require('random-email');;
const subscribe_button = ('[class="sub-bttn"]');
const success_message_field = ('[id="newsletter"]~span');
const success_message_text = "You've been added to our mailing list.";
const invalid_newsletter_text = 'InapropEmail';
const already_taken_email = 'tara@ceoshub.com';
const error_message_text = 'This email address is already subscribed';

const about_us_button = ('[class="col-lg-2"]:nth-child(1)>div strong');
const app_button = ('[class="col-lg-2"]:nth-child(1)>div ul>li:nth-child(5)>a');
const contact_button = ('[class="col-lg-2"]:nth-child(2)>div strong');
const shipping_button = ('[class="col-lg-2"]:nth-child(2)>div ul>li:nth-child(3)>a');
const social_button = ('[class="col-lg-2"]:nth-child(3)>div strong');
const hope_button = ('[class="col-lg-2"]:nth-child(3)>div ul>li:nth-child(1)>a');
const company_button = ('[class="col-lg-2"]:nth-child(4)>div strong');
const testimonials_button = ('[class="col-lg-2"]:nth-child(4)>div ul>li:nth-child(4)>a');
const error_message = ('[id="authenticationPopup"]~div h3');


class MainPage {

    async hoverToAboutUs(){
        await page.hover(about_us_button);
    }

    async hoverToContact(){
        await page.hover(contact_button);
    }

    async hoverToCompany(){
        await page.hover(company_button);
    }

    async hoverToSocial(){
        await page.hover(social_button);
    }

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

    async clickSubscribeButton(){
        await page.click(subscribe_button);        
    }

    async clickAppButton(){
        await page.click(app_button);        
    }

    async clickShippingButton(){
        await page.click(shipping_button);        
    }

    async clickHopeButton(){
        await page.click(hope_button);        
    }

    async clickTestimonialsButton(){
        await page.click(testimonials_button);        
    }

    async enterSearchKeyword(){
            await page.setvalue(search_field,search_text);     
        }
    
    async enterInvalidSearchKeyword(){
            await page.setvalue(search_field,invalid_search_text);     
        }
    
     async enterNewsletterEmail(){
        await page.setvalue(newsletter_input,newsletter_input_text());     
    }

    async enterTakenNewsletterEmail(){
        await page.setvalue(newsletter_input,already_taken_email);     
    }

    async enterInvalidNewsletterEmail(){
        await page.setvalue(newsletter_input,invalid_newsletter_text);     
    }

    async isNewsletterSuccessMessageVisible(){
        await (expect(page.isdisplayed(success_message_field)));
    }

    async isNewsletterSuccessMessageCorrect(){
        await (expect(page.checkElement(success_message_field,success_message_text)));
    }

    async isNewsletterErrorMessageVisible(){
        await (expect(page.isdisplayed(success_message_field)));
    }

    async isNewsletterErrorMessageCorrect(){
        await (expect(page.checkElement(success_message_field,error_message_text)));
    }

    async isSubscribeButtonClickable(){
        await (expect((page.isclickable(subscribe_button))==false));
    }


    async urlAppChecking(){
        await (expect(page.urlChecking('app')));

    }

    async urlShippingChecking(){
        await (expect(page.urlChecking('shipping')));
    }

    async urlHopeChecking(){
        await (expect(page.urlChecking('hope')));
    }

    async urlTestimonialsChecking(){
        await (expect(page.urlChecking('testimonials'))) || (expect(page.isdisplayed(error_message)));
    }

}

module.exports = new MainPage();