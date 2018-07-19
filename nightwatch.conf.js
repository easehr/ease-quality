'use strict';

// LOAD ENV 
const dotenv = require('dotenv');
require('dotenv').config();

module.exports = {

  "src_folders" : ["./tests"],
  "output_folder" : "./reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "./pages",
  "globals_path" : "./globals/globals.js",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./drivers/selenium-server-standalone-3.13.0.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./drivers/chromedriver",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {      
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "screenshots" : {
        "enabled" : false,
        "path" : "./reports"
      },
      "desiredCapabilities": {
        "browserName": "chrome"        
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}