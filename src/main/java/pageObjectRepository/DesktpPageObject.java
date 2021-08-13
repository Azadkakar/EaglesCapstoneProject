package pageObjectRepository;





import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class DesktpPageObject extends Base {
	

	public DesktpPageObject() {
		PageFactory.initElements(driver, this);
	
	}
	
	
	@FindBy(xpath = "//a[text()='Desktops']")
	private WebElement desktops;
	@FindBy(xpath = "//a[contains(text(),'Show All Desktops')]")
	private WebElement showAllDesktops;
	
	
	public void clickOnDesktops() {
		WebDriverUtility.clickOnElement(desktops);
	}
	
	public void clickOnShowAllDesktops() {
		WebDriverUtility.clickOnElement(showAllDesktops);
	}
	
	

}
