import { CompleteForm } from "./pages/CompleteForm_page";

const form = new CompleteForm()

describe("Fill Complete Form", function(){
    it("Load Target Page", function(){
        cy.visit("https://demo.automationtesting.in/Register.html")
    })
    it.skip("Fill Text Fields", function(){
        cy.wait(3000)
        form.sendValue(form.first_name_text_box, "Salman")
        form.sendValue(form.last_name_text_box, "Ahmad")
        form.sendValue(form.email_text_box, "Sulmanmansha@gmail.com")
        form.sendValue(form.address_text_box, "78-b Muslim Nagar")
        form.sendValue(form.phone_num_text_box, "03314412354")
        cy.wait(3000)
        form.clickOn(form.gender_radio)
        cy.wait(3000)
        form.selectHobbies()
        cy.wait(3000)
        form.unSelectHobbies("Cricket")
        cy.wait(3000)

        
    })

    it("DropDowns and remaining form", function(){

        // form.clickOn(form.language)
        // form.selectLanguage("Hindi")
        form.selectSkills()
        form.selectCountry()
        form.dateOfBirth()



    })
})