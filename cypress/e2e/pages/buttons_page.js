export class ButtonPage{
    double_click_btn = '[id=doubleClickBtn]'
    right_click_btn = '[id=rightClickBtn]'
    click_me_btn = '.col-12.mt-4.col-md-6 .mt-4:nth-of-type(3)>button'

    double_click_message = '[id=doubleClickMessage]'
    right_click_message = '[id=rightClickMessage]'
    dynamic_click_message = '[id=dynamicClickMessage]'


    double_click(){
        cy.wait(3000)
        cy.get(this.double_click_btn).dblclick()

    }

    right_click(){
        cy.wait(3000)
        cy.get(this.right_click_btn).rightclick()
    }

    dynamic_click(){
        cy.wait(3000)
        cy.get(this.click_me_btn).click()
    }

    isVerifyExist(locator, value){
        cy.get(locator).should("have.text", value)


    }



}