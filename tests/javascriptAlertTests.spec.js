const {test, expect} = require("@playwright/test")
const homePage = require("../pages/homePage")
const javascript_alerts = require("../pages/javascript_alerts")

test.describe("Check the alerts",()=>{
    test("check alert",async({page})=>{
        const homepage = new homePage(page)
        const javascriptalerts = new javascript_alerts(page)

        await homepage.gotoHomePage()
        await homepage.gotoJavascript()

        const heading = await javascriptalerts.loca_heading1.textContent()
        expect(heading).toContain("JavaScript Alerts")
        // Alterts
        
        page.once('dialog',async dialog =>{
            process.stdout.write(dialog.message())
            process.stdout.write(dialog.type())
            expect(dialog.message()).toBe("I am a JS Alert")
            await dialog.accept()
        })
        await javascriptalerts.click_alert()
        //console.log("Naveen C"+await javascriptalerts.get_result())
        await expect(javascriptalerts.loc_result).toContainText("You successfully clicked an alert")
        //expect(await javascriptalerts.get_result()).toBe("You successfully clicked an alert")
        
        //Confirm - ok
        
        page.once('dialog',dialog=>{
            expect(dialog.message()).toBe("I am a JS Confirm")
            dialog.accept()
        })
        await javascriptalerts.click_confirm()
        await expect(javascriptalerts.loc_result).toContainText("You clicked: Ok")
        
        // Confirm - dismiss
        
        page.once('dialog',dialog=>{
            //expect(dialog.message()).toBe("I am a JS Confirm")
            dialog.dismiss()
        })
        await javascriptalerts.click_confirm()
        await expect(javascriptalerts.loc_result).toContainText("You clicked: Cancel")

        // prompt - fill 
        
        page.once('dialog',dialog=>{
            dialog.accept("Naveen")
        })
        
        await expect(javascriptalerts.loc_result).toContainText("You entered: Naveen")
        
    })
        
})