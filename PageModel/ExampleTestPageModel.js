import page from './mainPage.js';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});