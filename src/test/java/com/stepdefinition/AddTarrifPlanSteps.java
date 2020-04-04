package com.stepdefinition;

import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddTarrifPlanSteps {
	

	
	@Given("User click on the add tarrif button")
	public void user_click_on_the_add_tarrif_button() throws Throwable {
		
		hanfleFrames();
	
		
		Hook.driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();

	}

	@Then("User should be recieved with conguratulation message")
	public void user_should_be_recieved_with_conguratulation_message() {
		
		Assert.assertEquals(Hook.driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).getText(), "Congratulation you add Tariff Plan");
		

	}
	
	@When("User enter tarrif plan field")
	public void user_enter_tarrif_plan_field() throws Throwable {
		hanfleFrames();
		
		Hook.driver.findElement(By.id("rental1")).sendKeys("499");
		Hook.driver.findElement(By.id("local_minutes")).sendKeys("300");
		Hook.driver.findElement(By.id("inter_minutes")).sendKeys("100");
		Hook.driver.findElement(By.id("sms_pack")).sendKeys("100");
		Hook.driver.findElement(By.id("minutes_charges")).sendKeys("50");
		Hook.driver.findElement(By.id("inter_charges")).sendKeys("100");
		Hook.driver.findElement(By.id("sms_charges")).sendKeys("10");



	}
	
	@When("User enter tarrif plan field {string},{string},{string},{string},{string},{string},{string}")
	public void user_enter_tarrif_plan_field(String string, String string2, String string3, String string4, String string5, String string6, String string7) throws Throwable {
		
		hanfleFrames();
		
		Hook.driver.findElement(By.id("rental1")).sendKeys(string);
		Hook.driver.findElement(By.id("local_minutes")).sendKeys(string);
		Hook.driver.findElement(By.id("inter_minutes")).sendKeys(string3);
		Hook.driver.findElement(By.id("sms_pack")).sendKeys(string4);
		Hook.driver.findElement(By.id("minutes_charges")).sendKeys(string5);
		Hook.driver.findElement(By.id("inter_charges")).sendKeys(string5);
		Hook.driver.findElement(By.id("sms_charges")).sendKeys(string7);
	    
	}


	@When("User click on the tarrif submit button")
	public void user_click_on_the_tarrif_submit_button() {
		Hook.driver.findElement(By.xpath("//input[@type='submit']")).click();

	}
	
	public void hanfleFrames() throws Throwable {
		Thread.sleep(3000);
		Hook.driver.switchTo().frame(Hook.driver.findElement(By.id("flow_close_btn_iframe")));
		Hook.driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
		Hook.driver.switchTo().parentFrame();
	}



}
