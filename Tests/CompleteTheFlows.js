import { Selector } from 'testcafe';

fixture`Apple.com Flow`
    .page`https://www.apple.com/`;

test('TC01 - Apple', async t => {
    await t
        .maximizeWindow()
        .click(Selector('a').withAttribute('id', 'ac-gn-link-search'))
        .typeText('input[id = "ac-gn-searchform-input"]', 'iPad Pro')
        .pressKey('enter').wait(10000)
        .expect(Selector('div[class = "rf-serp-productimage"]').exists).ok()
        .click(Selector('a').withAttribute('href', 'https://www.apple.com/ipad-pro/')).wait(10000)
        .click(Selector('a').withText('Buy')).wait(10000)
        .expect(Selector("title").innerText).contains('Buy iPad Pro')

});

fixture`Test Cafe Flow`
    .page`https://www.google.com/`;

test('TC02 - Test Cafe Automation', async t => {
    await t
        .maximizeWindow()
        .typeText('input[name = "q"]', 'Test Automation Cafe')
        .click(Selector('input').withAttribute('value', 'Buscar con Google')).wait(10000)
        .click(Selector('h3').withAttribute('class', 'LC20lb MBeuO DKV0Md')).wait(10000)
        .expect(Selector('a').withText('Get Started').exists).ok();
});