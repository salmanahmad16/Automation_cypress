/// <reference types="cypress" />

describe("Element Interaction 2", function(){

    it("Redirect to Target Page", function(){

        cy.visit("https://demoqa.com/text-box")  // target url
        
        cy.url().should('include', 'demoqa') // validate the URL 'demoqa'

        cy.get('input[id=userName]').should('be.visible').clear().type("Salman Ahmad")
        cy.get('input[id=userEmail]').should('be.visible').type("sulmanmansha@gmail.com")
        cy.get('[id=currentAddress]').should('be.visible').clear().type("78-B muslim nagar")
        cy.get('[id=permanentAddress]').should('be.visible').clear().type("78-B muslim nagar housing society raiwind road lahore")
        cy.wait(4000)
        cy.get('button[id=submit]').should('be.visible').click() 

    })




})