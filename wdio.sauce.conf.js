const utils = require('./utils/utility');
let _browser = "";

exports.config = {
  // ============
  // Sauce Labs
  // ============
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,
  services: ['sauce'],

  // ============
  // Capabilities
  // ============
  maxInstances: 1,
  capabilities: [{
      // ===============
      // CHROME / WIN 10 
      // ===============      
      name : 'Ease Test Automation - Chrome, Win10',
      browserName: 'chrome',
      platform: 'Windows 10',
      logLevel: 'trace'
    },{
      // ================
      // FIREFOX / WIN 10
      // ================
      name : 'Ease Test Automation - Firefox, Win10',
      browserName: 'firefox',
      platform: 'Windows 10',
      logLevel: 'trace'
    },{
      // ===============
      // CHROME / MAC OS 
      // ===============
      name : 'Ease Test Automation - Chrome, MacOS',
      browserName: 'chrome',
      platform: 'macOS 10.13',
      logLevel: 'trace'
    },{
      // ================
      // FIREFOX / MAC OS 
      // ================
      name : 'Ease Test Automation - Firefox, MacOS',
      browserName: 'firefox',
      platform: 'macOS 10.13',
      logLevel: 'trace'
    },{
      // ================
      // SAFARI / MAC OS 
      // ================
      name : 'Ease Test Automation - Safari, MacOS',
      browserName: 'safari',
      platform: 'macOS 10.13',      
      screenResolution: '1400x1050',
      acceptUntrustedCertificates: true,
      logLevel: 'trace'
    },{     
      // ================================================
      // EDGE / WIN 10 (REQUIRES ATTENTION - SCREEN SIZE)
      // ================================================
      name : 'Ease Test Automation - MS Edge, Win10',      
      browserName: 'MicrosoftEdge',
      version: '16.16299',
      seleniumVersion: '2.52.0',
      platform: 'Windows 10',
      logLevel: 'trace'
    },{
      // ================================================
      // IE 10 / WIN 8 (REQUIRES ATTENTION - SCREEN SIZE)
      // ================================================      
      name : 'Ease Test Automation - IE 10, Win8',      
      browserName: 'internet explorer',
      version: '10', 
      platform: 'Windows 8',
      logLevel: 'trace'
    },{
      // =================================================
      // IE 11 / WIN 10 (REQUIRES ATTENTION - SCREEN SIZE)
      // =================================================      
      name : 'Ease Test Automation - IE 11, Win10',      
      browserName: 'internet explorer',
      version: '11',
      seleniumVersion: '2.53.1',
      platform: 'Windows 10',
      logLevel: 'trace'
    }
  ],

  // ===================
  // Test Configurations
  // ===================
  sync: true,
  logLevel: 'error',                                // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true,                                // Enables colors for log output.
  screenshotPath: './test/reports/errorShots/',     // Saves a screenshot to a given path if a command fails.
  waitforTimeout: 150000,                           // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 150000,                   // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3,                          // Default request retries count

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

  // =========
  // Test Data
  // =========
  employeeUrl: utils._employeeUrl,
  employeeDashboardUrl: utils._employeeDashboardUrl,
  selectctlUrl: utils._selectctlUrl,
  baseUrl: utils._baseUrl,
  prodUrl: utils._prodUrl,
  netlifyUrl: utils._netlifyUrl,
  stageUrl: utils._stageUrl,
  redesignUrl: utils._redesignUrl,
  loginProdUrl: utils._loginProdUrl,
  signupProdUrl: utils._signupProdUrl,
  blogProdUrl: utils._blogProdUrl,
  bestbenefitProdUrl: utils._bestbenefitProdUrl,
  helpProdUrl: utils._helpProdUrl,
  pressBlogUrl: utils._pressBlogUrl,
  miscUrl: utils._miscUrl,
  employeeId: utils._empId,
  employeePwd: utils._empPwd,
  
  // =====
  // Hooks
  // =====
  onPrepare: function (config, capabilities) {
    _browser = capabilities[0].browserName;     // Set global
    utils.easeStamp(_browser, 'Initiated');
  },
  beforeSession: function (config, capabilities, specs) {},  
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
    utils.exitStamp(exitCode, _browser);
    utils.quarantineStamp(exitCode, _browser);
    utils.easeStamp(_browser,'Completed');
  }
}
