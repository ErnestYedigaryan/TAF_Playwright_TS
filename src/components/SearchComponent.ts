import { expect, Page } from '@playwright/test';

import BasePage from '../pages/BasePage';
import { getNumericPart } from '../support/utils/stringTools';
import { SearchSelectors } from '../support/enums';

export interface SearchData {
  handDrive?: string;
  gearbox?: string;
  engine?: string;
}

export default class SearchComponent extends BasePage {
  private readonly searchInput: string;
  private readonly searchButton: string;
  private readonly suggestedResults: string;
  private readonly advancedSearchToggle: string;
  private readonly handDriveSelect: string;
  private readonly gearboxSelect: string;
  private readonly engineSelect: string;

  constructor(page: Page) {
    super(page);
    this.searchInput = '#searchInp-small';
    this.searchButton = '#search-btn';
    this.suggestedResults = '#searchDiv-small p';
    this.advancedSearchToggle = '.toggle-adv-search';
    this.handDriveSelect = '[name*="attr[87]"]';
    this.gearboxSelect = '[name*="attr[86]"]';
    this.engineSelect = '[name*="attr[88]"]';
  }

  async searchByName(query: string) {
    await this.type(this.searchInput, query);

    const suggestedResult = this.page
      .locator(this.suggestedResults)
      .filter({ hasText: query })
      .first();
    return this.click(suggestedResult);
  }

  async seeAllListings() {
    return this.click(this.searchButton);
  }

  async searchByParams(searchData: SearchData) {
    await this.click(this.advancedSearchToggle);

    const { handDrive, gearbox, engine } = searchData;
    const selections = [
      { value: handDrive, selector: SearchSelectors.HandDrive },
      { value: gearbox, selector: SearchSelectors.Gearbox },
      { value: engine, selector: SearchSelectors.Engine },
    ];

    for (const { value, selector } of selections) {
      if (value) {
        await this.selectFromDropdown(selector, value);
      }
    }
  }

  async selectFromDropdown(selector: SearchSelectors, optionValue: string) {
    let selectLocator;
    switch (selector) {
      case SearchSelectors.HandDrive:
        selectLocator = this.handDriveSelect;
        break;
      case SearchSelectors.Gearbox:
        selectLocator = this.gearboxSelect;
        break;
      case SearchSelectors.Engine:
        selectLocator = this.engineSelect;
        break;
    }
    await this.page.selectOption(selectLocator, { value: optionValue });
  }

  async checkSearchResultsCount(count: number) {
    const searchButton = this.page.locator(this.searchButton);
    const searchResultsCount = getNumericPart(await this.getText(searchButton));

    expect(searchResultsCount).toEqual(count.toString());
  }
}
