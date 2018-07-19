/**
 *  globals.js
 *  Reusable global data
 */
'use strict';
const faker = require('Faker');
const request = require('request');

//var JSON = require("../../node_modules/JSON2/json2.js");

// UPDATE SAUCELABS STATUS
var updateSauceLabsStatus = function (browser, done) {
  var user = browser.options.username;
  var key = browser.options.accessKey;
  var jobId = browser.sessionId;
  if (user && key && jobId) {
    var passed = browser.currentTest.results.failed === 0 && browser.currentTest.results.errors === 0;
    console.log('* updating job status:', jobId, passed);
    var url = 'https://saucelabs.com/rest/v1/' + user + '/jobs/' + jobId;
    return request.put({
      url: url,
      auth: {
        username: user,
        password: key
      },
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({passed: passed})
    }, function (res, status, body) {
      browser.sessionLog(function(result) {
        console.log(result);
      }).end(function() {
        done();
      });
      done();
      browser.end();
    });
  } else {
    browser.end();
    return done();
  }
};

var self = module.exports = {

  afterEach: function(browser, done) {
    updateSauceLabsStatus(browser, done);
  },
  
  // ENV VARS
  APPID: process.env.APPLOGINID,
  APPLOGINPWD: process.env.APPLOGINPWD,
  EMAILID: process.env.EMAILID,
  EMAILPWD: process.env.EMAILPWD,

  // URLS
  PROD_URL: "https://www.easecentral.com",
  STAGE_URL: "https://ease.staging.easecentral.com/",
  STAGE_NEW: "https://ease.new.easecentral.com/",

  // WAIT CONDITIONS
  WAIT_5: 5000,
  WAIT_10: 10000,
  WAIT_25: 25000,
  WAIT_50: 50000,
  WAIT_100: 100000,
  
  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval : 500,
  
  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout : 60000,

 // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure : true,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout : 5000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned : true,

  // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout : 10000,



  // SSN
  //SSN3: faker.Helpers.replaceSymbolWithNumber("###"),
  //SSN2: faker.Helpers.replaceSymbolWithNumber("##"),
  //SSN4: faker.Helpers.replaceSymbolWithNumber("####"),

  // STATES
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
  _AL: "AL",
  _AK: "AK",
  _AZ: "AZ",
  _AR: "AR",
  _CA: "CA",
  _CO: "CO",
  _CT: "CT",
  _DE: "DE",
  _FL: "FL",
  _GA: "GA",
  _HI: "HI",
  _ID: "ID",
  _IL: "IL",
  _IN: "IN",
  _IA: "IA",
  _KS: "KS",
  _KY: "KY",
  _LA: "LA",
  _ME: "ME",
  _MD: "MD",
  _MA: "MA",
  _MI: "MI",
  _MN: "MN",
  _MS: "MS",
  _MO: "MO",
  _MT: "MT",
  _NE: "NE",
  _NV: "NV",
  _NH: "NH",
  _NJ: "NJ",
  _NM: "NM",
  _NY: "NY",
  _NC: "NC",
  _ND: "ND",
  _OH: "OH",
  _OK: "OK",
  _OR: "OR",
  _PA: "PA",
  _RI: "RI",
  _SC: "SC",
  _SD: "SD",
  _TN: "TN",
  _TX: "TX",
  _UT: "UT",
  _VT: "VT",
  _VA: "VA",
  _WA: "WA",
  _WV: "WV",
  _WI: "WI",
  _WY: "WY"
};