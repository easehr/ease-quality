"use strict";

let Page = require('./page');
let Assert = require('chai').assert;
let Faker = require('faker');

class LoginPage {

    // SELECTORS
    loginEmailField() { return browser.element('#email'); }
    loginPasswordField() { return browser.element('#password'); }  
    loginBtn() { return browser.element('//form[@id="auth"]/button'); }
    loginErrorMsg() { return browser.element('div.c-login__error'); }
    loginMobileLink() { return browser.element('a.c-login__link'); }
    loginLoginHelpMessage() { return browser.element('//form[@id="auth"]/h3'); }
    loginUnableToLoginLink() { return browser.element( '//a[contains(text(),"Unable to login?")]'); }

    employeeMenuCaret() { return browser.element('.c-nav-default__caret.icon__arrow-down'); }
    employeeMenuSettings() { return browser.element('a.c-menu__option > span'); }
    employeeMenuHomeLink() { return browser.element('//a[contains(text(),"Home")]'); }
    employeeMenuLogoutLink() { return browser.element('//li[4]/a/span'); }
    
     // TEST METHODS
    testEmployeeValidLogin(_id, _pwd, _flag) {
        browser.waitForExist(this.loginEmailField().selector);
        browser.setValue(this.loginEmailField().selector, _id);
        browser.setValue(this.loginPasswordField().selector, _pwd);
        this.loginBtn().click();
        this.employeeMenuCaret().click();
        this.employeeMenuSettings().click();
        browser.waitForExist(this.employeeMenuHomeLink().selector);
        if( this.employeeMenuHomeLink().getText().toUpperCase() === 'HOME' ) {
            Assert.equal(this.employeeMenuHomeLink().getText().toUpperCase(), 'HOME', "  -- Failure: Text value is incorrect for the link.");
            this.employeeMenuHomeLink().click();
            if(_flag === true) { // LOGOUT 
                browser.waitForExist(this.employeeMenuCaret().selector);
                this.employeeMenuCaret().click();
                this.employeeMenuLogoutLink().click();        
            }
        }
    }

    testBaseLogin(_id, _pwd) {
        browser.waitForExist(this.loginEmailField().selector);
        browser.setValue(this.loginEmailField().selector, _id);
        browser.setValue(this.loginPasswordField().selector, _pwd);
        this.loginBtn().click();
        browser.waitForExist(this.employeeMenuHomeLink().selector);
        if( this.employeeMenuHomeLink().getText().toUpperCase() === 'HOME' ) {
            Assert.equal(this.employeeMenuHomeLink().getText().toUpperCase(), 'HOME', "  -- Failure: Text value is incorrect for the link.");
            return true;
        } else {
            return false;
        }
    }    
    
    testEmployeeInvalidLoginID() {
        browser.waitForExist(this.loginEmailField().selector);
        browser.setValue(this.loginEmailField().selector, Faker.internet.email());
        browser.setValue(this.loginPasswordField().selector, Faker.internet.password());
        this.loginBtn().click();
        Assert.equal(this.loginErrorMsg().getText().toLowerCase(), 'invalid login credentials. try again.', "  -- Failure: Invalid error message.");
    }
    
    testEmployeeInvalidLoginPassword(_id) {
        browser.waitForExist(this.loginEmailField().selector);
        browser.setValue(this.loginEmailField().selector, _id);
        browser.setValue(this.loginPasswordField().selector, Faker.internet.password());        
        this.loginBtn().click();
        Assert.equal(this.loginErrorMsg().getText().toLowerCase(), 'invalid login credentials. try again.', "  -- Failure: Invalid error message.");
    }
    
    testEmptyLoginID(_pwd) {
        browser.waitForExist(this.loginEmailField().selector);
        browser.setValue(this.loginEmailField().selector, " ");
        browser.setValue(this.loginPasswordField().selector, _pwd);        
        this.loginBtn().click();
        Assert.equal(this.loginErrorMsg().getText().toLowerCase(), 'invalid login credentials. try again.', "  -- Failure: Invalid error message.");
    }

    testEmptyLoginPassword() {
        browser.waitForExist(this.loginEmailField().selector);
        browser.setValue(this.loginEmailField().selector, Faker.internet.email());
        browser.setValue(this.loginPasswordField().selector, " ");        
        this.loginBtn().click();
        Assert.equal(this.loginErrorMsg().getText().toLowerCase(), 'invalid login credentials. try again.', "  -- Failure: Invalid error message.");
    }

    testMobileLoginAppears() {
        browser.waitForExist(this.loginEmailField().selector);
        this.loginMobileLink().click();
        Assert.equal(this.loginLoginHelpMessage().getText().toLowerCase(), 'forgot your password?', "  -- Failure: Invalid error message.");
    }

    testUnableToLoginAppears() {
        browser.waitForExist(this.loginEmailField().selector);
        this.loginUnableToLoginLink().click();
        Assert.equal(this.loginLoginHelpMessage().getText().toLowerCase(), 'forgot your password?', "  -- Failure: Invalid error message.");
    }
    
    // add all below ...
    testLoginAssistanceAppears() {
    }

    testSpanishLoginAppears() {
        // spanish transition test  
    }
 
    open(_url) {
        Page.open(_url);
    }
 }
 module.exports = new LoginPage();
 