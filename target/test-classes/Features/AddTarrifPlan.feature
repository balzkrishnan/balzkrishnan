
Feature: Title of your feature
  I want to use this template for my feature file
  
  Background:
    And User click on the add tarrif button

  
  Scenario: Title of your scenario
    When User enter tarrif plan field
    And User click on the tarrif submit button
    Then User should be recieved with conguratulation message
    
    
  Scenario Outline:
    When User enter tarrif plan field "<MR>","<FLM>","<FIM>","<FSP>","<LMC>","<IMC>","<SMC>"
    And User click on the tarrif submit button
    Then User should be recieved with conguratulation message
    
    Examples:
    | MR  | FLM | FIM | FSP | LMC | IMC  | SMC |
    | 499 | 399 | 299 | 199 | 99  | 1099 | 999 |
    | 300 | 200 | 100 | 100 | 100 | 500  | 400 |
  #  | 100 | 100 | 50  | 50  | 50  | 300  | 200 |
   # | 100 | 100 | 100 | 150 | 150 | 300  | 200 |

     
  

