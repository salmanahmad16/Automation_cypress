export class CompleteForm{

    first_name_text_box = '[ng-model=FirstName]'
    last_name_text_box = '[ng-model=LastName]'
    address_text_box = '[ng-model=Adress]'
    email_text_box = 'input[type=email]'
    phone_num_text_box = 'input[type=tel]'
    gender_radio = '[value=Male]'
    hobbies_checkBox = 'input[type=checkbox]'
    uncheck_hobbies_checkBox = '[id=checkbox1]'
    language = '[id=msdd]'
    language_options = '[class=ui-corner-all]'
    skills_select= '[id=Skills]'
    
    dob_year = '[id=yearbox]'
    dob_month = '[ng-model=monthbox]'
    dob_day = '[id=daybox]'

    enter_year = '1992'
    enter_month = 'August'
    enter_day = "16"


sendValue(locator, value){
    cy.get(locator).should("be.visible").clear().type(value)
}
clickOn(locator){
    cy.get(locator).should("be.visible").click()
}
selectHobbies(){
    cy.get(this.hobbies_checkBox).check(['Cricket', 'Movies'])
}
unSelectHobbies(value){
    cy.get(this.uncheck_hobbies_checkBox).uncheck().should("not.be.checked").and("have.value", value)
}
selectLanguage(locator, value){
    cy.get(this.language_options).should("be.visible").should("have.text", value)
}
selectSkills(locator){
    cy.get(this.skills_select).select("C++").should("have.value", "C++")
}
selectCountry(){
    cy.get("[aria-labelledby=select2-country-container]").click()
    cy.get('[role=textbox]').type("Ind")
    cy.get('[role=textbox]').type('{enter}')
}

dateOfBirth(){
    cy.get(this.dob_year).select(this.enter_year).should("have.value", this.enter_year)
    cy.get(this.dob_month).select(this.enter_month).should("have.value", this.enter_month)
    cy.get(this.dob_day).select(this.enter_day).should("have.value", this.enter_day)


}

}