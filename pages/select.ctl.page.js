"use strict";

let Page = require('../pages/page.js');
let Assert = require('chai').assert;

class SelectCtlPage {

    // SELECTORS
    selectCtrlFirstOpen() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='click to'])[1]/following::div[4]"); }
    selectCtrlFirstChooseOne() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='one'])[1]/following::div[4]"); }      
    selectCtrlFirstLabel() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Entity type'])[1]/following::div[1]"); }  
    selectCtrlFirstType() { return browser.element("//input[@type='text']"); }
    selectCtrlFirstTypeSelect() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Phil Donahue'])[2]/following::div[1]") ;}

    selectCtrlThirdOpen() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Suzanne Somers'])[4]/following::div[1]"); }
    selectCtrlThirdChooseThree() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='three'])[1]/following::span[1]"); }
    selectCtrlThirdLabel() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Entity type'])[2]/following::div[1]"); }

    selectCtrlFourthOpen() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Suzanne Somers'])[6]/following::div[1]"); }    
    selectCtrlFourthChooseOne() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='four'])[1]/following::span[1]"); }      
    selectCtrlFourthLabel() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Entity type'])[3]/following::div[1]"); }  
    selectCtrlFourthType() { return browser.element("(//input[@type='text'])[3]"); } 
    selectCtrlFourthTypeSelect() { return browser.element("(.//*[normalize-space(text()) and normalize-space(.)='Phil Donahue'])[8]/following::span[1]"); } 

    // TEST METHODS
    // ------------
    // I.   The following drop lists are tested: 1, 3 & 4
    // II.  Apply three functional tests per each drop list (where applicable): selection of drop list option, search drop list, deselect an option from drop list 
    // III. Test all browsers (per grunt setup): IE / Firefox / Chrome     

    //  TEST DROPLIST 1: Selection
    testFirstDroplistSelection(_url) { 
        console.log("[droplist (1) - select an option]");
        this.selectCtrlFirstOpen().click();
        this.selectCtrlFirstChooseOne().click();
        Assert.equal(this.selectCtrlFirstLabel().getHTML(false), "one", "  -- Failure: Incorrect string value.");
        browser.url(_url);
    }

    // TEST DROPLIST 1: Search
    testFirstDroplistSearch(_url) {
        console.log("[droplist (1) - search an option]");
        this.selectCtrlFirstOpen().click();
        this.selectCtrlFirstType().setValue("Jenny Jones");
        this.selectCtrlFirstTypeSelect().click();
        Assert.equal(this.selectCtrlFirstLabel().getHTML(false), "Jenny Jones", "  -- Failure: Incorrect search string value.");
        browser.url(_url);
    }

    // TEST DROPLIST 1: Deselect
    testFirstDroplistDeselection(_url) { 
        console.log("[droplist (1) - deselect an option]");
        this.selectCtrlFirstOpen().click();
        this.selectCtrlFirstChooseOne().click();
        Assert.equal(this.selectCtrlFirstLabel().getHTML(false), "one", "  -- Failure: Incorrect string value.");
        browser.pause(2000);
        this.selectCtrlFirstOpen().click();        
        this.selectCtrlFirstChooseOne().click();
        Assert.equal(this.selectCtrlFirstLabel().getHTML(false), "", "  -- Failure: Incorrect string value.");
        browser.url(_url);
    }    

    //  TEST DROPLIST 3: Selection
    testThirdDroplistSelection(_url) { 
        console.log("[droplist (3) - select an option]");
        this.selectCtrlThirdOpen().click();
        this.selectCtrlThirdChooseThree().click();
        Assert.equal(this.selectCtrlThirdLabel().getHTML(false), "three", "  -- Failure: Incorrect string value.");
        browser.url(_url);
    }

    // TEST DROPLIST 3: Deselect
    testThirdDroplistDeselection(_url) { 
        browser.url(_url);
        console.log("[droplist (3) - verify unable to deselect options]");
        this.selectCtrlThirdOpen().click();
        this.selectCtrlThirdChooseThree().click();
        Assert.equal(this.selectCtrlThirdLabel().getHTML(false), "three", "  -- Failure: Incorrect string value.");
        browser.pause(2000);
        this.selectCtrlThirdOpen().click();
        this.selectCtrlThirdChooseThree().click();
        Assert.equal(this.selectCtrlThirdLabel().getHTML(false), "three", "  -- Failure: Incorrect string value.");
        browser.url(_url);
    } 

    //  TEST DROPLIST 4: Selection
    testFourthDroplistSelection(_url) { 
        console.log("[droplist (4) - select a checkbox option]");
        this.selectCtrlFourthOpen().click();
        this.selectCtrlFourthChooseOne().click();
        Assert.equal(this.selectCtrlFourthLabel().getHTML(false), "four", "  -- Failure: Incorrect string value.");
        browser.url(_url);
    }
    
    // TEST DROPLIST 4: Search
    testFourthDroplistSearch(_url) {
        console.log("[droplist (4) - search a checkbox option]");
        this.selectCtrlFourthOpen().click();
        this.selectCtrlFourthType().setValue("Jenny Jones");
        this.selectCtrlFourthTypeSelect().click();
        Assert.equal(this.selectCtrlFourthLabel().getHTML(false), "Jenny Jones", "  -- Failure: Incorrect search string value.");
        browser.url(_url);
    }
    
    // TEST DROPLIST 4: Deselect
    testFourthDroplistDeselection(_url) { 
        console.log("[droplist (4) - deselect an option]");
        this.selectCtrlFourthOpen().click();
        this.selectCtrlFourthChooseOne().click();
        Assert.equal(this.selectCtrlFourthLabel().getHTML(false), "four", "  -- Failure: Incorrect string value.");
        browser.pause(2000);
        this.selectCtrlFourthChooseOne().click();
        Assert.equal(this.selectCtrlFourthLabel().getHTML(false), "", "  -- Failure: Incorrect string value.");
    }    

    // SHARED METHODS
    open(_url) {
        Page.open(_url);
    }
}
module.exports = new SelectCtlPage();