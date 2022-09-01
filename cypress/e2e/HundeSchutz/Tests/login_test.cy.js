import { Login } from "../Pages/login_page";
import { BasePage } from "../Pages/base_page";
import { MyPet } from "../Pages/myPet_page";

const login = new Login()
const base = new BasePage()
const pet = new MyPet()

describe("All Login Tests", function(){

    it("Target URL", function(){
        cy.visit("http://petention-web.s3-website.eu-central-1.amazonaws.com/")
        cy.wait(2000)
        login.handleCookiesAlertMessage()
        login.goToLoginPage()
    })
    
   
    it.skip("InValid Login with Wrong Email and Correct Password",function(){
        login.enterEmail("daimiric617@vasqa.com")
        login.enterPassword("123456")
        login.clickOnLogin()
        cy.wait(2000)
        login.validate_message("Could not find your account")
        cy.wait(2000)
    })

    it.skip("InValid Login with Correct Email and Wrong Password",function(){
        login.enterEmail("dimiric617@vasqa.com")
        login.enterPassword("1234567")
        login.clickOnLogin()
        cy.wait(2000)
        login.validate_message("Incorrect email or password")
        cy.wait(2000)
    })

    it.skip("Valid Login", function(){
        login.enterEmail("dimiric617@vasqa.com")
        login.enterPassword("123456")
        login.clickOnLogin()
        cy.wait(3000)
        cy.title().should('eq', "Petention")
        cy.wait(5000)
       // login.clickOnLogout()
        base.clickOn(pet.myPet_go_btn)
        cy.wait(8000)
        pet.deleteExisitingPet()
        pet.addNewPet("Humara Dog", "GermanSheffard")
       

    })

    it.skip("Validate Added Pet", function(){
        cy.wait(3000)
        pet.validateAddedPet("Humara Dog")
    })

    it("Update Pet Details", function(){
        cy.wait(3000)
        pet.updatePetDetails("Sub Ka Dog", "African")
    })
})