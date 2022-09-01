export class BasePage{

    load_more_btn = '.jss3 > div > .MuiTypography-root > span'


    targetUrl(){
       // cy.visit("http://hunde-schutz-staging.s3-website.eu-central-1.amazonaws.com")
        cy.get(this.load_more_btn).click()


    }

    clickOn(locator){
        cy.get(locator).click()
    }


}