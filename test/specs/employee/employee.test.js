"use strict";

let EmployeePage = require('../../../pages/employee.page');
let WD = require('../../../wdio.chrome.conf');

describe('EaseCentral', function() {
    describe('Employee', function() { 
        browser.windowHandleSize({ width: 1450, height: 1900 });

        if(WD.config.capabilities[0].browserName != 'chrome') {
            browser.windowHandleMaximize();
        }
        
        it('test should verify login access to EaseCentral with a valid ID and password.', function() {           
            EmployeePage.open( WD.config.employeeUrl ); 
            EmployeePage.testValidLogin( WD.config.employeeId, WD.config.employeePwd, false );
        });        
        
        it('test should verify that the dashboard is displayed and the menu is functional.', function() {  
            EmployeePage.open( WD.config.employeeDashboardUrl ); 
            EmployeePage.testClickEmployeeMenu( WD.config.employeeDashboardUrl);       
        });
        
        it('test should verify that the user can start and functionally use the benefit enrollment form and pages.', function() {           
            EmployeePage.open( WD.config.employeeDashboardUrl ); 
            EmployeePage.testEnrollmentBenefit( WD.config.employeeDashboardUrl );
        });           
        
        // employee test profile form - ON KATALON (NEEDS MIGRATION)
        // benefit - ON KATALON (NEEDS MIGRATION)
        // document - ON KATALON (NEEDS MIGRATION)
        // paystubs - ON KATALON (NEEDS MIGRATION)
        // time off - ON KATALON (NEEDS MIGRATION)
        // calendar - ON KATALON (NEEDS MIGRATION)
        // directory - grid & list - ON KATALON (NEEDS MIGRATION)        
        
    });
}); 