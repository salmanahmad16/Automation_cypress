/// <reference types="cypress" />

describe("Element Interaction With Radio Buttons",function(){

    it("Visit Target Url",function(){
        cy.visit("https://demoqa.com/radio-button")
        cy.url().should('include','demoqa')
    })

    it("Should Check Radio Button",function(){
        cy.get('label[for=yesRadio]').should('be.visible').and('not.be.checked').click()
        cy.get('span.text-success').contains('Yes')
        cy.get('label[for=impressiveRadio]').should('be.visible').and('not.be.checked').click()
        cy.get('span.text-success').contains('Impressive')
        cy.get('[for=noRadio]').should("not.be.enabled")

    })



})