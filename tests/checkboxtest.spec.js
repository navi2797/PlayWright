const {test,expect} = require("@playwright/test")
const homePage = require("../pages/homePage")
const CheckBox = require("../pages/CheckBoxes")


test.describe("Check box validations",()=>{
    test("Test Checkbox1",async({page})=>{
        const homepage = new homePage(page)
        const checkbox = new CheckBox(page)
        homepage.gotoHomePage()
        await homepage.gotocheckbox()
        const header = await checkbox.getheader()
        expect(header).toBe(checkbox.heading)
        await checkbox.select_checkbox1()
        await expect(checkbox.loc_checkbox1).toBeChecked()

    })

    test("Test check box2",async({page})=>{
        const homepage = new homePage(page)
        const checkbox = new CheckBox(page)
        homepage.gotoHomePage()
        await homepage.gotocheckbox()
        const header = await checkbox.getheader()
        expect(header).toBe(checkbox.heading)
        await checkbox.select_checkbox2()
        await expect(checkbox.loc_checkbox2).toBeChecked()
    })
})