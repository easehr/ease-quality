'use strict';

require('./../pages/loginPage');

module.exports = {
  tags: ['login'],
  'Scenario: User can login to Ease on staging using email two-factor authentication.' : function (browser) {
    
    let loginPage = browser.page.loginPage();

    loginPage.validLogin(browser.globals.APPID, browser.globals.APPLOGINPWD, browser.globals.STAGE_NEW, 
      browser.globals.WAIT_5, browser);
    loginPage.accessEmail(browser.globals.EMAILID, browser.globals.EMAILPWD);
    
    // get error
    browser.expect.element('body').to.be.present;
    browser.end();
  }
};
