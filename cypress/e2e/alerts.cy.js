import { Alerts } from "./pages/alerts_page";

const alerts = new Alerts()

describe("Handling with alerts", function () {

    it("Loading Target URL ", function(){
        cy.visit('https://demoqa.com/alerts')
    })

    it("Click on 1st alert", function () {

        alerts.click(alerts.click_btn_for_alert)
        cy.on('window:alert', (text) => {
            expect(text).to.contains("You clicked a button")
        })

    })
    it("Click on 2nd alert", function () {

        alerts.click(alerts.click_btn_5_second_alert)
        cy.wait(8000)
        cy.on('window:alert', (text) => {
            expect(text).to.contains("This alert appeared after 5 seconds")
        })


    
    })
    it("Click on 3rd alert", function () {

        alerts.click(alerts.confirm_box_btn)
        cy.wait(2000)
        cy.on('window:confirm', (text) => {
            expect(text).to.contains("Do you confirm action?")
            return false;
        })
        cy.get(alerts.confirm_box_message).contains("You selected")
    })
    it("Click on 4th Prompt Button", function(){
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('Salman Ahmad')
            alerts.click(alerts.prompt_btn)
            

        })
      


    })
   
})