export class Tabs{

    new_tab_btn = 'div#browserWindows>div button[id=tabButton]'
    new_window_btn = '[id=windowButton]'
    new_window_message_btn = '[id=messageWindowButton]'

    new_tab_message = '[id=sampleHeading]'


    new_tab_click(){
        cy.get(this.new_tab_btn).invoke("removeAttr", 'target').click()
        cy.url().should("include", 'sample')
        cy.wait(3000)
        cy.get(this.new_tab_message).should("have.text", 'This is a sample page')
        cy.go('back');

    }






}