import { Locator, Page } from '@playwright/test';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {
  protected page: Page;
  private readonly progressLoader: string;

  constructor(page: Page) {
    this.page = page;
    this.progressLoader = '.progress';
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitForLoading() {
    const orderSent = this.page.locator(this.progressLoader);
    await orderSent.waitFor({ state: 'visible' });
    await orderSent.waitFor({ state: 'hidden' });
  }

  async getText(element: Locator) {
    return element.innerText();
  }

  async click(element: string | Locator) {
    if (typeof element === 'string') {
      return this.page.click(element);
    }
    return element.click();
  }

  async type(selector: string, text: string) {
    return this.page.fill(selector, text);
  }
}
