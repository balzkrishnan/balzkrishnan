package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddCustomerSteps {
	
	static WebDriver driver;
	
	@Given("User launches the demo telecom site")
	public void user_launches_the_demo_telecom_site() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sivam\\eclipse-workspace\\cucumber\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/index.html");
		driver.manage().window().maximize();


	}

	@Given("User click on the add customer button")
	public void user_click_on_the_add_customer_button() {
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		


	}

	@When("User enter all the field")
	public void user_enter_all_the_field() throws Throwable {
		
		
		driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
		Thread.sleep(2000);
		driver.findElement(By.id("fname")).sendKeys("Bala");
		driver.findElement(By.id("lname")).sendKeys("Krishnan");
		driver.switchTo().frame(driver.findElement(By.id("flow_close_btn_iframe")));
		driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
		driver.switchTo().parentFrame();	
		driver.findElement(By.name("emailid")).sendKeys("balakrishnan@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("Tirunelveli");
		driver.findElement(By.id("telephoneno")).sendKeys("9655325058");


	}

	@When("User click on the submit button")
	public void user_click_on_the_submit_button() {
		
		driver.findElement(By.xpath("//input[@type='submit']")).click();


	}


	@Then("User should be displayed customer ID is generated or not")
	public void user_should_be_displayed_customer_ID_is_generated_or_not() throws Throwable {
		Thread.sleep(2000);
		
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		String text = driver.findElement(By.xpath("(//td[@align='center'])[2]")).getText();
		System.out.println(text);
		


	}

}
