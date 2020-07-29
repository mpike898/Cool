module.exports = {
    beforeEach: browser => {
        browser.url("https://www.yoodlize.com/")
            //.waitForElementPresent("#root")
    },
    after: browser=> {
        browser.end()
    },
    'Click on every see all element': browser => {
        browser
        .useXpath()
        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[1]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Recreational Vehicles")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[2]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Outdoor Gear")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[3]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Electronics")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[4]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Party & Wedding Equipment")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[5]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Tools")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[6]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Clothing")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[7]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Home and Kitchen")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[8]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Toys and Games")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[9]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Lawn and Garden")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[10]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Sporting Equipment")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[11]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"DVDs")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[12]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Venues")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[13]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Music")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[14]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Business Equipment")
        browser.back()

        .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
        .click('(//div[contains(@class,"fmVgeN")])[15]')
        .waitForElementVisible('//*[contains(@class,"jSqgxr")]')
        .verify.containsText('//div[contains(@class,"jSqgxr")]',"Misc")
        browser.back()

        

    }
}