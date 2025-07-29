class iframeclass{
    constructor(page){
        this.page = page
        this.loc_heading = "//h3"
        this.iframelocator = "#mce_0_ifr"
    }
    
    async gettextfromiframe(){
        const frameElement = await this.page.waitForSelector(this.iframelocator)
        const frame = await frameElement.contentFrame()
        const title = await frame.title()
        console.log(`title of the iframe page is ${title}`)
        const text = await frame.locator('//p').textContent()
        console.log(text)
    }
}
module.exports = iframeclass