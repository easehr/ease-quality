"use strict";

let LoginPage = require('../../../pages/login.page');
let WD = require('../../../wdio.chrome.conf');

describe('EaseCentral', function() {
    describe('Login', function() { 
        browser.windowHandleSize({ width: 1450, height: 1900 });
        
        if(WD.config.capabilities[0].browserName != 'chrome') {
            browser.windowHandleMaximize();
        }

        it('test should verify employee login access to EaseCentral with a valid ID and password.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testEmployeeValidLogin( WD.config.employeeId, WD.config.employeePwd, true );
        });        
        
        it('test should verify that an invalid employee ID fails to access EaseCentral.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testEmployeeInvalidLoginID();
        });
        
        it('test should verify a valid employee ID with an invalid password fails to access EaseCentral.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testEmployeeInvalidLoginPassword( WD.config.employeeId );
        });

        it('test should verify an empty employee ID fails to access EaseCentral.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testEmptyLoginID( WD.config.employeePwd );
        });

        it('test should verify an empty employee password fails to access EaseCentral.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testEmptyLoginPassword();
        });

        it('test should verify transition to mobile phone access to EaseCentral.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testMobileLoginAppears();
        });

        it('test should verify transition to unable to login page for EaseCentral.', function() {           
            LoginPage.open( WD.config.employeeUrl ); 
            LoginPage.testUnableToLoginAppears();
        });
        
    });
}); 