package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class TabletPageObject extends Base {
	
	TabletPageObject() {
		
PageFactory.initElements(driver, this);
	}
	@FindBy(xpath = "//a[normalize-space()='Tablets']")
	
private WebElement tablets;
	
	@FindBy(xpath = "//a[normalize-space()='Samsung Galaxy Tab 10.1']")
	
	private WebElement SamsungGalaxyTab;
	
	
	public void clickonTablets() {
		
		WebDriverUtility.clickOnElement(tablets);
	
	}
	public void clickonSamsungGalaxyTb() {
		
		WebDriverUtility.clickOnElement(SamsungGalaxyTab);
	
	}
}
