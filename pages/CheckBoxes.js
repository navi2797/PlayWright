class CheckBox{
    constructor(page){
        this.page = page
        this.url = "https://the-internet.herokuapp.com/checkboxes"
        this.heading = "Checkboxes"
        this.checkbox1 = ' checkbox 1'
        this.checkbox2 = ' checkbox 2'
        this.loc_header = page.locator("div[class='example'] h3")
        this.loc_checkbox1 = page.locator("(//input[@type='checkbox'])[1]")
        this.loc_checkbox2 = page.locator("(//input[@type='checkbox'])[2]")
        
    }

    async getheader(){
        return await this.loc_header.textContent()
    }

    async select_checkbox1(){
        await this.loc_checkbox1.check()
    }

    async select_checkbox2(){
        await this.loc_checkbox2.check()
    }
}

module.exports = CheckBox

