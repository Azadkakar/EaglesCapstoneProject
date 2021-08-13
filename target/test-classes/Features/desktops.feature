@CompleteTest
Feature: Desktops Retail website

@First
Scenario: User verify all items are present in Desktops tab

	Given user is on Retail website
	When user click on Desktops tab
	And User click on show all desktops
	Then User should see all items are pressent in Desktop page
	
	