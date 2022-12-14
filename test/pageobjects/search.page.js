const page = require('./page')


const search_text = 'Shoes';
const search_error_message = ('[id="authenticationPopup"]~div h3');
const search_error_text = ('It Seems like we have nothing to show for this Search');

class SeacrhPage {

    async urlSearchChecking(){
        await (expect(page.urlChecking(search_text)));
    }   

    async urlEmptySearchChecking(){
        await (expect((page.urlChecking(search_text)==false)));
    }   

    async isErrorSearcgMessageVisible(){
        await (expect(page.isdisplayed(search_error_message)));
        }

    async isErrorSearchMessageCorrect(){
        await (expect(page.checkElement(search_error_message,search_error_text)));
        }

}

module.exports = new SeacrhPage();