Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the home page
    When I search for <term> results
    Then the amount of results is printed on the console
    
  Examples:
      | term | 
      | pilas | 