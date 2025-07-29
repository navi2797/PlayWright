class javascript_alerts{
    constructor(page){
        this.page = page
        this.loca_heading1 = page.locator("div[class='example'] h3")
        this.loca_para = page.locator("div[class='example'] h3 p")
        this.loc_java_alert = page.locator("button[onclick='jsAlert()']")
        this.loc_java_confirm = page.locator("button[onclick='jsConfirm()']")
        this.loc_java_prompt = page.locator("button[onclick='jsPrompt()']")
        this.loc_result = page.locator("#result")
    }

    async click_alert(){
        await this.loc_java_alert.click()
    }

    async click_confirm(){
        await this.loc_java_confirm.click()
    }

    async click_prompt(){
        await this.loc_java_prompt.click()
    }
    
}
module.exports = javascript_alerts