import { Selector, t } from 'testcafe';

class Microsoft {
    constructor() {
        this.localePicker = Selector('#locale-picker-link');
        this.englishOption = Selector('a').withAttribute('href', 'https://www.microsoft.com/en-us/');
        this.searchIcon = Selector('#search')
        this.searchField = Selector('#cli_shellHeaderSearchInput')
        this.shopLink = Selector("a[aria-label='Shop pivot']")
        this.firstResult = Selector("a[aria-label='Microsoft Modern Wireless Headset']")
        this.closePopUp = Selector("button[aria-label='Cancel']")
        this.addToCartButton = Selector("button[class='btn btn-primary btn-block']")
        this.cartPageTitle = Selector("html head title")
        this.checkoutButton = Selector(".c-button.checkoutConfirmButton--66ckdkhY.f-primary.f-flex")
    }

    async searchInPage(toSearch) {
        await t
            .click(this.searchIcon)
            .typeText(this.searchField, toSearch)
            .pressKey('enter')
            .wait(10000)
    }

    async closePopUp() {
        const popUp = await t.getCurrentWindow();
        await t.closeWindow(popUp).wait(1000);
    }
}

export default new Microsoft();