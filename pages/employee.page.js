"use strict";

let Page = require('./page');
let LoginPage = require('../pages/login.page');
let Assert = require('chai').assert;

// TODO (10/22/18): All page objects for the test automation will be named according to the routes.cs.

class EmployeePage {

    // SELECTORS
    employeeMenuCaret() { return browser.element('.c-nav-default__caret.icon__arrow-down'); }
    employeeMenuSettings() { return browser.element('a.c-menu__option > span'); }
    employeeMenuHomeLink() { return browser.element('//a[contains(text(),"Home")]'); }
    employeeProfileMenu() { return browser.element('//nav/ul/li[2]/a/span'); }
    employeeProfileHeader() { return browser.element('h3.c-page-header__title'); }
    employeeBenefitsMenu() { return browser.element('//nav/ul/li[3]/a/span'); }
    employeeDocumentsMenu() { return browser.element('//nav/ul/li[4]/a/span'); }
    employeePayStubsMenu() { return browser.element('//li[5]/a/span'); }
    employeeTimeOffMenu() { return browser.element('//li[6]/a/span'); }
    employeeCalendarMenu() { return browser.element('//li[7]/a/span'); }
    employeeDirectoryMenu() { return browser.element('//li[8]/a/span'); }
    employeeBurgerOpenMenu() { return browser.element('svg.c-nav-default__menu.icon__toggle-list'); }
    employeeBurgerClosedMenu() { return browser.element('svg.c-nav-side__svg.icon__home'); }
    employeeStartEnrollmentButton() {return browser.element('button.c-button.c-dash-bar__btn.c-dash-bar__btn--success');}
    employeeStartButton() {return browser.element('button.c-button--xl.button.c-button');}

    // URLS
    featureURL() { return '/features/'; }
    priceURL() { return '/pricing/'; }
    marketURL() { return '/marketplace/'; }
    employeeURL() { return '/employers/'; }
    securityURL() { return '/security/'; }
    careerURL() { return '/careers'; }
    privacyURL() { return '/privacy/'; }
    tosURL() { return '/terms/'; }

    // TEST METHODS    
    testValidLogin(_id, _pwd, _flag) {
        LoginPage.testEmployeeValidLogin(_id, _pwd, _flag);
    }

    testClickEmployeeMenu(_url) { 
        browser.pause(8000);      
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

    testEnrollmentBenefit(_url) {
        browser.pause(8000);
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
module.exports = new EmployeePage();
