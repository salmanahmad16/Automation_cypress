import {SelectsDropdowns} from "./pages/select_page"

const sel = new SelectsDropdowns()

describe("Handling Select Dropbox", function(){
    it("Load Target URL", function(){
        cy.visit("https://demoqa.com/select-menu")
    })
    it("First Select Box", function(){
        cy.wait(3000)
        cy.get('#withOptGroup').click()
        cy.wait(3000)
        cy.get('.css-yk16xz-control>div>.css-1uccc91-singleValue').contains("A root option").click()
    })
})