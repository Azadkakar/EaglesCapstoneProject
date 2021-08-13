package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class ComponentsPageObject extends Base {
	
	ComponentsPageObject () {
		
		PageFactory.initElements(driver, this);
	}
	


		@FindBy(xpath = "//a[normalize-space()='Components']")
		
		private WebElement Components;
		
		
		@FindBy(xpath = "//a[normalize-space()='Apple Cinema 30\"']")
		
		
		
		private WebElement Component;
		
		public void clickon () {
			
			WebDriverUtility.clickOnElement(Components);
			
		}
		
	
}
		
		



