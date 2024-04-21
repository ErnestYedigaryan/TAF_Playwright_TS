export enum HandDriveOptions {
  LeftHand = '21',
  RightHand = '22',
}

export enum GearboxOptions {
  Manual = '1',
  Automatic = '2',
}

export enum EngineOptions {
  Gasoline = '4',
  Diesel = '6',
  Hybrid = '7',
  Electric = '8',
}

export enum SearchSelectors {
  HandDrive = 'handDriveSelect',
  Gearbox = 'gearboxSelect',
  Engine = 'engineSelect',
}

export enum SortOptions {
  Latest = 'latest',
  PriceAscending = 'price-asc',
  PriceDescending = 'price-desc',
  YearAscending = 'year-asc',
  YearDescending = 'year-desc',
}
