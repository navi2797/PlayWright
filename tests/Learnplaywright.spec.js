const{chromium} = require("playwright");
const{test,expect} = require("@playwright/test");

test("new browser",async ()=>{
    console.log("test Start ..")
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await context.tracing.stop({path:'trace.zip'})
    await context.tracing.start({screenshot:true,snapshot:true})
    console.log("https://opensource-demo.orangehrmlive.com/?")
    await page.goto("https://opensource-demo.orangehrmlive.com/?")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button",{'name':' Login '}).click()
    await page.waitForSelector(".oxd-topbar-header-title")
    //await expect(page.locator(".oxd-userdropdown-name")).toHaveText("Rajesh Ekk")
    const title = await page.title()
    console.log(title)
    expect("Naveen").toBe("Naveen")
    await context.storageState({path:"Authstate.json"})
    await context.tracing.stop({path:'trace.zip'})
    await browser.close()
})

test.describe.configure({mode:'serial'})
test.describe("ddd",()=>{
    test.use({storageState:"Authstate.json"})
    test("without login, saved session",async({page})=>{
        console.log("test case without login, saved session")
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await page.waitForSelector(".oxd-topbar-header-title")
        //await expect(page.locator(".oxd-userdropdown-name")).toHaveText("Rajesh Ekk")
        expect("ssss").toBe("ssss")
    })
})