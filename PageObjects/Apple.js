import { Selector } from 'testcafe';

class Apple {
    constructor() {
        this.searchIcon = Selector('a').withAttribute('id', 'ac-gn-link-search');
        this.searchInput = Selector('input[id = "ac-gn-searchform-input"]');
        this.iPadImage = Selector('div[class = "rf-serp-productimage"]');
    }
}

export default new Apple();