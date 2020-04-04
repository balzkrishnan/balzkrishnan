$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Sivam/eclipse-workspace/cucumber/src/test/resources/Features/AddTarrifPlan.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the add tarrif button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_click_on_the_add_tarrif_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enter tarrif plan field",
  "keyword": "When "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_enter_tarrif_plan_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the tarrif submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_click_on_the_tarrif_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be recieved with conguratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_should_be_recieved_with_conguratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter tarrif plan field \"\u003cMR\u003e\",\"\u003cFLM\u003e\",\"\u003cFIM\u003e\",\"\u003cFSP\u003e\",\"\u003cLMC\u003e\",\"\u003cIMC\u003e\",\"\u003cSMC\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on the tarrif submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be recieved with conguratulation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MR",
        "FLM",
        "FIM",
        "FSP",
        "LMC",
        "IMC",
        "SMC"
      ]
    },
    {
      "cells": [
        "499",
        "399",
        "299",
        "199",
        "99",
        "1099",
        "999"
      ]
    },
    {
      "cells": [
        "300",
        "200",
        "100",
        "100",
        "100",
        "500",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the add tarrif button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_click_on_the_add_tarrif_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter tarrif plan field \"499\",\"399\",\"299\",\"199\",\"99\",\"1099\",\"999\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_enter_tarrif_plan_field(String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#flow_close_btn_iframe\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9806VHF\u0027, ip: \u0027192.168.43.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Sivam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59180}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e05d21e7de5ed146c685ad40db0b14f8\n*** Element info: {Using\u003did, value\u003dflow_close_btn_iframe}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.AddTarrifPlanSteps.hanfleFrames(AddTarrifPlanSteps.java:71)\r\n\tat com.stepdefinition.AddTarrifPlanSteps.user_enter_tarrif_plan_field(AddTarrifPlanSteps.java:50)\r\n\tat ✽.User enter tarrif plan field \"499\",\"399\",\"299\",\"199\",\"99\",\"1099\",\"999\"(C:/Users/Sivam/eclipse-workspace/cucumber/src/test/resources/Features/AddTarrifPlan.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on the tarrif submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_click_on_the_tarrif_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be recieved with conguratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_should_be_recieved_with_conguratulation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the add tarrif button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_click_on_the_add_tarrif_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter tarrif plan field \"300\",\"200\",\"100\",\"100\",\"100\",\"500\",\"400\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_enter_tarrif_plan_field(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the tarrif submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_click_on_the_tarrif_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be recieved with conguratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTarrifPlanSteps.user_should_be_recieved_with_conguratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});