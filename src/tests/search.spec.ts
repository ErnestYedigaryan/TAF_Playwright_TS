import { test } from '@playwright/test';

import { getNumericPart } from '../support/utils/stringTools';
import { PageManager } from '../pages/PageManager';
import { EngineOptions, GearboxOptions, HandDriveOptions, SortOptions } from '../support/enums';

let pm: PageManager;

test.beforeEach(async ({ page }) => {
  pm = new PageManager(page);
  await pm.onHomePage().visit();
});

test('1. Verify filter functionality on the "Search" page', async () => {
  const vehicle = {
    make: 'Toyota',
    model: 'Altezza',
  };

  await pm.onHomePage().searchVehicleComponent.seeAllListings();
  await pm.onProductListingsPage().searchFilterComponent.selectMake(vehicle.make);
  await pm.onProductListingsPage().searchFilterComponent.selectModel(vehicle.model);
  await pm.onProductListingsPage().waitForLoading();
  await pm
    .onProductListingsPage()
    .listingCardComponent.checkListingsTitles(`${vehicle.make} ${vehicle.model}`);
});

test('2. Verify that it can open the searched car.', async () => {
  const searchQuery = 'Toyota Camry';

  await pm.onHomePage().searchVehicleComponent.searchByName(searchQuery);
  await pm.onProductListingsPage().searchFilterComponent.sortBy(SortOptions.PriceDescending);
  await pm.onProductListingsPage().waitForLoading();
  const listingPrice = await pm.onProductListingsPage().listingCardComponent.getPrice(0);
  const listingPage = await pm.onProductListingsPage().listingCardComponent.openListing(0);

  await pm.onProductDetailsPage().checkPrice(listingPage, getNumericPart(listingPrice));
  await pm.onProductDetailsPage().checkTitleContains(listingPage, searchQuery);
});

// This test will fail due to incorrect count, there are more than 1000 listings with this search criteria.
test('3. Verify that all offers count/data is 1000.', async () => {
  await pm.onHomePage().searchVehicleComponent.searchByParams({
    handDrive: HandDriveOptions.LeftHand,
    gearbox: GearboxOptions.Automatic,
    engine: EngineOptions.Electric,
  });
  await pm.onHomePage().waitForLoading();

  await pm.onHomePage().searchVehicleComponent.checkSearchResultsCount(1000);
});
