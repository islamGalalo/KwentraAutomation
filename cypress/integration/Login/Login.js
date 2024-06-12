/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "../../../PageObjects/LoginPage";


const login = new loginPage

Given('visit Kwentra website' , ()=>{
    cy.visit("https://testingtasks.kwentra.com/");
})
When('user enter username and password' , ()=>{
    login.username()
    login.password()
});
Then('click on Login button to log into the website',()=>{
    login.loginBtn()
    login.verifyUrl()
})

