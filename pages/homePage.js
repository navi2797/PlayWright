//const {constants} = require("../utility/constants")
//const constants = new constants()
class homePage{
    constructor(page){
        this.page =page
        this.title = 'The Internet'
        this.url = 'https://the-internet.herokuapp.com/'
        this.homeheading1 = 'Welcome to the-internet'
        this.homeheading2 = 'Available Examples'
        this.linkslist = ["A/B Testing","Add/Remove Elements","Basic Auth (user and pass: admin)","Broken Images","Challenging DOM","Checkboxes","Context Menu","Digest Authentication (user and pass: admin)","Disappearing Elements","Drag and Drop","Dropdown","Dynamic Content","Dynamic Controls","Dynamic Loading","Entry Ad","Exit Intent","File Download","File Upload","Floating Menu","Forgot Password","Form Authentication","Frames","Geolocation","Horizontal Slider","Hovers","Infinite Scroll","Inputs","JQuery UI Menus","JavaScript Alerts","JavaScript onload event error","Key Presses","Large & Deep DOM","Multiple Windows","Nested Frames","Notification Messages","Redirect Link","Secure File Download","Shadow DOM","Shifting Content","Slow Resources","Sortable Data Tables","Status Codes","Typos","WYSIWYG Editor"]
        this.addlinktext = "Fork me on GitHub"

        this.loc_head1 = page.locator("//h1[@class='heading']")
        this.loc_head2 = page.locator("//h2")
        this.loc_addlink = page.locator("//img[@src='/img/forkme_right_green_007200.png']")
        this.loc_linklist = page.locator("#content ul li")
        this.loc_click_checkbox = page.locator("//a[normalize-space()='Checkboxes']")
        this.loc_click_javscriptalert = page.locator("//a[normalize-space()='JavaScript Alerts']")
        this.loc_click_upload = page.locator("//a[normalize-space()='File Upload']")
        this.loc_click_download = page.locator("//a[normalize-space()='File Download']")
        this.loc_shadowpage = page.locator("//a[normalize-space()='Shadow DOM']")
        this.loc_iframepage = page.locator("//a[normalize-space()='WYSIWYG Editor']")
    }

    async gotoHomePage(){
        await this.page.goto(this.url)
    }

    async gotocheckbox(){
        await this.loc_click_checkbox.click()
    }

    async pageclose(){
        this.page.close()
    }

    async gotoJavascript(){
        await this.loc_click_javscriptalert.click()
    }

    async gotoupload(){
        await this.loc_click_upload.click()
    }

    async gotodownload(){
        await this.loc_click_download.click()
    }
    
    async gotoshadowdom(){
        await this.loc_shadowpage.click()
    }
    async gotoiframe(){
        await this.loc_iframepage.click()
    }
}

module.exports = homePage