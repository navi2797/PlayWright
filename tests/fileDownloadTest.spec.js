const {test,expect} = require("@playwright/test")
const homePage = require("../pages/homePage")
const testfileDownload = require("../pages/fileDownload")

test.describe("file download",()=>{
    test("download",async({page})=>{
        const homepage = new homePage(page)
        const fildownload = new testfileDownload(page)
        await homepage.gotoHomePage()
        await homepage.gotodownload()
        await fildownload.downloadfile()
    })
})