import { browser, element, by } from 'protractor';

export class OnePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('one-root h1')).getText();
  }
}
