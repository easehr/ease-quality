const u = require('./utils/utility');
let _browser = "";

exports.config = {
   // ============
   // Capabilities
   // ============
    maxInstances: 5,
    capabilities: [          
        {
            browserName: 'chrome',
            browserID: 'headless',
            acceptUntrustedCertificates: true,
            chromeOptions: {
              args: ['--window-size=1280,1280', '--port=9999', '--headless', '--disable-gpu', '--remote-debugging-port=9223', '--disable-translate', '--disable-extensions'],
              binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
            },          
        },
    ],    

    // ===================
    // Test Configurations
    // ===================
    sync: true,
    logLevel: 'error',                              // Level of logging verbosity: silent | verbose | command | data | result | error
    coloredLogs: true,                              // Enables colors for log output.
    screenshotPath: './test/reports/errorShots/',   // Saves a screenshot to a given path if a command fails.

    baseUrl: 'https://www.easecentral.com',
    prodUrl: 'https://www.easecentral.com',
    stageUrl: 'https://www.easecentral.com',
    redesignUrl: 'https://www.easecentral.com',
    loginProdUrl: 'https://secure.easecentral.com/?jh4wPEjnBS9O9+btJV1QGg==_953e3bd00adb06c72d7fe8d83677d02ad6ef68efe762367e8d9fbecf5047fddaec',
    signupProdUrl: 'https://secure.easecentral.com/?PMdUS171FEZgIC0Kw7t8rXiqdo1tgs1VXgNOFashZcM=_5cdd69ab5c3c64725ecb6a7a73386c44fbdfedad10d1033f890e008f92ebc6fcec',
    blogProdUrl: 'http://blog.easecentral.com/category/broker-tool-belt/',
    bestbenefitProdUrl: 'https://www.easecentral.com/best-benefits-administration-software-for-brokers/',
    helpProdUrl: 'https://support.easecentral.com/support/home',
    pressBlogUrl: 'http://blog.easecentral.com/category/news/',

    waitforTimeout: 50000,                          // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 50000,                  // Default timeout in milliseconds for request if Selenium Grid doesn't send response
    connectionRetryCount: 3,                        // Default request retries count

    services: ['selenium-standalone'],
    
    framework: 'mocha',    
    mochaOpts: {
      ui: 'bdd',
      timeout: 90000,
      compilers: ['js:babel-register'],
    },

    reporters: ['spec','json','junit'],
    reporterOptions: {
        junit:  {outputDir:   './test/reports/junit-results/'},
        json:   {outputDir:   './test/reports/json-results/'},
    },
    
    // =====
    // Hooks
    // =====
    onPrepare: function (config, capabilities) {
      _browser = capabilities[0].browserID;     // Set global, using browserID
      u.easeStamp(_browser, 'Initiated');
    },
    beforeSession: function (config, capabilities, specs) {
    },  
    before: function (capabilities, specs) {
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
    beforeSuite: function (suite) {},
    beforeHook: function (each) {},
    afterHook: function (currentTest) {},
    beforeTest: function (test) {},
    beforeCommand: function (commandName, args) {},
    afterCommand: function (commandName, args, result, error) {},
    afterTest: function (test) {
      //console.log(test); // debug
    },
    afterSuite: function (suite) {},
    after: function (result, capabilities, specs) {},
    afterSession: function (config, capabilities, specs) {},
    onComplete: function(exitCode) {
      u.exitStamp(exitCode, _browser);
      u.quarantineStamp(exitCode, _browser);
      u.easeStamp(_browser,'Completed');
    }
}