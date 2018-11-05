"use strict";

let Page = require('./page');
let Assert = require('chai').assert;
let Faker = require('faker');

class HomePage {

    // SELECTORS
    featuresLink() { return browser.element('//*[@id="header"]/div/div/div/div/div[1]/div/a[1]'); }
    pricingLink() { return browser.element('//*[@id="header"]/div/div/div/div/div[1]/div/a[2]'); }
    marketplaceLink() { return browser.element('//*[@id="header"]/div/div/div/div/div[1]/div/a[3]'); }
    employersLink() { return browser.element('//*[@id="header"]/div/div/div/div/div[1]/div/a[4]'); }
    loginLink() { return browser.element('//*[@id="header"]/div/div/div/div/div[1]/div/a[5]'); }
    callusLink() { return browser.element( 'div.css-1fcep4o'); } 
    securityLink() { return browser.element( '//a[contains(@href, "/security/")]'); }
    careersLink() { return browser.element('//a[contains(text(),"Careers")]')}
    privacyLink() { return browser.element('//a[contains(text(),"Privacy Policy")]')}
    tosLink() { return browser.element('//a[contains(text(),"Terms of Service")]')}
    blogLink() { return browser.element('//a[contains(text(),"Broker Blog")]')}
    bestbenefitsLink() { return browser.element('//a[contains(text(),"Best Benefits Software")]'); }
    helpdeskLink() { return browser.element('//a[contains(text(),"Help Desk")]'); }
    pressLink() { return browser.element('//a[contains(text(),"Press")]'); }
    signupLink() { return browser.element('//a[contains(text(),"Sign Up")]'); }

    getdemoBtn() { return browser.element('button.css-12nbrge'); }
    getdemoCloseBtn() { return browser.element('button.css-13i7nzy > svg'); }
    headerDlg() { return browser.element('.css-k12d22'); }
    nameFieldDlg() { return browser.element('input[name="email"]'); }
    firstnameFieldDlg() { return browser.element('input[name="firstName"]'); }
    lastnameFieldDlg() { return browser.element('input[name="lastName"]'); }
    companyFieldDlg() { return browser.element('input[name="company"]'); }
    phoneFieldDlg() { return browser.element('input[name="phone"]'); }
    jobSelect() { return browser.element('.Select-input'); }
    jobSelectPath() { return browser.element('//span/div/input'); }
    jobSelectEmployeePath() { return browser.element('//input[@value="Employee"]'); }
    jobtitleSelect() { return browser.element('span.Select-arrow'); }
    jobSelectLabel() { return browser.element('.Select-value-label'); }  

    videoBtn() { return browser.element('button.css-11y5mo2'); }
    videoCloseBtn() { return browser.element('button.vidyard_tclose'); }

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
    testPageLinks(_url, _blogurl, _besturl, _helpurl, _pressurl) { 
        browser.pause(2000);
        Assert.equal(this.featuresLink().getText().toUpperCase(), 'FEATURES', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.featuresLink().getAttribute('href')), _url + this.featureURL(), "  -- Failure: URL is incorrect for the link");
        this.featuresLink().click();  
        console.log("[Link Check: Features]");
        browser.url(_url);
        
