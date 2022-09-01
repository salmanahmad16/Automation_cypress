export class LoginPage{

    user_email_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    user_password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_btn = '.oxd-button'

    enterUseremail(useremail){
        cy.get(this.user_email_textbox).type(useremail)
    }
    enterUserPassword(password){
        cy.get(this.user_password_textbox).type(password)
    }
    clickLoginBtn(){
        cy.get(this.login_btn).click()
    }

}