var yooPage = {}
var i;

module.exports = {
    beforeEach: browser => {
        yooPage = browser.page.yooPage()
        yooPage.navigate()
    },
    after: browser=> {
        yooPage.end()
    },
    'Click on every see all element': browser => {

        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll1')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Recreational Vehicles")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll2')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Outdoor Gear")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll3')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Electronics")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll4')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Party & Wedding Equipment")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll5')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Tools")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll6')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Clothing")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll7')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Home and Kitchen")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll8')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Toys and Games")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll9')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Lawn and Garden")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll10')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Sporting Equipment")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll11')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"DVDs")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll12')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Venues")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll13')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Music")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll14')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Business Equipment")
        browser.back()
        yooPage
        .waitForElementVisible('@seeAll')
        .click('@seeAll15')
        .waitForElementVisible('@verifyCata')
        .verify.containsText('@verifyCata',"Misc")
        browser.back()

        

    }
}