        browser.pause(2000);
        Assert.equal(this.pricingLink().getText().toUpperCase(), 'PRICING', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.pricingLink().getAttribute('href')), _url + this.priceURL(), "  -- Failure: URL is incorrect for the link");
        this.pricingLink().click();  
        console.log("[Link Check: Pricing]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.marketplaceLink().getText().toUpperCase(), 'MARKETPLACE', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.marketplaceLink().getAttribute('href')), _url + this.marketURL(), "  -- Failure: URL is incorrect for the link");
        this.marketplaceLink().click();  
        console.log("[Link Check: Marketplace]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.employersLink().getText().toUpperCase(), 'EMPLOYERS', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.employersLink().getAttribute('href')), _url + this.employeeURL(), "  -- Failure: URL is incorrect for the link");
        this.employersLink().click();  
        console.log("[Link Check: Employers]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.securityLink().getText(), 'Security', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.securityLink().getAttribute('href')), _url + this.securityURL(), "  -- Failure: URL is incorrect for the link");
        this.securityLink().click();  
        console.log("[Link Check: Security]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.careersLink().getText(), 'Careers', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.careersLink().getAttribute('href')), _url + this.careerURL(), "  -- Failure: URL is incorrect for the link");
        this.careersLink().click();  
        console.log("[Link Check: Careers]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.privacyLink().getText(), 'Privacy Policy', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.privacyLink().getAttribute('href')), _url + this.privacyURL(), "  -- Failure: URL is incorrect for the link");
        this.privacyLink().click();  
        console.log("[Link Check: Privacy Policy]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.tosLink().getText(), 'Terms of Service', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.tosLink().getAttribute('href')), _url + this.tosURL(), "  -- Failure: URL is incorrect for the link");
        this.tosLink().click();  
        console.log("[Link Check: Terms of Service]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.blogLink().getText(), 'Broker Blog', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.blogLink().getAttribute('href')), _blogurl, "  -- Failure: URL is incorrect for the link");
        this.blogLink().click();  
        console.log("[Link Check: Broker Blog]");
        browser.url(_url);        

        browser.pause(2000);
        Assert.equal(this.bestbenefitsLink().getText(), 'Best Benefits Software', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.bestbenefitsLink().getAttribute('href')), _besturl, "  -- Failure: URL is incorrect for the link");
        this.bestbenefitsLink().click();  
        console.log("[Link Check: Best Benefits Software]");
        browser.url(_url);        

        browser.pause(2000);
        Assert.equal(this.helpdeskLink().getText(), 'Help Desk', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.helpdeskLink().getAttribute('href')), _helpurl, "  -- Failure: URL is incorrect for the link");
        this.helpdeskLink().click();  
        console.log("[Link Check: Help Desk]");
        browser.url(_url);

        browser.pause(2000);
        Assert.equal(this.pressLink().getText(), 'Press', "  -- Failure: Text value is incorrect for the link");
        Assert.equal(String(this.pressLink().getAttribute('href')), _pressurl, "  -- Failure: URL is incorrect for the link");
        this.pressLink().click();  
        console.log("[Link Check: Press]");
        browser.url(_url);          
    }

    testLoginLink(_url) { 
        browser.pause(2000);
        Assert.equal(this.loginLink().getText().toUpperCase(), 'LOGIN', "  -- Failure: Text value is incorrect for the link");
        this.loginLink().click(); 
        console.log("[Link Check: Login]");
        browser.url(_url);
    }

    testSignUpLink(_url) { 
        browser.pause(2000);
        Assert.equal(this.signupLink().getText(), 'Sign Up', "  -- Failure: Text value is incorrect for the link");
        this.signupLink().click(); 
        console.log("[Link Check: Sign Up]");
        browser.url(_url);
    }

    testGetDemoModal() { 
        browser.pause(2000);
        console.log("[Model Check: Get Demo]");
        this.getdemoBtn().click().pause(2500);
        Assert.equal(this.headerDlg().getText(), 'Request an EaseCentral demo', "  -- Failure: Get Demo did not display.");
        browser.setValue(this.nameFieldDlg().selector, Faker.internet.email());
        browser.setValue(this.firstnameFieldDlg().selector, Faker.name.firstName());
        browser.setValue(this.lastnameFieldDlg().selector, Faker.name.lastName());
        browser.setValue(this.companyFieldDlg().selector, Faker.company.companyName());
        browser.setValue(this.phoneFieldDlg().selector, Faker.phone.phoneNumber());
        this.getdemoCloseBtn().click().pause(1000);
    }  
    
    testVideo(_url) { 
        browser.pause(3000);
        console.log("[Modal Check: Video]");
        browser.scroll(0,0);
        browser.url(_url);
        Assert.equal(this.videoBtn().getText(), 'Watch Video', "  -- Failure: Video is not available to display.");
        this.videoBtn().click();
        browser.pause(10000);
        this.videoCloseBtn().click();        
    }    

    // SHARED METHODS
    open(_url) {
        Page.open(_url);
    }
}
module.exports = new HomePage();


/*
FROM: https://github.com/easehr/ease-app/blob/master/util/MFA.cs


public static bool IsValid(String secret, String password, int checkAdjacentIntervals = 1) {
            // Keeping a cache of the secret/password combinations that have been requested allows us to
            // make this a real one time use system. Once a secret/password combination has been tested,
            // it cannot be tested again until after it is no longer valid.
            // See http://tools.ietf.org/html/rfc6238#section-5.2 for more info.

            if (String.IsNullOrEmpty(secret) || String.IsNullOrEmpty(password)) return false;

            password = password.Replace(" ", "");

            var cacheKey = "MFA_" + secret + "_" + password;
            //if (Cache.Instance[cacheKey] != null) return false;
            //Cache.Instance[cacheKey] = "";

            if (password == GetPassword(secret)) return true;

            for (int i = 1; i <= checkAdjacentIntervals; i++) {
                if (password == GetPassword(secret, GetCurrentCounter() - i)) return true;
                if (password == GetPassword(secret, GetCurrentCounter() + i)) return true;
            }

            return false;
        }

EMAIL:

https://developers.google.com/gmail/api/quickstart/nodejs
https://emailjs.org/


*/