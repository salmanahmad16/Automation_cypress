export class Login{

    email_text = '[id=email]'
    password_text = '[id=password]'
    sign_in_btn = '[data-testid=signin-button-button-text]'
    login_error_message = '[data-testid=signin-button-error-message]'
    logout_option_btn = '[data-testid=logout]'
    logout_btn = '[value=Logout]'



    goToLoginPage(){
        cy.wait(2000)
        cy.get('[aria-controls=simple-menu]').click()
        cy.contains("Login").click()
    }

    handleCookiesAlertMessage(){
        try{
            cy.get('[id=CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection]').click()
        }
        catch (e) {

        }

    }

    clickOnLogout(){
        cy.get(this.logout_option_btn).should("be.visible").click()
        cy.wait(2000)
        cy.get(this.logout_btn).should("be.visible").click()
    }

    enterEmail(value){
        cy.get('#email').clear().type(value)
    }
    enterPassword(value){
        cy.get('#password').clear().type(value)
    }
    clickOnLogin(){
        cy.get(this.sign_in_btn).click()
    }
    validate_message(message){
        cy.get(this.login_error_message).should("have.text", message)
    }

    
}