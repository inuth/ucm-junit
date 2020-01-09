#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

@friday
Feature: Is it Friday yet
  In order to increase my productivity
  As a user
  I want to know if it is Friday yet

  @slow @removed
  Scenario Outline: It is not Friday
    Given today is <day>
    When I ask if it is Friday yet
    Then I get a NO

    Examples:
            |day|
            |Monday|
            |Mardi|
            |Mercredi|
            |Jeudi|
            |Samedi|
            |Dimanche|

  @fast
  Scenario: It is Friday
    Given today is Friday
    When I ask if it is Friday yet
    Then I get a YES





