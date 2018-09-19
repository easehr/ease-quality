# ease-quality

Initial setup framework for automated UI tests, now optimized to support React. A work in progress.

## Run a single test

1. After cloning this repo, go to the **ease-quality** directory, and run `npm install`.
2. Next, run  `npm update`.
3. Type `grunt webdriver:chrome -v`, which will launch Chrome and navigate to our production version of EaseCentral. **Don't worry**. This is just a simple test.

###  - OR - 

4. If you have **ease-ui** and you are running **yarn start**, type 

`grunt webdriver:selectchrome -v`

which will launch Chrome and navigate to  **192.168.1.100** to test a single utility page (if you have a different IP address, you can update the IP Address / URL - see **Troubleshoot** below).

## Dependencies
If you run into any issues - please check that you have these dependencies.

- Java JDK ([latest version](http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html))
- nodeJS (latest version)
- npm (latest version)
- drivers/chromedriver
- drivers/geckodriver
- drivers/selenium-server-standalone-3.14.3.jar
- /usr/bin/safaridriver (automatically installed w/ Safari)

## Troubleshoot
(1) To update URLs to test with, make changes to **utils/utility.js**.

(2) Customize each browser test by modifying the **gruntfile.js** and add a new **wdio.[browser_name].conf.js**

(3) If **chromedriver** does not execute, you can open a terminal window and navigate to your **ease-quality** directory, thenrun the following: 

*java -jar -Dwebdriver.chrome.driver=./drivers/chromedriver -Dwebdriver.gecko.driver=./drivers/geckodriver  -Dwebdriver.safari.driver=./usr/bin/safaridriver  ./drivers/selenium-server-standalone-3.14.0.jar*
