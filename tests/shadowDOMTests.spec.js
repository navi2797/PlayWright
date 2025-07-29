const{test, expect} = require("@playwright/test")
const homePage = require("../pages/homePage")

let homepage

test.describe("shaoow test cases", ()=>{
    test.beforeEach(async({page})=>{
        homepage = new homePage(page)
        await homepage.gotoHomePage()
        await homepage.gotoshadowdom()
    })

    test("sahdow dom",async()=>{
        await expect(homepage.page.locator("#content h1")).toContainText("Simple template")
        await expect(homepage.page.locator("my-paragraph >> span[slot='my-text']")).toContainText("Let's have some different text!")

    })
})