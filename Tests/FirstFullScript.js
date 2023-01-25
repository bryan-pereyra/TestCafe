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

fixture`First Full Script`
    .page`https://www.amazon.com.mx/`;

test('TC01 - Amazon Flow', async t => {
    await t
        .maximizeWindow()
        .typeText('input[id = "twotabsearchtextbox"]', 'Samsung Galaxy Note 20')
        .pressKey('enter').wait(10000)
        const firstResult = await Selector(getElementsByXPath("(//div[@class='sg-col-inner'])[4]"));
        await t.expect(firstResult.visible).ok()
        const firstPrice = await Selector("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-offscreen']").innerText;
        await t.click(firstResult).wait(1000)
        .scrollBy(0, -500).wait(1000)
        .expect(Selector("span[class='a-price a-text-price a-size-medium'] span[class='a-offscreen']").innerText).eql(firstPrice)
        .click(Selector('input').withAttribute('id','add-to-cart-button'))
        .click(Selector('a').withAttribute('id','nav-cart')).wait(1000)
        .expect(Selector('span').withAttribute('class','a-size-medium a-color-base sc-price sc-white-space-nowrap').innerText).eql(firstPrice)
        .click(Selector("input[value='Eliminar']"))
        .takeScreenshot();
    });