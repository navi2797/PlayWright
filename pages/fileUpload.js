const {path}=require("path")
class testFileUpload{
    constructor(page){
        this.page = page
        this.loc_upload = page.locator("#file-upload")
        this.loc_upload_button = page.locator("#file-submit")
    }

    async uploadfile(file){
        //filepath = path.resolve(__dirname,"testuploadFile.txt")
        await this.loc_upload.setInputFiles(file)
        await this.loc_upload_button.click()
    }
}

module.exports = testFileUpload