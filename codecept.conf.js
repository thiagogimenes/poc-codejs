const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com/',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'poc-codejs',
  mocha: {
    reporterOptions: {
      reportDir: 'output',
      overwrite: false,
      html: true,
      json: true
    },
    plugins: {
      htmlReporter: {
        enabled: true,
        uniqueScreenshotNames: true,
        reports: {
          dir: "report"
        },
      screenshotOnFail: {
          enabled: true
        },
        allure: {
          enabled: false
        }
      }
    }
  }
}