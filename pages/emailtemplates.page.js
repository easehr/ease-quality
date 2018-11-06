"use strict";

let Page = require('./page');
let LoginPage = require('../pages/login.page');
let Assert = require('chai').assert;

class EmailtemplatePage {

    // SELECTORS
    emailtempSettingsLink() { return browser.element("//li[8]/a"); } 
    emailtempTemplateLink() { return browser.element('=Email Templates'); }
    
    emailtempNameColumn() { return browser.element('div.row > div > span');  }
    emailtempTypeColumn() { return browser.element('//div[2]/span');  }
    emailtempDescriptionColumn() { return browser.element('//div[3]/span');  }
    emailtempCreatedColumn() { return browser.element('//div[4]/span');  }
    emailtempUpdatedColumn() { return browser.element('//div[5]/span');  }

    emailtempActionsCaret() { return browser.element('button.button.c-button > svg.icon__arrow-down');  }
    emailtempCreateBlankTempMenu() { return browser.element('//a[contains(text(),"Create From Blank")]');  } 
    emailtempCreateBlankModalTitle() { return browser.element('#addBlankEmailTemplateModalTitle');  }
    emailtempCreateBlankModalClose() { return browser.element('#addBlankEmailTemplateModalCancel');  }
    emailtempCreateTempFromDefaultMenu() { return browser.element('//a[contains(text(),"Create From Default")]');  }
    emailtempCreateTempDefaultModalClose() { return browser.element('#addDefaultEmailTemplateModalCancel');  }
    emailtempCreateTempDefaultModalTitle() { return browser.element('#addDefaultEmailTemplateModalTitle');  }

    emailtempSearchInput() { return browser.element('#searchName');  }
    emailtempSearchSubmit() { return browser.element('#searching');  }

    emailtempTypeInput() { return browser.element('//*[@id="templateTypeRow"]/div/div[2]');  }
    emailtempTypeSelectACAEligible() { return browser.element('//div[@id="templateTypeRow"]/div/div[3]/div/div[2]/span');  }
    emailtempTypeCompanyDocTemplate() { return browser.element('=Company Documents Review Template');  }
    
    // DEBUG: console.log(browser.element(this.emailtempTypeCompanyDocTemplate().selector));        

    // TEST METHODS    
    testValidLogin(_id, _pwd) {
        LoginPage.testBaseLogin(_id, _pwd);
    }

    testTitle() {        
        this.emailtempSettingsLink().click();
        browser.waitForExist(this.emailtempTemplateLink().selector);
        this.emailtempTemplateLink().click();        
        Assert.equal(browser.getTitle().toUpperCase(), 'COMPANY SETTINGS EMAIL TEMPLATES', "  -- Failure: Title value is incorrect.");
    }

    testTableColumns() {
        Assert.equal(this.emailtempNameColumn().getText().toUpperCase(), 'NAME', "  -- Failure: Unable to find Name column.");
        Assert.equal(this.emailtempTypeColumn().getText().toUpperCase(), 'TYPE', "  -- Failure: Unable to find Type column.");        
        Assert.equal(this.emailtempDescriptionColumn().getText().toUpperCase(), 'DESCRIPTION', "  -- Failure: Unable to find Type column.");
        Assert.equal(this.emailtempCreatedColumn().getText().toUpperCase(), 'CREATED', "  -- Failure: Unable to find Type column.");
        Assert.equal(this.emailtempUpdatedColumn().getText().toUpperCase(), 'UPDATED', "  -- Failure: Unable to find Type column.");
    }

    testAddNewTemplateDropdown() {
        this.emailtempActionsCaret().click();
        this.emailtempCreateBlankTempMenu().click();        
        Assert.equal(this.emailtempCreateBlankModalTitle().getText().toUpperCase(), 'CREATE BLANK TEMPLATE', "  -- Failure: Modal did not launch or has an incorrect title.");
        browser.pause(500);
        this.emailtempCreateBlankModalClose().click();
        browser.pause(500);
        this.emailtempActionsCaret().click();
        this.emailtempCreateTempFromDefaultMenu().click();
        Assert.equal(this.emailtempCreateTempDefaultModalTitle().getText().toUpperCase(), 'CREATE TEMPLATE FROM DEFAULT', "  -- Failure: Modal did not launch or has an incorrect title.");
        browser.pause(500);
        this.emailtempCreateTempDefaultModalClose().click();
    }

    testSearchForm(_data) {
        var checkElement = browser.element(this.emailtempSearchInput().selector)["_status"];
        Assert.equal(checkElement, 0, "  -- Failure: the search input selction failed.");
        browser.setValue(this.emailtempSearchInput().selector, _data);
        this.emailtempSearchSubmit().click();
        browser.setValue(this.emailtempSearchInput().selector, " ");        
        this.emailtempSearchSubmit().click();
    }

    testTypeSelect() {
        this.emailtempTypeInput().click();
        this.emailtempTypeSelectACAEligible().click();
        browser.pause(500);        
        var checkElement = browser.element(this.emailtempTypeCompanyDocTemplate().selector)["type"];
        Assert.equal(checkElement, 'NoSuchElement', "  -- Failure: the type selction failed.");
        browser.pause(500);
        this.emailtempTemplateLink().click();
    }

    testEnrollmentBenefit(_url) {
        browser.pause(500);
        if(_url === browser.getUrl()) {
            if( this.employeeStartEnrollmentButton().getText().toUpperCase() === "START ENROLLMENT") {this.employeeStartEnrollmentButton().click();}
            browser.pause(5000);
            this.employeeStartButton().click();
        }
    }

    // SHARED METHODS
    open(_url) {
        Page.open(_url);
    }
}
module.exports = new EmailtemplatePage();