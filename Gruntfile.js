
// Only operates with selenium-server-standalone-3.5.3.jar : https://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar
// TODO: Test other selenium-server-standalone versions : https://selenium-release.storage.googleapis.com/index.html

module.exports = function (grunt) {
    grunt.initConfig({
        webdriver: {            
            chrome: {
                configFile: 'wdio.chrome.conf.js'       // chrome
            },

            safari: {
                configFile: 'wdio.safari.conf.js'       // safari
            },

            headless: {
                configFile: 'wdio.headless.conf.js'     // headless chrome
            }, 
    
            firefox: {
                configFile: 'wdio.firefox.conf.js'      // firefox
            },

            ie: {
                configFile: 'wdio.ie.conf.js'           // ie
            },

            selectctrl: {
                configFile: 'wdio.selectctrl.conf.js --suite chromeSuite' // note: 09/20/18 ... does not work yet - i need to pass in the options
            },                       
        },
    });
    
    grunt.loadNpmTasks('grunt-webdriver');    
    grunt.registerTask('test',[
      'webdriver'
    ]);
  };