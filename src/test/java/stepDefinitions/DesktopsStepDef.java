package stepDefinitions;

import core.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjectRepository.DesktpPageObject;
import utilites.WebDriverUtility;

public class DesktopsStepDef extends Base{
	
	
	
	DesktpPageObject desktops = new DesktpPageObject();
	
	
	@Given("^user is on Retail website$")
	public void user_is_on_Retail_website() {
		desktops.openBrowser();
		logger.info("Retail Website is opened");
		WebDriverUtility.screenShot();
	}

	@When("^user click on Desktops tab$")
	public void user_click_on_Desktops_tab()  {
		desktops.clickOnDesktops();
		logger.info("User clicked on desktops");
	}

	@When("^User click on show all desktops$")
	public void user_click_on_show_all_desktops()  {
		desktops.clickOnShowAllDesktops();
		logger.info("User clicked on show all desktops");
	  	}

	@Then("^User should see all items are pressent in Desktop page$")
	public void user_should_see_all_items_are_pressent_in_Desktop_page()  {
	  
	}

}
