// TODO: Test other selenium-server-standalone versions : https://selenium-release.storage.googleapis.com/index.html
// SINGLE TARGET SPEC: wdio wdio.chrome.conf.js --spec ./test/specs/employee/employee.test.js
// GRUNT TARGT: grunt webdriver:chrome -v
// SELENIUM SERVER TARGET: java -jar -Dwebdriver.chrome.driver=./drivers/chromedriver -Dwebdriver.gecko.driver=./drivers/geckodriver-21  -Dwebdriver.safari.driver=./usr/bin/safaridriver  ./drivers/selenium-server-standalone-3.14.0.jar

module.exports = function (grunt) {
    grunt.initConfig({
        webdriver: { 
            // ================
            // Browser Specific 
            // ================
            // Example: grunt webdriver:chrome -v           
            chrome: {
                configFile: 'wdio.chrome.conf.js',
                options: {
                    specs: [
                        './test/specs/home/home.test.js',
                        './test/specs/employee/employee.test.js'
                    ]
                },
            },
            safari: {
                configFile: 'wdio.safari.conf.js',
                options: {
                    specs: [
                        './test/specs/home/home.test.js',
                        './test/specs/employee/employee.test.js'
                    ]
                },
            },
            headless: {
                configFile: 'wdio.headless.conf.js',
                options: {
                    specs: [
                        './test/specs/home/home.test.js',
                        './test/specs/employee/employee.test.js'
                    ]
                },
            },                
            firefox: {
                configFile: 'wdio.firefox.conf.js',
                options: {
                    specs: [
                        './test/specs/home/home.test.js',
                        './test/specs/employee/employee.test.js'
                    ]
                },                
            },
            // ==================
            // Test Case Specific 
            // ==================
            // Runs only in Chrome. Use to request specific tests.
            // Example: grunt webdriver:employee -v
            employee: {
                configFile: 'wdio.chrome.conf.js',
                options: {specs: './test/specs/employee/employee.test.js'},
            },
            login: {
                configFile: 'wdio.chrome.conf.js',
                options: {specs: './test/specs/login/login.test.js'},
            },
            emailtemplates: {
                configFile: 'wdio.chrome.conf.js',
                options: {specs: './test/specs/emailtemplates/emailtemplates.test.js'},
            },
            // ==================
            // SauceLabs Specific 
            // ==================
            // Example: grunt webdriver:sauce -v
            sauce: {
                configFile: 'wdio.sauce.conf.js',
                options: {
                    specs: './test/specs/employee/employee.test.js'
                },
            },
            // ================
            // Feature Specific 
            // ================
            // Use to select one off projects under development
            selectctrl: {
                configFile: 'wdio.selectctrl.conf.js'
            },
        },
    });
    
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('test',['webdriver']);
  };