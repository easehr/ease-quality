'use strict';

// Purpose: Validates the usability and viewability of the Home page.
module.exports = {
    tags: ['home'],
    'Scenario: User can navigate through the EaseCentral Home page without error.' : function (browser) {
      
      let homePage = browser.page.homePage();  
      homePage.validHome(browser.globals.PROD_URL, browser);
      browser.end();
    }
  };
  