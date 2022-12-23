const signuppage = require('../pageobjects/signup.page') 
const mainpage = require('../pageobjects/main.page'); 
const minicartpage = require('../pageobjects/minicart.page');
const checkoutpage = require('../pageobjects/checkout.page');  
const returnandcancelpage = require('../pageobjects/return_and_cancel.page');  


beforeEach(async () => {
    await browser.url('/');
});

afterEach(async () => {
    await browser.reloadSession();
});

describe('Return and cancel Tests', () => {        
    it('Check the order is eligible for cancel', async() => { //1
        await returnandcancelpage.authorization();

        await checkoutpage.clickLoginItem();
        await checkoutpage.clickMyAccountButton();
        await checkoutpage.clickMyOrdersSection();
        await returnandcancelpage.clickCancelButton();
        await returnandcancelpage.clickPlacedOrderByMistakeOptoin();
        browser.setupInterceptor();
        await returnandcancelpage.clickSendButton();

        await browser.expectRequest('GET', 'section/load/', 200);
    });

    it('Check the order is not eligible for cancel', async() => { //2
        await returnandcancelpage.authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickCancelButtonOrgOrder();//5  //1690012
        await returnandcancelpage.clickPlacedOrderByMistakeOptoin2();//6
        await returnandcancelpage. clickSendButtonCancelOrgOrder();//7
        await returnandcancelpage.isDisplayedRCORT();//8
    });

    it('Check the order is eligible for return', async() => { //3
        await returnandcancelpage.authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickReturnButton();//5
        await returnandcancelpage.clickWrongOrderShippingAdressOptoin();//6
        browser.setupInterceptor();//7
        await returnandcancelpage.clickSendButtonForReturn();//8

        await browser.expectRequest('POST', 'orderreturn/ajax/sendReturn/', 200);//9
    });

    it('Check the order is not eligible for return', async() => { //4
        await returnandcancelpage.authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await browser.pause(1000);
        await returnandcancelpage.clickReturnButtonOrgOrder();//5
        await returnandcancelpage.clickWrongOrderShippingAdressOptoin12();//6
        await returnandcancelpage.clickSendButtonForReturnOrgOrder();//7
        await returnandcancelpage.isDisplayedReturnOrgOrderResult();//8
    });

    it('Check the ticket creation after the appropriate cancel request', async() => { //5
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await browser.pause(1000);
        await returnandcancelpage.clickCancelButton43();//5
        await returnandcancelpage.selectPlacedOrderByMistakeOptoin43();//6
        await returnandcancelpage.clickSendButtonForCancel();//7

        await returnandcancelpage.isDisplayedCancelButtonResult43();//8
    });

    it('Check the ticket creation after the inappropriate cancel request', async() => { //6
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickCancelButtonOrgOrder40();//5
        await returnandcancelpage.clickPlacedOrderByMistakeOptoin40();//6
        await returnandcancelpage.clickSendButtonForCancel40();//7
        
        await returnandcancelpage.enterOrdderCancelPhone40();//8
        await returnandcancelpage.enterOrdderCancelRemarks40();//9
        await returnandcancelpage.clickOrdderCancelBtnSubmit();//10
        await returnandcancelpage.isDisplayedTicketCreationText();//11
    });

    it('Check the ticket creation after the appropriate return request', async() => {//7
        await returnandcancelpage.bond_authorization();//1
        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickReturnButton42();//5
        await returnandcancelpage.clickWrongOrderShippingAdressOptoin42();//6
        await returnandcancelpage.clickSendButtonForReturn42();//7
        await returnandcancelpage.isDisplayedReturnResult42();//8
    });

    it('Check the ticket creation after the inappropriate return request', async() => {//8
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickCancelButtonOrgOrder40();//5
        await returnandcancelpage.clickShippingAddressIsWrongOptoin40();//6
        await returnandcancelpage.clickSendButtonForCancel40();//7
        
        await returnandcancelpage.enterOrdderCancelPhone40();//8
        await returnandcancelpage.enterOrdderCancelRemarks40();//9
        await returnandcancelpage.clickOrdderCancelBtnSubmit();//10
        await returnandcancelpage.isDisplayedTicketCreationText();//11
    });

    it('Check the eligible cancel functionality for the item in the order', async() => {//9
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickViewButton46();//5
        await returnandcancelpage.clickCancelButtonNearItem46();//6
        //7
        //8
        await returnandcancelpage.isDisplayedOrderReturn46();//9
    });

    it('Check the eligible return functionality for the item in the order', async() => {//10
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickViewButton46();//5
        await returnandcancelpage.clickReturnButtonNearItem46();//6
        await returnandcancelpage.clickWrongOrderShippingAdressOptoin46();//7
        await returnandcancelpage.clickSendButtonNearItem46();//8
        await returnandcancelpage.isDisplayedReturnSuccessMessage();//9
    });

    it('Check the not eligible cancel functionality for the item in the order', async() => {//11
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickViewButton40();//5
        await returnandcancelpage.clickCancelButtonNearItem40();//6
        //7
        //8
        //9
        await returnandcancelpage.isDisplayedOrderReturn46();//10
    });

    it('Check the not eligible return functionality for the item in the order', async() => {//12
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickViewButton40();//5
        await returnandcancelpage.clickRerurnButtonNearItem40();//6
        await returnandcancelpage.clickWrongOrderShippingAdressOptoin40();
        await returnandcancelpage.clickSendButtonNearItem40();
        //7
        //8
        //9
        await returnandcancelpage.isDisplayedReturnSuccessMessage40();//10
    });

    it('Check the ability to track the status of cancel ticket', async() => {//13
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyTicketsSection();//4
        await returnandcancelpage.isDisplayedTicketContent();
    });

    it('Check the ability to track the status of return ticket', async() => {//14
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyTicketsSection();//4
        await returnandcancelpage.isDisplayedTicketContent();
    });

    it('Check the track your order functionality', async() => {//15
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyOrdersSection();//4
        await returnandcancelpage.clickStatusAction();//5
    });

    it('Check the track your ticket functionality', async() => {//16
        await returnandcancelpage.bond_authorization();//1

        await checkoutpage.clickLoginItem();//2
        await checkoutpage.clickMyAccountButton();//3
        await checkoutpage.clickMyTicketsSection();//4
        await returnandcancelpage.urlTicketsCustomerView();//5
    });
})
