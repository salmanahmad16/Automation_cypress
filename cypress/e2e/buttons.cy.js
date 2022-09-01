import { ButtonPage } from "./pages/buttons_page";

const buttons = new ButtonPage()

describe("Buttons Click Functions", function(){

    it("Target Url", function(){
        cy.visit("https://demoqa.com/buttons")
        cy.url().should("include", "demoqa")
    })

    it("Buttons Clicks",function(){

        buttons.double_click()
        buttons.isVerifyExist(buttons.double_click_message, "You have done a double click")
        
        buttons.right_click()
        buttons.isVerifyExist(buttons.right_click_message, "You have done a right click")
        

        buttons.dynamic_click()
        buttons.isVerifyExist(buttons.dynamic_click_message, "You have done a dynamic click")

       


    })




})