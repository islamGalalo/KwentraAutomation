export class loginPage {

  visit(){
    cy.visit("https://testingtasks.kwentra.com/");
  }

  username(){
    cy.get("#id_auth-username").type('testuser');
  }
  password(password){
    cy.get("#id_auth-password").type('Test_user1234');
  }
  loginBtn(){
    cy.get("#login-submit-btn").click();
  }
  verifyUrl(){
    cy.url().should('eq', 'https://testingtasks.kwentra.com/')
  }
  loginPage (){
    this.visit()
    this.username() 
    this.password() 
    this.loginBtn();
    

  }
}