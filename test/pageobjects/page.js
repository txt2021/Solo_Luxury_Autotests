
class Page {  

    async click(locator){
        await $(locator).click();
    }

    async setvalue(locator,text){
        await ((await $(locator)).addValue(text));
    }

    async isdisplayed(locator){
        await ((await $(locator)).toBeDisplayed());
    }

    async checkElement(locator,text) {
        await ((await $(locator)).toHaveText(text));
    }

    async urlChecking(text){
        await (await (browser).toHaveUrlContaining(text));
    }

    async scrollIntoView(locator){
        await ((await $(locator)).scrollIntoView());
    }
    
    async hover(locator){
        await ((await $(locator)).moveTo());
    }

  
    async isdisplayedinViewPost(locator){
        await ((await $(locator)).isDisplayedInViewport());
    }

}
module.exports = new Page()