const {test,expect} = require("@playwright/test")
const homePage = require("../pages/homePage")
//const {constants} = require("/../utility/constants")
let homepage
test.describe("Verify Page Contents",()=>{

    test.beforeEach(async({page})=>{
        homepage = new homePage(page)
        await homepage.gotoHomePage()
    })

    test.afterEach(async()=>{
        //const homepage = new homePage(page)
        await homepage.page.close()
    })

    test("verfiy Title @smoke",async()=>{
        
        await expect(homepage.page).toHaveTitle(homepage.title)

    })

    test("verfiy heading1",async()=>{
        //const homepage = new homePage(page)
        //await homepage.gotoHomePage()
        await expect(homepage.page).toHaveTitle(homepage.title)
        await expect(homepage.loc_head1).toContainText(homepage.homeheading1)
        //homepage.page.close()

    })

    test("verfiy heading2",async()=>{
        //const homepage = new homePage(page)
        //await homepage.gotoHomePage()
        await expect(homepage.page).toHaveTitle(homepage.title)
        await expect(homepage.loc_head2).toContainText(homepage.homeheading2)
        //homepage.page.close()
    })

    test("verfiy list of links",async()=>{
        //const homepage = new homePage(page)
        //await homepage.gotoHomePage()
        let lent = homepage.linkslist.length
        const obj_loc_linklist = homepage.loc_linklist
        console.log(lent)
        for(let i=0;i<lent;i++){
            console.log(homepage.linkslist[i])
            //console.log(obj_loc_linklist.nth(i).innerText())
            expect(await obj_loc_linklist.nth(i).innerText()).toBe(homepage.linkslist[i])
        }
        await expect(homepage.loc_addlink).toHaveAttribute('alt','Fork me on GitHub')
        //homepage.page.close()

    })

})
