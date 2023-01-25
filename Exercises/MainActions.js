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

fixture`Getting Started`.page`https://www.unosquare.com/ContactUs`;

test('TC01 - Testing pressKey()', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('input[name = "firstname"]').visible).ok()
        .typeText('input[name = "firstname"]', 'My Name')
        .typeText('input[name = "email"]', 'Myemail@unosquare.com')
        .typeText('textarea[name = "message"]', 'Message')
        .pressKey('backspace') // You can do backspace once
        .pressKey('backspace backspace') // or you can have multiple in the same method
        .wait(3000)
        .pressKey('home right . delete')
        .wait(10000)
});

test('TC02 - Testing selectText()', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('input[name = "firstname"]').visible).ok()
        .typeText('input[name = "firstname"]', 'My Name')
        .typeText('input[name = "email"]', 'Myemail@unosquare.com')
        .typeText('textarea[name = "message"]', 'Hi!')
        .selectText('textarea[name = "message"]')
        .pressKey('delete')
        .wait(10000)
});

test('TC03 - Testing hoover()', async t => {
    await t
        .hover(Selector(getElementsByXPath("//*[@id='menu-item-3041']/a")))
        .wait(5000)
});

fixture`Example`.page`https://devexpress.github.io/testcafe/example/`;

test('TC04 - Drag test', async t => {
    const triedCheckbox = Selector('label').withText('I have tried TestCafe');

    await t
        .click(triedCheckbox)
        .drag('#slider', 360, 0, { offsetX: 10, offsetY: 10 });
});

fixture`Example`.page`https://www.file.io/`;

test('TC05 - Upload a file Test', async t => {
    await t
        .wait(8000)
        .setFilesToUpload(Selector('#select-folder'), [
            'C:/Users/bryan.pereyra/Desktop/Test/Upload Test.txt'
        ])
        .wait(8000);
});

test.page `https://devexpress.github.io/testcafe/example/`
('TC06 - Taking Screenshot', async t => {
    await t
    .wait(3000)
    .takeScreenshot()
    .takeElementScreenshot('.col-2');
});