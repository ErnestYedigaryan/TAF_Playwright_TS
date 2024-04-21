import { expect, Page } from '@playwright/test';

import BasePage from './BasePage';
import { getNumericPart } from '../support/utils/stringTools';

export default class ProductDetailsPage extends BasePage {
  public title: string;
  public price: string;

  constructor(page: Page) {
    super(page);
    this.title = '#sec-blue [itemprop="name"]';
    this.price = '#sec-blue .price';
  }

  async checkTitleContains(page: Page, text: string) {
    const titleElement = await page.locator(this.title);
    const titleText = await this.getText(titleElement);

    return expect(titleText).toContain(text);
  }

  async checkPrice(page: Page, text: string) {
    const priceElement = await page.locator(this.price);
    const price = await this.getText(priceElement);
    const numericPrice = getNumericPart(price);

    return expect(numericPrice).toEqual(text);
  }
}
