
Feature: Add Customer in demo site
  I want to use this template for my feature file

  Scenario: Add Customer with hard coded datas
    Given User launches the demo telecom site
    And User click on the add customer button
    When User enter all the field
    And User click on the submit button
    Then User should be displayed customer ID is generated or not
    
  
    Scenario: Add Customer with hard coded datas
    Given User launches the demo telecom site
    And User click on the add customer button
    When User enter all the field with one dimensional
      | Nithun | Raj | nithunraj@gmail.com | Tirunelveli | 798463213 |
    And User click on the submit button
    Then User should be displayed customer ID is generated or not
    
     Scenario: Add Customer with hard coded datas
    Given User launches the demo telecom site
    And User click on the add customer button
    When User enter all the field with one dimensional map
      | fname       | Manick              | 
      | lname       | Raj                 |
      | email       | manickraj@gmail.com | 
      | addr        | Tirunelveli         | 
      | telephoneno |           798463213 |
    And User click on the submit button
    Then User should be displayed customer ID is generated or not

