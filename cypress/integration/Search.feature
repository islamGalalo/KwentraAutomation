Feature: Search Functionality

    Through this Feature user can validate the Search function
    Scenario: user should be able to search
        Given user is aleady logged into the website and go to profile
        When user search by firstname and click search button
        Then user check if the searched name is exist