/// <reference types = "cypress-downloadfile"/>

export class UploadDownload{


    download_btn = '[id=downloadButton]'
    upload_btn = '[id=uploadFile]'
    upload_text_message = '[id=uploadedFilePath]'


    download(){
        cy.get(this.download_btn).click()

    }

    upload(value){
        cy.get(this.upload_btn).attachFile(value)
    }

    isVerify(value){
        cy.get(this.upload_text_message).contains(value)

    }




}