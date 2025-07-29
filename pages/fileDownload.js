class testfileDownload{
    constructor(page){
        this.page = page
        this.loc_clic_downloadfile = page.locator("//a[normalize-space()='testFile1.txt']")

    }
    async downloadfile(){
        const[download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.loc_clic_downloadfile.click()
        ])
        await download.saveAs("D:\\Automation\\Playwright\\downloads\\sss.txt")
    }
}
module.exports = testfileDownload