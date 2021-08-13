package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class MP3PlayersPageObject extends Base {
	
	MP3PlayersPageObject(){
		
		PageFactory.initElements(driver, this);
	}
		
		@FindBy( xpath = "//a[normalize-space()='MP3 Players']")
		
		private WebElement MP3Players;
		
		public void clickon() {
			
			WebDriverUtility.clickOnElement(MP3Players);
		}
		
	}




