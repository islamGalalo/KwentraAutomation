/// <reference types="cypress" />
import { loginPage } from "../../../PageObjects/LoginPage";
import { ProfilePage } from "../../../PageObjects/ProfilePage";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { SearchPage } from "../../../PageObjects/SearchPage";

const profilePage = new ProfilePage();
const login = new loginPage();
const searchPage = new SearchPage();
Given('user is aleady logged into the website and go to profile', () => {
  login.loginPage();
  profilePage.gotoFrontOffice();
  profilePage.clickMenu();
  profilePage.selectProfile();
})
When('user search by firstname and click search button', () => {
    searchPage.searchByName();
    searchPage.searchButton();
}) 
Then('user check if the searched name is exist', () => {

    searchPage.checkSearchColoumn();
});

