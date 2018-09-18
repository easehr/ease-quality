# ease-quality

Initial setup framework for automated UI tests, now optimized to support React. A work in progress.

## Run a single test

1. In root directory, apply  `npm install` for your environment.
2. Next, apply  `npm update`.
3. Type `grunt webdriver:chrome -v`, which will launch Chrome and navigate to our production version of EaseCentral. **Don't worry**. This is just a simple test.

###  - OR - 

4. If you have **ease-ui** and you are running **yarn start**, type `grunt webdriver:selectchrome -v`, which will launch Chrome and navigate to  **http://192.168.1.100:8000/** to test a single utility page.

## Dependencies / Troubleshoot
If you run into any issues - please check that you have these dependencies.

- Java JRE (latest version)
- nodeJS (latest version)
- npm (latest version)
- drivers/chromedriver
- drivers/geckodriver
- drivers/selenium-server-standalone-3.14.3.jar
- /usr/bin/safaridriver (automatically installed w/ Safari)

## More Help 
- Update URLs to test with in **utils/utility.js**.
- Customize each browser test by modifying the **gruntfile.js** and add a new **wdio.[browser_name].conf.js**
