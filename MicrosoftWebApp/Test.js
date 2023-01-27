import MicrosoftWebApp from "./MicrosoftWebApp";


fixture.disablePageReloads`Microsoft Fixture`
    .page`https://www.microsoft.com/es-mx/`
    .before(async ctx => {
        const userData = require("./DataFile.json");

        ctx.Positive = userData.Positive;
        ctx.Negative = userData.Negative;

    })

test('TC01 - Positive Scenario', async t => {
    await t
        .maximizeWindow()
        .click(MicrosoftWebApp.localePicker).wait(1000)
        .click(MicrosoftWebApp.englishOption)
    await MicrosoftWebApp.searchInPage(t.fixtureCtx.Positive);
    await t
        .click(MicrosoftWebApp.shopLink)
        .click(MicrosoftWebApp.firstResult).wait(1500)
        .pressKey('esc').wait(1000)
        .click(MicrosoftWebApp.addToCartButton)
        .expect(MicrosoftWebApp.cartPageTitle.innerText).eql("Shopping cart - Microsoft Store")
        .expect(MicrosoftWebApp.checkoutButton.visible).ok();
});

test('TC02 - Negative Scenario', async t => {
    await t
        .maximizeWindow()
    //.click(MicrosoftWebApp.localePicker).wait(1000)
    //.click(MicrosoftWebApp.englishOption)
    await MicrosoftWebApp.searchInPage(t.fixtureCtx.Negative);
});