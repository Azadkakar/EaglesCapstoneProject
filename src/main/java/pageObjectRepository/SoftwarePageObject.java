package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class SoftwarePageObject extends Base {
	
	SoftwarePageObject() {
		
	PageFactory.initElements(driver, this);
	}
	
	@FindBy( xpath = "//ul[@class='nav navbar-nav']//a[contains(text(),'Software')]")
	
	private WebElement Software;
	
	public void clickon() {
		WebDriverUtility.clickOnElement(Software);
	}
	
	
	
	}


