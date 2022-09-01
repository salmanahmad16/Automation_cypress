/// <reference types="cypress" />

describe("Demo commerce ", function () {

    it("Product check", function () {
        cy.visit("https://demo.nopcommerce.com/") // target site

        cy.get('[id="small-searchterms"]').type("Apple MacBook Pro 13-inch")    /// Enter product
        
        cy.get('button[type="submit"]').click()     // click on search button
        cy.wait(3000)
        cy.get('.product-box-add-to-cart-button').click()    // click on Add to card 
        cy.get('#add-to-cart-button-4').click()
        cy.wait(3000)
        cy.get('[id="product_enteredQuantity_4"]').clear().type("3")
        cy.wait(3000)
        cy.get('[id="add-to-cart-button-4"]').click()
        cy.wait(3000)
        cy.get('.content > a').click()
        cy.wait(3000)
        cy.get('.product-unit-price').contains("$1,800.00")





    })
})