import { Page } from '@playwright/test';

import BasePage from '../pages/BasePage';
import { SortOptions } from '../support/enums';

export default class SearchFilterComponent extends BasePage {
  private readonly sortBySelect: string;
  private readonly makesFilter: string;
  private readonly modelsFilter: string;

  constructor(page: Page) {
    super(page);
    this.sortBySelect = '[name="filter-sort"]';
    this.makesFilter = '.filter-makes .collapsible-body p';
    this.modelsFilter = '.filter-models .collapsible-body p';
  }

  async sortBy(sortType: SortOptions) {
    const sortByLocator = this.page.locator(this.sortBySelect);

    await sortByLocator.selectOption({ value: sortType });
  }

  async selectMake(make: string) {
    const makes = await this.page.locator(this.makesFilter);
    const makeLocator = makes.filter({ hasText: make });
    await this.click(makeLocator);
  }

  async selectModel(model: string) {
    const models = await this.page.locator(this.modelsFilter);
    const modelLocator = models.filter({ hasText: model });
    await this.click(modelLocator);
  }
}
