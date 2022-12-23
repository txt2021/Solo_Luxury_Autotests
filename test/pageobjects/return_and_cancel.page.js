const page = require('./page');
const signuppage = require('../pageobjects/signup.page') 
const minicartpage = require('../pageobjects/minicart.page');
const checkoutpage = require('../pageobjects/checkout.page');
//1
const cancel_button_1 = ('//tr[1]/td[6]/span[2]');//1690017
const placed_order_by_mistake_optoin_1 = ('tr:nth-child(1) select>option:nth-child(4)[value$="Mistake"]');
const send_button = ('//tr[1]/td[6]/div[3]/div/div[2]/input');
//2
const cancel_button_org_order = ('tbody>tr>td>span[class$="cancel-1690012"]');//1690012
const placed_order_by_mistake_optoin_2 = ('[id="ordercancel-reason-1690012"]');
const send_button_cancel_org_order = ('[id="ordercancel-submit-1690012"]');
const return_cacnel_order_request_ticket = ('[class$="_inner-scroll _show"] [class="modal-title"]');
//3
const return_button_for_17 = ('tr:nth-child(1)>td:nth-child(6)>span#return-order-1690017');//1690017
const wrong_order_shipping_adress_option_17 = ('[class="modal-content"] [id="order-return-reason-1690017"]');
const send_button_for_return = ('[id="order-return-submit-1690017"]');
//4
const return_button_org_order = ('[id="return-order-1690012"]');//1690012
const wrong_order_shipping_adress_option_12 = ('[id="order-return-reason-1690012"]');
const send_button_for_return_org_order = ('[id="order-return-submit-1690012"]');
const return_org_order_result = ('[id="return-result-1690012"]');
//5
const cancel_button_43 = ('[class="order-canel cancel-1690043"]');//1690043
const placed_order_by_mistake_optoin_43 = ('[id="ordercancel-reason-1690043"]');
const send_button_for_cancel = ('[id="ordercancel-submit-1690043"]');
const cancel_button_result_43 = ('[id="result-1690043"]');
//6
const cancel_button_org_order_40 = ('[class="order-canel cancel-1690040"]')//1690040//bond
const placed_order_by_mistake_optoin_40 = ('[id="ordercancel-reason-1690040"]');
const send_button_for_cancel_40 = ('[id="ordercancel-submit-1690040"]');
const ordder_cancel_phone_40 = ('[id="orddercancel_phone"]');
const ordder_cancel_phone_text = '+4402738614';
const ordder_cancel_remarks_40 = ('[id="orddercancel_remarks"]');
const ordder_cancel_remarks_text = 'Testing Remark';
const ordder_cancel_btn_submit= ('[id="orddercancel_btn_submit"]');
const ticket_creation_text = ('[class="column main"]>div:nth-child(4) p');
//7
const return_button_org_order_42 = ('[id="return-order-1690042"]');//1690042//bond
const wrong_order_shipping_adress_option_42 = ('[id="order-return-reason-1690042"]');
const send_button_for_return_org_order_42 = ('[id="order-return-submit-1690042"]');
const return_org_order_result_42 = ('[id="return-result-1690042"]');
//9
const view_button_46 = ('tr:nth-child(2) [class="order-view"]');//1690046//bond
const cancel_button_near_item_46 = ('[class="order-canel cancel-1690046-730"]');
const order_return_46 = ('[id="order-return-ticket-modal-exist"]');
//10
const return_button_near_item_46 = ('[id="item-return-730"]');//1690046//bond
const wrong_order_shipping_adress_option_46 = ('[id="item-can-return-730"] select');
const send_button_near_item_46 = ('[id="item-can-return-730"] input');
const return_success_message = ('[class="return-success-msg-inner"]');
//11
const view_button_40 = ('tr:nth-child(7) [class="order-view"]');//1690040//bond
const cancel_button_near_item_40 = ('[class="order-canel cancel-1690040-723"]');
//12
const return_button_near_item_40 = ('[id="item-return-723"]');
const wrong_order_shipping_adress_option_40 = ('[id="item-can-return-723"] select');
const send_button_near_item_40 = ('[id="item-can-return-723"] input');
const return_success_message_40 = ('[class="return-success-msg-inner"]');
//13
const ticket_content = ('div>div:nth-child(3) [class="ticket-content"]');
//15
const status_action = ('td:nth-child(6) [order-content-id="542"][class="order-status-popup"]');

