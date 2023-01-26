import { Selector } from 'testcafe';

class ContactUs {
    constructor() {
        this.submitButton = Selector("input[value='Submit']");
        this.errorMessage = Selector("label[class='hs-error-msg']");
    }
}

export default new ContactUs();