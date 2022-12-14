
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
    

    async waitForDisplayed(locator){
        await ((await $(locator)).waitForDisplayed());
    }

    async isclickable(locator){
        await ((await $(locator)).toBeClickable());
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

    //await elem.dragAndDrop({ x: 100, y: 200 })

    async dragAndDrop(locator){
        await ((await $(locator)).dragAndDrop({ x: -100, y: 0 }));
    }   

  
    async isdisplayedinViewPost(locator){
        await ((await $(locator)).isDisplayedInViewport());
    }

}
module.exports = new Page()