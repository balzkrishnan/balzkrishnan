package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class AddCustomerSteps {
	


	@Given("User click on the add customer button")
	public void user_click_on_the_add_customer_button() {
		Hook.driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		


	}

	@When("User enter all the field")
	public void user_enter_all_the_field() throws Throwable {
		
		
		Hook.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
		Thread.sleep(2000);
		Hook.driver.findElement(By.id("fname")).sendKeys("Bala");
		Hook.driver.findElement(By.id("lname")).sendKeys("Krishnan");
		Hook.driver.switchTo().frame(Hook.driver.findElement(By.id("flow_close_btn_iframe")));
		Hook.driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
		Hook.driver.switchTo().parentFrame();	
		Hook.driver.findElement(By.name("emailid")).sendKeys("balakrishnan@gmail.com");
		Hook.driver.findElement(By.name("addr")).sendKeys("Tirunelveli");
		Hook.driver.findElement(By.id("telephoneno")).sendKeys("9655325058");


	}
	
	@When("User enter all the field with one dimensional")
	public void user_enter_all_the_field_with_one_dimensional(DataTable customerData) throws Throwable {
	    
		List<String> data = customerData.asList(String.class);
					
			Thread.sleep(2000);
			Hook.driver.switchTo().frame(Hook.driver.findElement(By.id("flow_close_btn_iframe")));
			Hook.driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
			Hook.driver.switchTo().parentFrame();
			
			Hook.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
			Hook.driver.findElement(By.id("fname")).sendKeys(data.get(0));
			Hook.driver.findElement(By.id("lname")).sendKeys(data.get(1));
			Hook.driver.findElement(By.id("email")).sendKeys(data.get(2));
			Hook.driver.findElement(By.name("addr")).sendKeys(data.get(3));
			Hook.driver.findElement(By.id("telephoneno")).sendKeys(data.get(4));
		
	}
	
	@When("User enter all the field with one dimensional map")
	public void user_enter_all_the_field_with_one_dimensional_map(DataTable customerData) throws Throwable {
		
		Map<String, String> data = customerData.asMap(String.class, String.class);
		
		Thread.sleep(3000);
		Hook.driver.switchTo().frame(Hook.driver.findElement(By.id("flow_close_btn_iframe")));
		Hook.driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
		Hook.driver.switchTo().parentFrame();
		
		Hook.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
		Hook.driver.findElement(By.id("fname")).sendKeys(data.get("fname"));
		Hook.driver.findElement(By.id("lname")).sendKeys(data.get("lname"));
		Hook.driver.findElement(By.id("email")).sendKeys(data.get("email"));
		Hook.driver.findElement(By.name("addr")).sendKeys(data.get("addr"));
		Hook.driver.findElement(By.id("telephoneno")).sendKeys(data.get("telephoneno"));
		
		
	}


	@When("User click on the submit button")
	public void user_click_on_the_submit_button() {
		
		Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();


	}


	@Then("User should be displayed customer ID is generated or not")
	public void user_should_be_displayed_customer_ID_is_generated_or_not() throws Throwable {
		Thread.sleep(2000);
		
		Assert.assertTrue(Hook.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		String text = Hook.driver.findElement(By.xpath("(//td[@align='center'])[2]")).getText();
		System.out.println(text);
		


	}

}
