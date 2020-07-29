module.exports = {
    beforeEach: browser => {
        browser.url("https://www.yoodlize.com/")
            .waitForElementPresent("#root")
    },
    after: browser=> {
        browser.end()
    },
    'Check the home page': browser => {
        browser

    },
    'Check required fields on warrant': browser => {
        browser
    }
}