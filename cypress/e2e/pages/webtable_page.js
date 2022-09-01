export class WebtablePage{

    add_record_btn = 'button[id=addNewRecordButton]'
    firstName_textbox = '[id=firstName]'
    lastName_textbox = '[id=lastName]'
    email_textbox = 'input[id=userEmail]'
    age_textbox = 'input[id=age]'
    salary_textbox = 'input[id=salary]'
    department_textbox = '[id=department]'
    submit_record_btn = 'button[id=submit]'

    search_box = '[id=searchBox]'
    table_body = '.rt-tbody'

    first_delete_record = '[id=delete-record-1]'

    delete_ids_array = ["[id=delete-record-1]", "[id=delete-record-2]", "[id=delete-record-3]"]



    clickBtn(locator){
        cy.get(locator).should('be.visible').click()
    }
    sendValue(locator, value){
        cy.get(locator).should('be.visible').clear().type(value)

    }
    isVerifyExist(locator, value){
        var returnedValue = cy.get(locator).contains(value)
        return returnedValue
    
    }
    isVerifyNotExist(locator, value){
        cy.get(locator).should("be.empty")
        cy.log("Value Deleted")
    }
    
    deleteAllRecord(){
        for(let i = 0; i < this.delete_ids_array.length; i++){
            cy.get(this.delete_ids_array[i]).click();
        }
    }

    verifyDelete(){
        cy.get('.rt-tr-group').should("not.contain", "Cierra")
    }
        
    




}