export class MyPet {


    myPet_go_btn = '[data-testid=dashboard-cards-my-pet-update-pet-button-primary-button]'
    delete_pet = '.jss87 > .MuiSvgIcon-root > path'
    add_new_pet_btn = '.MuiTypography-body1[style="color: rgb(87, 78, 73);"]'
    dog_radio_btn = '.MuiIconButton-label>input[value="Dog"]'
    cat_radio_btn = '.MuiIconButton-label>input[value="Cat"]'
    pet_name = '[name=animalName]'
    pet_dob = '[id="date-picker-dialog"]'
    pet_dob_ok_btn = '.MuiButton-textPrimary>span'
    pet_male_gender = '.MuiIconButton-label>[value="male"]'
    pet_female_gender = '.MuiIconButton-label>[value="female"]'
    pet_breed = '[name=breed]'
    add_pet_btn = '.MuiTypography-body1[style="color: rgb(255, 255, 255);"]'
    verify_added_pet = '.MuiTypography-displayBlock'

    // Update Pet
    click_on_exisiting_added_pet = '[data-testid=my-pet-Humara Dog-arrow-down]'
    click_on_my_pet = '[data-testid="my-pet-Humara Dog-sidebar-my-pet"]'
    pet_type_btn = '.MuiFormControl-root>label[for="listInput"]'
    select_pet_type = '[data-testid="my-animal-species-Dog"]'
    pet_gender_select_btn = '.MuiFormControl-root>label[for="listInput"]'
    Pet_gender_male = '[data-testid="my-animal-gender-Male"]'





    deleteExisitingPet(){
        cy.get(this.delete_pet).click()
    }


    addNewPet(name, breed){
        cy.wait(4000)
        cy.get(this.add_new_pet_btn).click()
        cy.wait(3000)
        cy.get(this.dog_radio_btn).click()
        cy.wait(2000)
        cy.get(this.pet_name).clear().should("be.visible").type(name)
        cy.wait(2000)
        cy.get(this.pet_dob).click()
        cy.wait(2000)
        cy.get(this.pet_dob_ok_btn).contains("OK").click()
        cy.wait(2000)
        cy.get(this.pet_male_gender).click()
        cy.wait(2000)
        cy.get(this.pet_breed).type(breed)
        cy.wait(2000)
        cy.get(this.add_pet_btn).click()
        cy.wait(4000)


    }

    validateAddedPet(name){
        cy.get('.MuiTypography-displayBlock').contains(name)
        cy.log("Verified - New Pet Added")
    }

    updatePetDetails(name, breed){

        cy.get(this.click_on_exisiting_added_pet).click()
        cy.wait(2000)
        cy.get(this.click_on_my_pet).should("have.value", "My Pet").click()
        cy.wait(2000)
        cy.get(this.pet_type_btn).should("have.text", "Type / Species").click()
        cy.get(this.select_pet_type).click()

        cy.get(this.pet_gender_select_btn).should("have.text", "Gender").click()
        cy.get(this.Pet_gender_male).click()




    }




}