import { browser, element, by } from 'protractor';

export class Tareasv2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('t-root h1')).getText();
  }
}
