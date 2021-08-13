package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class CamerasPageObject extends Base {
	
	CamerasPageObject(){
		
		PageFactory.initElements(driver, this);
	}
		
		@FindBy(xpath = "//a[normalize-space()='Cameras']")
		
		private WebElement Cameras;
		
		public void Clickon() {
			
			
		}
	}