//kwa99604@cdfaq.com Rt!324gfR
//ttq59187@cdfaq.com AsdFGghjkl1

class ReturnAndCancelPage {

    async selectWrongOrderShippingAdressOptoinByAttribute(locator, text) {
        let qwe = await $(locator);
        await page.waitForDisplayed(qwe);
        await qwe.selectByAttribute('value',text);
    }


    async clickCancelButton() {
        await page.waitForDisplayed(cancel_button_1);
        await page.click(cancel_button_1);
    }

    async clickPlacedOrderByMistakeOptoin() {
        await page.click(placed_order_by_mistake_optoin_1);
    }

    async clickSendButton() {
        await page.click(send_button);
    }

    //2
    async clickCancelButtonOrgOrder() {
        await page.waitForDisplayed(cancel_button_org_order);
        await page.click(cancel_button_org_order);
    }

    async clickPlacedOrderByMistakeOptoin2() {
        await page.waitForDisplayed(placed_order_by_mistake_optoin_2);
        await page.click(placed_order_by_mistake_optoin_2);
    }

    async clickSendButtonCancelOrgOrder() {
        await page.click(send_button_cancel_org_order);
    }

    async isDisplayedRCORT(){
        await (expect(page.isdisplayed(return_cacnel_order_request_ticket)));
    }

    //3
    async clickReturnButton() {
        await page.waitForDisplayed(return_button_for_17);
        await page.click(return_button_for_17);
    }

