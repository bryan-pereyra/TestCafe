import { Selector } from 'testcafe';

fixture`Apple.com Flow`
    .page`https://www.apple.com/`;

test('TC01 - Apple', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.ac-gn-link.ac-gn-link-onlyonapple').innerText).contains('Apple', 'Element Text contains "Apple"')
        .expect(Selector('.ac-gn-link.ac-gn-link-onlyonapple').innerText).notContains('Store', 'Element NOT contains "Store"')
        .expect(Selector('.ac-gn-link.ac-gn-link-onlyonapple').innerText).eql('Only on Apple', 'Element Text is equal to "Only on Apple"')
        .expect(Selector('footer div:nth-child(1) > div ul li').count).eql(10)
        .expect(Selector('a').getAttribute('class')).eql('ac-ls-button ac-ls-actions-item ac-ls-continue')
        .expect(Selector('#ac-gn-firstfocus').exists).ok()
        .wait(1500)
        .takeScreenshot();
});