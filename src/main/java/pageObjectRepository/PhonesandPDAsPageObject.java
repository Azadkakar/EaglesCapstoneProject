package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class PhonesandPDAsPageObject extends Base {
	
	PhonesandPDAsPageObject(){
		
		PageFactory.initElements(driver, this);
		
	}
		@FindBy( xpath ="//a[normalize-space()='Phones & PDAs']")
		
		private WebElement PhonesandPDAs;
		
		public void clickon() {
			WebDriverUtility.clickOnElement(PhonesandPDAs);
		}
		
		
		
		
	}
	
	


