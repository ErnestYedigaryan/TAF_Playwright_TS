import { Page } from '@playwright/test';

import { envs } from '../support/config/envs';
import BasePage from './BasePage';
import SearchComponent from '../components/SearchComponent';

export default class HomePage extends BasePage {
  public searchVehicleComponent: SearchComponent;

  constructor(page: Page) {
    super(page);
    this.searchVehicleComponent = new SearchComponent(page);
  }

  async visit() {
    return this.navigate(envs.prod);
  }
}
