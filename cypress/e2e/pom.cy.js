
import { LoginPage } from "./pages/login_page"


const loginPage = new LoginPage()


describe("All login tests", function () {

    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Login Test 1', function () {

        loginPage.enterUseremail("Admin")
        loginPage.enterUserPassword("admin123")
        loginPage.clickLoginBtn()
        cy.get('.oxd-userdropdown-tab').click()

    })
    it('Login Test 2', function () {

        loginPage.enterUseremail("Admin")
        loginPage.enterUserPassword("admin123456")
        loginPage.clickLoginBtn()
        cy.get('.oxd-userdropdown-tab').click()


    })

})

