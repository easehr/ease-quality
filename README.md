# ease-quality

Initial setup framework for automated UI tests, now optimized to support React. A work in progress.

## Run a single test
1. Clone this repo.
2. Install the latest [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html)
3. Open a terminal window, then go to the **ease-quality** directory and run `npm install`.
4. Next, type `grunt webdriver:chrome -v`, which will launch Chrome and navigate to our production version of EaseCentral. **Don't worry**. This is just a simple test.

## Dependencies
If you run into any issues - please check that you have met these dependencies, which are:

- Java JDK ([latest version](http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html))
- nodeJS (latest version)
- npm (latest version)
- drivers/chromedriver
- drivers/geckodriver
- drivers/selenium-server-standalone-3.14.3.jar
- /usr/bin/safaridriver (automatically installed w/ Safari)

## Troubleshoot
### (1) **URLs**:

To update URLs to test with, make changes to **utils/utility.js**.

### (2) **Browsers**:

Customize each browser test by modifying the **gruntfile.js** and add a new **wdio.[browser_name].conf.js**

### (3) **Chrome**: 

(a) If **chromedriver** does not execute, you can open a terminal window and navigate to your **ease-quality** directory, thenrun the following: 

`java -jar -Dwebdriver.chrome.driver=./drivers/chromedriver -Dwebdriver.gecko.driver=./drivers/geckodriver  -Dwebdriver.safari.driver=./usr/bin/safaridriver  ./drivers/selenium-server-standalone-3.14.0.jar`

(b) If your Chrome binary is not found, you will have to make sure that your binary path is set to:

**Mac**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

**Windows 10**: `C:/Program Files (x86)/Google/Chrome/Application/chrome.exe`

### (4) **Internet Explorer**

We will run Internet Explorer primarily in SauceLabs. However, to run Internet Explorer on your local system (Parallels/Windows 10) you will need to place this ease-quality repo in your Windows environment. After doing so, follow these specific steps:

a. In the **ease-quality** directory (in Windows), install -

`npm i iedriver`

`npm i wdio-iedriver-service`

These packages have specific NPM vulnerabilities and are not initially set within the repo.

b. Once these packages are in place, you will be able to use the Internet Explorer tests. These tests will run slowly and require that the IE browser setting has a starting Zoom size at '100%' (you can find this in IE, clicking the "gear" icon, ten selecting "Zoom" > 100%). If these setting are in place,you can run Internet Explorer from the *ease-quality* directory: 

`grunt webdriver:ie -v` 

If you have **ease-ui** and you are running **yarn start**, type: 

`grunt webdriver:selectie -v`

### (5) **Select Controllers**

To run tests against the Select Controllers, you can run **yarn start** under the **ease-ui** then type: 

`grunt webdriver:selectall -v` 

*selectall* will launch Chrome, Safari, and Firefox (for Mac ONLY) and navigate to  **192.168.1.100** to test a single utility page (if you have a different IP address, you can update the IP Address / URL - in the **utils/utility.js**).
