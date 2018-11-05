const utils = require('./utils/utility');
let _browser = "";

exports.config = {
  // ============
  // Capabilities
  // ============
  maxInstances: 5,
  capabilities: [        
    {
      browserName: 'chrome',
      acceptUntrustedCertificates: true,
      maxInstances: '1',
      logLevel: 'trace'
    }       
  ],

  services: ['selenium-standalone'],
  webDriverType: 'chromedriver',

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
  emailtemplateUrl: utils._etUrl,
  emailtemplateTabPageUrl: utils._etTabPageUrl,
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
  companyadminId: utils._etID,
  companyadminPwd: utils._etPwd,
  
  
  // =====
  // Hooks
  // =====
  onPrepare: function (config, capabilities) {
    _browser = capabilities[0].browserName;     // Set global
    utils.easeStamp(_browser, 'Initiated');
    //  console.log(config); // send meta data to the file
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
  afterCommand: function (commandName, args, result, error) {
    //console.log("-------------------\n Command: " + commandName + ": " + args ); // debug
  },
  afterTest: function (test) {},
  afterSuite: function (suite) {},
  after: function (result, capabilities, specs) {},
  afterSession: function (config, capabilities, specs) {},
  onComplete: function(exitCode, test) {
    utils.exitStamp(exitCode, _browser);
    utils.quarantineStamp(exitCode, _browser);    
    utils.easeStamp(_browser,'Completed');
  }
}