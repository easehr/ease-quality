"use strict";

let EmailtemplatesPage = require('../../../pages/emailtemplates.page');
let WD = require('../../../wdio.chrome.conf');

describe('EaseCentral', function() {
    describe('Email Templates', function() { 
        browser.windowHandleSize({ width: 1450, height: 1900 });

        if(WD.config.capabilities[0].browserName != 'chrome') {
            browser.windowHandleMaximize();
        }
        
        it('test should verify login to access email templates on EaseCentral with a valid ID and password.', function() {           
            EmailtemplatesPage.open( WD.config.emailtemplateUrl ); 
            EmailtemplatesPage.testValidLogin( WD.config.companyadminId, WD.config.companyadminPwd );
        }); 
        
        it('test should confirm that the email templates page title is set.', function() {
            EmailtemplatesPage.testTitle();
        });

        it('test verifies that the Name, Type, Description, Created and Updated columns appear on the email template.', function() {           
            EmailtemplatesPage.testTableColumns();
        });

        it('test confirms the Action dropdown menu functions on the email templates page.', function() {  
            EmailtemplatesPage.testAddNewTemplateDropdown();         
        });

        it('test confirms that the search function on the email templates page.', function() {  
            EmailtemplatesPage.testSearchForm("ACA");         
        });        
    });
}); 