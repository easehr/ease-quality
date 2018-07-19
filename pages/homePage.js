'use strict';

var faker = require('Faker');

var homePageCommands = {

    validHome : function (_url, browser) {     
        browser.pause(5000);    
        browser.url(_url);

        // Home Page: Link check
        this.waitForElementVisible('@homepageTitleLogo', 30000)        
            .assert.containsText('@featuresLink', 'FEATURES')
            .assert.containsText('@pricingLink', 'PRICING')
            .assert.containsText('@marketplaceLink', 'MARKETPLACE')
            .assert.containsText('@employersLink', 'EMPLOYERS')
            .assert.containsText('@loginLink', 'LOGIN')
            .assert.containsText('@getdemoBtn', 'Get Demo');

        // Home Page: Get Demo Dialog    
        this.waitForElementPresent('.css-12nbrge', 10000).click('.css-12nbrge');

        this.waitForElementVisible('h4.css-k12d22', 30000)
            .assert.containsText('h4.css-k12d22', 'Request an EaseCentral demo')
            .setValue('@nameFieldDlg', faker.internet.email())
            .setValue('@firstnameFieldDlg', faker.name.firstName())
            .setValue('@lastnameFieldDlg', faker.name.lastName())
            .setValue('@companyFieldDlg', faker.company.companyName())
            .setValue('@phoneFieldDlg', faker.phone.phoneNumber()) // break
            .click('@jobtitleSelect')
            .click('.Select-arrow')
            .click('.Select-placeholder')
            .setValue('@jobSelectPath', 'Employee')
            .sendKeys('@jobSelectEmployeePath', browser.Keys.ENTER)
            .assert.containsText('.Select-value-label', 'Employee')
            .click('@closedemoBtn');






        
      
    },
  };

    
  
  module.exports = {
    elements: {
      homepageTitleLogo: {
        selector: '//*[@id="header"]/div/div/div/div/a/div',
        locateStrategy: 'xpath' 
      },
      featuresLink: {
        selector: '//*[@id="header"]/div/div/div/div/div[1]/div/a[1]',
        locateStrategy: 'xpath'
      },
      pricingLink: {
        selector: '//*[@id="header"]/div/div/div/div/div[1]/div/a[2]',
        locateStrategy: 'xpath'
      },
      marketplaceLink: {
        selector: '//*[@id="header"]/div/div/div/div/div[1]/div/a[3]',
        locateStrategy: 'xpath'
      },
      employersLink: {
        selector: '//*[@id="header"]/div/div/div/div/div[1]/div/a[4]',
        locateStrategy: 'xpath'
      },
      loginLink: {
        selector: '//*[@id="header"]/div/div/div/div/div[1]/div/a[5]',
        locateStrategy: 'xpath'
      },
      getdemoBtn: {
        selector: '.css-12nbrge'
      },
      nameFieldDlg: {
        selector: 'input[name="email"]'
      },
      firstnameFieldDlg: {
        selector: 'input[name="firstName"]'
      },
      lastnameFieldDlg: {
        selector: 'input[name="lastName"]'
      },
      companyFieldDlg: {
        selector: 'input[name="company"]'
      },
      phoneFieldDlg: {
        selector: 'input[name="phone"]'
      },
      jobSelect: {
        selector: '.Select-input'
      },
      jobSelectPath: {
        selector: '//span/div/input',
        locateStrategy: 'xpath'
      },
      jobSelectEmployeePath: {
        selector: '//input[@value="Employee"]',
        locateStrategy: 'xpath'
      },
      jobtitleSelect: {
        selector: '.Select-input'
      },

      closedemoBtn: {
        selector: 'button.css-13i7nzy'

        //#modal-root > div:nth-child(1) > div > div > div > div.css-1sbs5gr > div > div > div > button.
      },

    },
    commands: [homePageCommands]
  };