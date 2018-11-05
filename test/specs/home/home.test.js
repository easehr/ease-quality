"use strict";

let HomePage = require('../../../pages/home.page');
let WD = require('../../../wdio.chrome.conf');

// Url / application under test
let TestURL = WD.config.prodUrl;

// Support
let BlogURL = WD.config.blogProdUrl;
let BestBenefitURL = WD.config.bestbenefitProdUrl;
let HelpURL = WD.config.helpProdUrl;
let PressURL = WD.config.pressBlogUrl;

describe('EaseCentral', function() {
    describe('Home', function() { 
        browser.windowHandleSize({ width: 1450, height: 1900 });

        if(WD.config.capabilities[0].browserName != 'chrome') {
            browser.windowHandleMaximize();
        }
                
        it('test should verify that the page is accessible when opened in a selected browser.', function() {              
            HomePage.open(TestURL); 
        });
        
        it('test should verify that all page links are functional on our home page.', function() {
            HomePage.testPageLinks(TestURL, BlogURL, BestBenefitURL, HelpURL, PressURL); 
            HomePage.testLoginLink(TestURL);  
            HomePage.testSignUpLink(TestURL);       
        });        

        it('test should verify that the Get Demo modal is functioning and usable.', function() {
            HomePage.testGetDemoModal();
        });
        
        it('test should verify that the video modal displays within the selected browser.', function() {
            HomePage.testVideo(TestURL);
        });            
    });
});  
