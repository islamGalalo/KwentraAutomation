/// <reference types="cypress" />
import { loginPage } from "../../../PageObjects/LoginPage";
import { ProfilePage } from "../../../PageObjects/ProfilePage";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const profilePage = new ProfilePage();
const login = new loginPage();

Given('user is aleady logged into the website', () => {
  login.loginPage();
});

When('user click on front office tab and click on profile in side menu', () => {
  profilePage.gotoFrontOffice();
  profilePage.clickMenu();
});
When('click on profile in side menu and click on create button', () => {
  profilePage.selectProfile();
  profilePage.createButtonclick();
});

And('Enter firstname and lastname', () => {
  profilePage.enterFirstName();
  profilePage.enterLastName();
});

Then('click save button and verify the success message', () => {
  profilePage.clickSaveButton();
  profilePage.getSuccessMessage().should('contain', 'created successfully');;
});
