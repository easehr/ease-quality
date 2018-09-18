"use strict";

let HomePage = require('../../pages/home.page');
let WD = require('../../wdio.chrome.conf');

// Url / application under test
let TestURL = WD.config.prodUrl;

// Support
let BlogURL = WD.config.blogProdUrl;
let BestBenefitURL = WD.config.bestbenefitProdUrl;
let HelpURL = WD.config.helpProdUrl;
let PressURL = WD.config.pressBlogUrl;

describe('EaseCentral', function() {
    describe('Home', function() { 
        browser.windowHandleSize({width: 1450, height: 1400});
        
        it('test that the page is accessible and opens in browser.', function() {  
            this.retries(3);
            HomePage.open(TestURL); 
        });
        
        it('test that all page links are functional.', function() {
            this.retries(3);
            HomePage.testPageLinks(TestURL, BlogURL, BestBenefitURL, HelpURL, PressURL); 
            HomePage.testLoginLink(TestURL);  
            HomePage.testSignUpLink(TestURL);       
        });        

        it('test that the Get Demo modal is usable.', function() {
            this.retries(3);
            HomePage.testGetDemoModal();
        });
        
        it('test that the video modal displays.', function() {
            this.retries(3);
            HomePage.testVideo(TestURL);
        });            
    });
});  
