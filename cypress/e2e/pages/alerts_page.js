export class Alerts{

    click_btn_for_alert = '[id=alertButton]'
    click_btn_5_second_alert = '[id=timerAlertButton]'
    confirm_box_btn = '[id=confirmButton]'
    prompt_btn = '[id=promtButton]'
    confirm_box_message = '[id=confirmResult]'


    click(locator){
        cy.get(locator).click()

    }







}