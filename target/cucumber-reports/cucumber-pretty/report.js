$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Retail website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CompleteTest"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 19,
      "value": "# Instead of Writting this scenario 3 times and just changing values"
    },
    {
      "line": 20,
      "value": "# Cucumber provides Scenario Outline with Examples keyword to do"
    },
    {
      "line": 21,
      "value": "#Data Driven Testing"
    }
  ],
  "line": 23,
  "name": "Login to MyAccount with Multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enter userName \u0027\u003cuserName\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to myAccount Dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 33,
      "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;;1"
    },
    {
      "cells": [
        "eagles@tekschool.us",
        "eagles"
      ],
      "line": 34,
      "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;;2"
    },
    {
      "cells": [
        "hawks@tekschool.us",
        "hawks"
      ],
      "line": 35,
      "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;;3"
    },
    {
      "cells": [
        "falcons@tekschool.us",
        "falcons"
      ],
      "line": 36,
      "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3810573100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# In feature will be use a comment"
    },
    {
      "line": 4,
      "value": "#Every Feature file starts with Feature: \u003cName of Feature\u003e"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDef.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 2449545000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login to MyAccount with Multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CompleteTest"
    },
    {
      "line": 22,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enter userName \u0027eagles@tekschool.us\u0027 and password \u0027eagles\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to myAccount Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 75990400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Login()"
});
formatter.result({
  "duration": 368336800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eagles@tekschool.us",
      "offset": 21
    },
    {
      "val": "eagles",
      "offset": 56
    }
  ],
  "location": "LoginTestStepDef.user_enter_userName_and_password(String,String)"
});
formatter.result({
  "duration": 460752800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Login_button()"
});
formatter.result({
  "duration": 394767100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_should_be_logged_in_to_myAccount_Dashboard()"
});
formatter.result({
  "duration": 5125558900,
  "status": "passed"
});
formatter.after({
  "duration": 909681900,
  "status": "passed"
});
formatter.before({
  "duration": 1808449600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# In feature will be use a comment"
    },
    {
      "line": 4,
      "value": "#Every Feature file starts with Feature: \u003cName of Feature\u003e"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDef.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 2544550900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login to MyAccount with Multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-myaccount-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CompleteTest"
    },
    {
      "line": 22,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enter userName \u0027hawks@tekschool.us\u0027 and password \u0027hawks\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to myAccount Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 68575000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Login()"
});
formatter.result({
  "duration": 647989200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hawks@tekschool.us",
      "offset": 21
    },
    {
      "val": "hawks",
      "offset": 55
    }
  ],
  "location": "LoginTestStepDef.user_enter_userName_and_password(String,String)"
});
formatter.result({
  "duration": 452024300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Login_button()"
});
formatter.result({
  "duration": 908197300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_should_be_logged_in_to_myAccount_Dashboard()"
});
formatter.result({
  "duration": 5128904600,
  "status": "passed"
});
formatter.after({
  "duration": 886099500,
  "status": "passed"
});
