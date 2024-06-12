export class ProfilePage {
   
    gotoFrontOffice() {
      cy.get('.front-office-beta > a').click();
    }

    clickMenu(){
      cy.get('#side-nav-burger-menu-icon > .mat-button-wrapper > .mat-icon').click()
    }
    selectProfile(){
      cy.get('#Profiles > .title').click()
    }
   

    createButtonclick(){
      cy.get('#create-btn > .mat-button-wrapper').click();
    }
 

  
    enterFirstName() {
      cy.get('#first_name-field').type('isla') 
    }
  
    enterLastName() {
      cy.get('#last_name-field').type('abdo')
    }

    clickSaveButton(){
      cy.get('#save-btn > .mat-button-wrapper').click()
    }

    getSuccessMessage() {
      return cy.get('.mat-simple-snackbar > span');
    }
    
     
  }
  