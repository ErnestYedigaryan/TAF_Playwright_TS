import { Page } from '@playwright/test';

import HomePage from './HomePage';
import ProductListingsPage from './ProductListingsPage';
import ProductDetailsPage from './ProductDetailsPage';

export class PageManager {
  readonly page: Page;

  readonly homePage: HomePage;
  readonly productListingsPage: ProductListingsPage;
  readonly productDetailsPage: ProductDetailsPage;

  constructor(page: Page) {
    this.page = page;

    this.homePage = new HomePage(this.page);
    this.productListingsPage = new ProductListingsPage(this.page);
    this.productDetailsPage = new ProductDetailsPage(this.page);
  }

  onHomePage() {
    return this.homePage;
  }

  onProductListingsPage() {
    return this.productListingsPage;
  }

  onProductDetailsPage() {
    return this.productDetailsPage;
  }
}
