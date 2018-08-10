const utils = require('./utils/utility');
let _browser = "";

exports.config = {
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/specs/*.js'
  ],
  // Patterns to exclude.
  exclude: [
    // './test/specs/file-to-exclude.js'
  ],

  // ============
  // Capabilities
  // ============
  maxInstances: 15,
  capabilities: [        
    {
      browserName: 'safari',
      platform: 'MAC',
      acceptUntrustedCertificates: true,
      maxInstances: '5',
      safariOptions: {
        args: ['--enable', ],
        binary: '/Applications/Safari.app ./usr/bin/safaridriver'
      },     
    },
  ],

  services: ['selenium-standalone'],
  webDriverType: 'safaridriver',

  // ===================
  // Test Configurations
  // ===================
  sync: true,
  logLevel: 'error',                              // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true,                              // Enables colors for log output.
  screenshotPath: './test/reports/errorShots/',   // Saves a screenshot to a given path if a command fails.
  waitforTimeout: 50000,                          // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 50000,                  // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3,                        // Default request retries count

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
  
  // =====
  // Hooks
  // =====
  onPrepare: function (config, capabilities) {
    _browser = capabilities[0].browserName;     // Set global
    utils.easeStamp(_browser, 'Initiated');
    
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
    utils.exitStamp(exitCode, _browser);
    utils.quarantineStamp(exitCode, _browser);
    utils.easeStamp(_browser,'Completed');
  }
}