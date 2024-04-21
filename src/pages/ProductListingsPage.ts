import { Page } from '@playwright/test';

import { envs } from '../support/config/envs';
import BasePage from './BasePage';
import SearchFilterComponent from '../components/SearchFilterComponent';
import ListingCardComponent from '../components/ListingCardComponent';

export default class ProductListingsPage extends BasePage {
  public searchFilterComponent: SearchFilterComponent;
  public listingCardComponent: ListingCardComponent;

  constructor(page: Page) {
    super(page);
    this.searchFilterComponent = new SearchFilterComponent(page);
    this.listingCardComponent = new ListingCardComponent(page);
  }

  async visit() {
    return this.navigate(`${envs.prod}/search`);
  }
}
