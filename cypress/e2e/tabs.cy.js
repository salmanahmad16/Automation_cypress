import { Tabs } from "./pages/tabs_page";

const tabs = new Tabs()

describe("Handling Tabs and Windows", function(){


    it("Target Url", function(){
        cy.visit("https://demoqa.com/browser-windows")
        cy.url().should("include", 'demoqa')
    })

    it("Tab new window", function(){
        tabs.new_tab_click()
       
    })






})