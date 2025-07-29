const{test,expect} = require("@playwright/test")
const homePage = require("../pages/homePage")
const iframeclass =  require("../pages/iframe")

test.describe("iframe test cases",()=>{
    test("check text in iframe @iframe",async({page})=>{
        const homepage = new homePage(page)        
        const iframein = new iframeclass(page)
        await homepage.gotoHomePage()
        await homepage.page.screenshot({path:"naveen.png",fullpage:true})
        await homepage.gotoiframe()
        await iframein.gettextfromiframe()

    })
})