Feature: Kwentra Login

    Through this Feature user can Login into Kwentra website
    Scenario: user should be able to login using valid credentials
        Given visit Kwentra website
        When user enter username and password
        Then click on Login button to log into the website
