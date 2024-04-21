import { expect, Locator, Page } from '@playwright/test';

import BasePage from '../pages/BasePage';

export default class ListingCardComponent extends BasePage {
  private readonly listingCards: Locator;
  private readonly listingCardTitles: Locator;
  private readonly listingCardPrices: Locator;

  constructor(page: Page) {
    super(page);
    this.listingCards = this.page.locator('#search-result .card');
    this.listingCardTitles = this.listingCards.locator('.card-title');
    this.listingCardPrices = this.listingCards.locator('.price');
  }

  async openListing(index: number) {
    const listing = this.listingCardTitles.nth(index);
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.click(listing),
    ]);
    await newPage.waitForLoadState();

    return newPage;
  }

  async getPrice(index: number) {
    const price = this.listingCardPrices.nth(index);

    return this.getText(price);
  }

  async checkListingsTitles(text: string) {
    const allElementsCount = await this.listingCardTitles.count();

    for (let i = 0; i < allElementsCount; i++) {
      const currentElement = this.listingCardTitles.nth(i);
      const elementText = await this.getText(currentElement);

      expect(elementText).toContain(text);
    }
  }
}
