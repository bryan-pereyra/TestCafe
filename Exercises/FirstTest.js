import { Selector } from 'testcafe';

const getElementsByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const items = [];
    let item = iterator.iterateNext();
    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }
    return items;
});
export default function (xpath) {
    return Selector(getElementsByXPath(xpath));
}

fixture`Getting Started`

fixture`Getting Started`.page`https://www.unosquare.com/ContactUs`;

test('TC01 - Fill data in contact page', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('input[name = "firstname"]').visible).ok()
        .typeText('input[name = "firstname"]', 'My Name')
        .typeText('input[name = "email"]', 'Myemail@unosquare.com')
        //.typeText('textarea[name = "message"]', 'The script can write a message!')
        .scrollBy(0, -500)
        .click(Selector(getElementsByXPath("//*[@id='menu-1-2009649']//a[contains(@href, 'https://www.unosquare.com/blog/')]")))
});

test('TC02 - Go to About page', async t => {
    await t
        .click(Selector(getElementsByXPath("//div[@class='elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button']//a[contains(@href, 'https://www.unosquare.com/contact-us/')]")))
});