"use strict";

let SelectCtlPage = require('../../../pages/select.ctl.page');
let WD = require('../../../wdio.selectall.conf');

let TestURL = WD.config.selectctlUrl;

describe('Select Controller tests:', function() {    
    describe('first droplist', function() { 

        browser.pause(8000);

        browser.windowHandleSize({ width: 1450, height: 1400 });
        browser.setViewportSize(200, true);

        // selection
        it('tests the ability to select an option.', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testFirstDroplistSelection(TestURL);
        });        
        // search
        it('tests the ability to search for one option', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testFirstDroplistSearch(TestURL);
        });        
        // deselect
        it('tests the ability to deselect an option', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testFirstDroplistDeselection(TestURL);
        });     
    }),
    
    describe('third droplist', function() {         
        // selection        
        it('tests the ability to select an option.', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testThirdDroplistSelection(TestURL);
        });        
        // deselect
        it('tests the ability to NOT deselect an option', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testThirdDroplistDeselection(TestURL);
        }); 
    }),
        
    describe('fourth droplist', function() {         
        // selection
        it('tests the ability to select an option.', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testFourthDroplistSelection(TestURL);
        });        
        // search
        it('tests the ability to search for one option', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testFourthDroplistSearch(TestURL);
        });        
        // deselect
        it('tests the ability to deselect an option', function() {  
            this.retries(3);
            SelectCtlPage.open(TestURL); 
            SelectCtlPage.testFourthDroplistDeselection(TestURL);
        });     
    }); 
});  