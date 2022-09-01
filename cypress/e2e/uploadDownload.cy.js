import { UploadDownload } from "./pages/uploadDownload_page";

const uploaddownload = new UploadDownload()

describe("Upload and download", function(){
    it("Target URL", function () {
        cy.visit("https://demoqa.com/upload-download")
        cy.url().should("include", "demoqa")
    })

    it("Download the file", function () {
        uploaddownload.download()
    })

    it("Upload the file", function(){
        uploaddownload.upload("leo.png")
        cy.wait(3000)
        uploaddownload.isVerify('leo.png')
    })





})