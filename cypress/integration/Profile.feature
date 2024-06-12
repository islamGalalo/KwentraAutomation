Feature: Profile Creation

    Through this Feature user can Create Profiles
    Scenario: user should be able create profile with only firstname and lastname
        Given user is aleady logged into the website
        When user click on front office tab and click on profile in side menu
        When click on profile in side menu and click on create button
        And Enter firstname and lastname
        Then click save button and verify the success message

