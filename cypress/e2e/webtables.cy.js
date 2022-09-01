import { WebtablePage } from "./pages/webtable_page"

const webtable = new WebtablePage()



describe("Web Tables", function () {



    it("Target Web Page", function () {
        cy.visit("https://demoqa.com/webtables")
        cy.url().should("include", 'demoqa')
        

    })

    it.skip("Add Record", function () {
        

        webtable.clickBtn(webtable.add_record_btn)
        webtable.sendValue(webtable.firstName_textbox,"Salman")
        webtable.sendValue(webtable.lastName_textbox,"Ahmad")
        webtable.sendValue(webtable.email_textbox,"Sulmanmansha@gmail.com")
        webtable.sendValue(webtable.age_textbox,"28")
        webtable.sendValue(webtable.salary_textbox,"90000")
        webtable.sendValue(webtable.department_textbox, "QA")
        cy.wait(3000)
        webtable.clickBtn(webtable.submit_record_btn)
        cy.wait(3000)
        
        let checkValue = webtable.isVerifyExist(webtable.table_body, "Salman")
        assert.notStrictEqual(checkValue, "Salman", "Value Matched")




    })
    it.skip("Delete Last Added Record", function(){
        cy.wait(2000)
        webtable.deleteAllRecord()
        webtable.verifyDelete()
    
    })

    it("Search a record", function(){
        webtable.sendValue(webtable.search_box, "Cierra")
        cy.wait(2000)
        let checkValue = webtable.isVerifyExist(webtable.table_body, "Cierra")
        assert.notStrictEqual(checkValue, "Cierra", "Value Matched")



    })

   
        
        



    


})