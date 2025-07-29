const {test,expect}=require("@playwright/test")
const homePage = require("../pages/homePage")
const testFileUpload = require("../pages/fileUpload")

test.describe("file Upload",()=>{
    test("upload",async({page})=>{
        const homepage = new homePage(page)
        const FileUpload = new testFileUpload(page)
        const file = "D:\\Automation\\Playwright\\testFiles\\testFile1.txt"
        await homepage.gotoHomePage()
        await homepage.gotoupload()
        await FileUpload.uploadfile(file)
    })
})