    async clickWrongOrderShippingAdressOptoin() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(wrong_order_shipping_adress_option_17, 'Wronly Item Ordered');
    }

    async clickSendButtonForReturn() {
        await page.click(send_button_for_return);
    }
    //4
    async clickReturnButtonOrgOrder() {
        await page.waitForDisplayed(return_button_org_order);
        await page.click(return_button_org_order);
    }

    async clickWrongOrderShippingAdressOptoin12() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(wrong_order_shipping_adress_option_12, 'Wronly Item Ordered');
    }

    async clickSendButtonForReturnOrgOrder() {
        await page.click(send_button_for_return_org_order);
    }

    async isDisplayedReturnOrgOrderResult(){
        await (expect(page.isdisplayed(return_org_order_result)));
    }

    //5
    async clickCancelButton43() {
        await page.waitForDisplayed(cancel_button_43);
        await page.click(cancel_button_43);
    }

    async selectPlacedOrderByMistakeOptoin43() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(placed_order_by_mistake_optoin_43, 'Placed order by Mistake');
    }

    async clickSendButtonForCancel() {
        await page.click(send_button_for_cancel);
    }

    async isDisplayedCancelButtonResult43(){
        await (expect(page.isdisplayed(cancel_button_result_43)));
    }

    //6
    async clickCancelButtonOrgOrder40() {
        await page.waitForDisplayed(cancel_button_org_order_40);
        await page.click(cancel_button_org_order_40);
    }

    async clickPlacedOrderByMistakeOptoin40() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(placed_order_by_mistake_optoin_40, 'Placed order by Mistake');
    }

    async clickSendButtonForCancel40() {
        await page.click(send_button_for_cancel_40);
    }

    async enterOrdderCancelPhone40(){
        await page.waitForDisplayed(ordder_cancel_phone_40);
        await page.setvalue(ordder_cancel_phone_40,ordder_cancel_phone_text);     
    }

    async enterOrdderCancelRemarks40(){
        await page.setvalue(ordder_cancel_remarks_40,ordder_cancel_remarks_text);     
    }

    async clickOrdderCancelBtnSubmit() {
        await page.click(ordder_cancel_btn_submit);
    }

    async isDisplayedTicketCreationText(){
        await (expect(page.isdisplayed(ticket_creation_text)));
    }
    //7
    async clickReturnButton42() {
        await page.waitForDisplayed(return_button_org_order_42);
        await page.click(return_button_org_order_42);
    }

    async clickWrongOrderShippingAdressOptoin42() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(wrong_order_shipping_adress_option_42, 'Wrong Order Shipping Adress');
    }

    async clickSendButtonForReturn42() {
        await page.click(send_button_for_return_org_order_42);
    }

    async isDisplayedReturnResult42(){
        await (expect(page.isdisplayed(return_org_order_result_42)));
    }
    //8
    async clickShippingAddressIsWrongOptoin40() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(placed_order_by_mistake_optoin_40, 'Shipping Address is wrong');
    }
    //9
    async clickViewButton46() {
        await page.waitForDisplayed(view_button_46);
        await page.click(view_button_46);
    }

    async clickCancelButtonNearItem46() {
        await page.waitForDisplayed(cancel_button_near_item_46);
        await page.click(cancel_button_near_item_46);
    }

    async isDisplayedOrderReturn46(){
        await (expect(page.isdisplayed(order_return_46)));
    }
    //10
    async clickReturnButtonNearItem46() {
        await page.waitForDisplayed(return_button_near_item_46);
        await page.click(return_button_near_item_46);
    }

    async clickWrongOrderShippingAdressOptoin46() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(wrong_order_shipping_adress_option_46, 'Wrong Order Shipping Adress');
    }

    async clickSendButtonNearItem46() {
        await page.click(send_button_near_item_46);
    }

    async isDisplayedReturnSuccessMessage(){
        await (expect(page.isdisplayed(return_success_message)));
    }
    //11
    async clickViewButton40() {
        await page.waitForDisplayed(view_button_40);
        await page.click(view_button_40);
    }

    async clickCancelButtonNearItem40() {
        await page.waitForDisplayed(cancel_button_near_item_40);
        await page.click(cancel_button_near_item_40);
    }
    //12
    async clickRerurnButtonNearItem40() {
        await page.waitForDisplayed(return_button_near_item_40);
        await page.click(return_button_near_item_40);
    }

    async clickWrongOrderShippingAdressOptoin40() {
        await this.selectWrongOrderShippingAdressOptoinByAttribute(wrong_order_shipping_adress_option_40, 'Wrong Order Shipping Adress');
    }

    async clickSendButtonNearItem40() {
        await page.click(send_button_near_item_40);
    }

    async isDisplayedReturnSuccessMessage40(){
        await (expect(page.isdisplayed(return_success_message_40)));
    }
    //13
    async isDisplayedTicketContent(){
        await (expect(page.isdisplayed(ticket_content)));
    }
    //15
    async clickStatusAction() {
        await page.waitForDisplayed(status_action);
        await page.click(status_action);
    }
    //16
    async urlTicketsCustomerView(){
        await (expect(page.urlChecking('tickets/customer/index/')));
    }

    async authorization(){
        await minicartpage.clickCloseSelectLanguageButton();
        await signuppage.clickCoockieButton();
        await checkoutpage.clickLoginItem();
        await checkoutpage.enterEmailSignIn();
        await checkoutpage.enterPasswordSignIn();
        await checkoutpage.clickSignInButton();
        await browser.url('https://www.sololuxury.com/ua-en/');
    }

    async bond_authorization(){
        await minicartpage.clickCloseSelectLanguageButton();
        await signuppage.clickCoockieButton();
        await checkoutpage.clickLoginItem();
        await checkoutpage.enterEmailSignInBond();
        await checkoutpage.enterPasswordSignInBond();
        await checkoutpage.clickSignInButton();
        await browser.url('https://www.sololuxury.com/ua-en/');
    }
}

module.exports = new ReturnAndCancelPage();