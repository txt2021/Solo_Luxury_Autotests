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

const logo_button = ('[class="logo"]');
const show_all_brands_button = ('[class="home-brands-list"]>a:nth-child(24)');

const open_menu_button = ('[id="open-menu"]');
const close_menu_button = ('[id="close-menu"]');

const women_menu_category = ('li>[href$="women.html"]');
const men_menu_category = /*('//*[@id="ui-id-3"]')*/('nav>ul>li:nth-child(2)>a>span:nth-child(2)');
const kids_menu_category = ('//*[@id="ui-id-4"]');
const sale_menu_category = ('//*[@id="ui-id-5"]');
const heels_menu_category = ('//*[@id="ui-id-9"]');//6
const preowned_menu_category = ('//*[@id="ui-id-7"]');
const tote_bags_menu_category = ('//*[@id="ui-id-11"]');//8-11
const tote_bags_subcategory = ('//*[@id="ui-id-218"]');
const satchel_menu_category = ('//*[@id="ui-id-12"]');//9
const all_bags_subcategory = ('//*[@id="ui-id-221"]');//219
const travel_bag_menu_category = ('//*[@id="ui-id-13"]');//10
const travel_bag_subcategory = ('//*[@id="ui-id-224"]');//223
const whats_new_menu_category = ('[class="ui-menu-item level0"]');
const brands_menu_category = ('li>[href$="brands/"]');

const minicart_icon = /*('[class="action showcart"]')*//*('div[data-block="minicart"]')*/('//*/div[2]/div[6]');
const close_minicart_button = ('button[id="btn-minicart-close"]')

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

    async clickShowAllBrandsButton(){
        await page.click(show_all_brands_button);        
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

    async urlAllBrandsChecking(){
        await (expect(page.urlChecking('brands')));
    }

    async isBrandLinkClickable(){
        for(let i = 1; i<=24;i++){
            await (expect(page.isclickable(`[class="home-brands-list"]>a:nth-child(${i})`)));
            i++
        }              
    }

    async clickBrandLink(){
        for(let i = 1; i<=24;i++){
            await page.click(`[class="home-brands-list"]>a:nth-child(${i})`);
            await page.click(logo_button); 
            i+=3;
        }              
    }


    async clickOpenMenuButton(){
        await page.scrollIntoView(open_menu_button);
        await page.click(open_menu_button);
    }

    async clickCloseMenuButton(){
        await page.click(close_menu_button);
    }

    async clickWomenMenuCategory(){
        await page.click(women_menu_category);
    }

    async clickMenMenuCategory(){
        await page.click(men_menu_category);
    }

    async clickKidsMenuCategory(){
        await page.click(kids_menu_category);
    }

    async clickSaleMenuCategory(){
        await page.click(sale_menu_category);
    }

    async clickHeelsMenuCategory(){
        await page.click(heels_menu_category);
    }

    async clickPreownedMenuCategory(){
        await page.click(preowned_menu_category);
    }

    async hoverToToteBagsMenuCategory(){
        await page.hover(tote_bags_menu_category);
    }

    async clickToteBagsSubcategory(){
        await page.click(tote_bags_subcategory);
    }

    async hoverToSatchelMenuCategory(){
        await page.hover(satchel_menu_category);
    }

    async clickAllBugsSubcategory(){
        await page.click(all_bags_subcategory);
    }

    async hoverToTravelBagMenuCategory(){
        await page.hover(travel_bag_menu_category);
    }

    async clickTravelBugSubcategory(){
        await page.click(travel_bag_subcategory);
    }

    async clickWhatsNewMenuCategory(){
        await page.click(whats_new_menu_category);
    }

    async clickBrandsMenuCategory(){
        await page.click(brands_menu_category);
    }

    async clickShowcartIcon(){
        await page.click(minicart_icon);        
    }

    async clickCloseMinicartButton(){
        await page.click(close_minicart_button);        
    }

}

module.exports = new MainPage();