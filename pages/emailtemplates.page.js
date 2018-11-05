"use strict";

let Page = require('./page');
let LoginPage = require('../pages/login.page');
let Assert = require('chai').assert;

class EmailtemplatePage {

    // SELECTORS
    emailtempSettingsLink() { return browser.element("//li[8]/a"); } 
    //emailtempTemplateLink() { return browser.element('//a[contains(text(),"Email Templates")]'); }
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
        browser.pause(2500);
        this.emailtempCreateBlankModalClose().click();
        browser.pause(2500);
        this.emailtempActionsCaret().click();
        this.emailtempCreateTempFromDefaultMenu().click();
        Assert.equal(this.emailtempCreateTempDefaultModalTitle().getText().toUpperCase(), 'CREATE TEMPLATE FROM DEFAULT', "  -- Failure: Modal did not launch or has an incorrect title.");
        browser.pause(1500);
        this.emailtempCreateTempDefaultModalClose().click();
    }

    testClickEmployeeMenu(_url) { 
        browser.pause(1000);      
        if(_url === browser.getUrl()) {
            if( this.employeeProfileMenu().getText().toUpperCase() === "PROFILE") {this.employeeProfileMenu().click();}
            if( this.employeeBenefitsMenu().getText().toUpperCase() === "BENEFITS") {this.employeeBenefitsMenu().click();}
            if( this.employeeDocumentsMenu().getText().toUpperCase() === "DOCUMENTS") {this.employeeDocumentsMenu().click();}
            if( this.employeePayStubsMenu().getText().toUpperCase() === "PAYSTUBS") {this.employeePayStubsMenu().click();}
            if( this.employeeTimeOffMenu().getText().toUpperCase() === "TIME OFF") {this.employeeTimeOffMenu().click();}
            if( this.employeeCalendarMenu().getText().toUpperCase() === "CALENDAR") {this.employeeCalendarMenu().click();}
            if( this.employeeDirectoryMenu().getText().toUpperCase() === "DIRECTORY") {this.employeeDirectoryMenu().click();}
        }
    }

    testSearchForm(_data) {
        browser.setValue(this.emailtempSearchInput().selector, _data);
        browser.pause(1000);
        this.emailtempSearchSubmit().click();
        browser.pause(1000);
        browser.setValue(this.emailtempSearchInput().selector, " ");
        browser.pause(1000);
        this.emailtempSearchSubmit().click();
    }

    testEnrollmentBenefit(_url) {
        browser.pause(1000);
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