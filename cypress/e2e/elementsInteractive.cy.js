/// <reference types="cypress" />

describe("Element Interaction", function(){

    it("verify input and radio button",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // visit url
        cy.url().should("include","opensource-demo") // verify URL should include 'opensource-demo'

        cy.get("[name=username]").should("be.visible").and("be.enabled").type("Admin") // validate the existance of web element
        cy.get("[name=password]").should("be.visible").and("be.enabled").type("admin123")  // validate the existance of web elemen
        
        cy.get('button[type="submit"]').should('be.visible').click() // validate the login button and click login

        cy.title().should('eq', 'OrangeHRM')    // Title Verification


    })

})