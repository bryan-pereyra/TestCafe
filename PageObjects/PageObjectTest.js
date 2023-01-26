import Apple from './Apple.js';
import ContactUs from './ContactUs.js';

fixture`Testing Apple`
    .page`https://www.apple.com/`;

test('TC01', async t => {
    await t
        .maximizeWindow()
        .click(Apple.searchIcon)
        .typeText(Apple.searchInput, 'iPad Pro')
        .pressKey('enter').wait(10000)
        .expect(Apple.iPadImage.exists).ok();
});

fixture`Testing Contact Form`
    .page`https://www.unosquare.com/ContactUs`;

test('TC02', async t => {
    await t
        .maximizeWindow()
        .click(ContactUs.submitButton)
        .expect(ContactUs.errorMessage.exists).ok()
        .expect(ContactUs.errorMessage.count).eql(3)
        .expect(ContactUs.errorMessage.innerText).eql('Please complete this required field.');
});