export type ServiceCountriesType = {
  name: {
    common: string;
  };
  region: string;
}[];

export type ServiceCountryType = {
  name: {
    common: string;
  };
  region: string;
};

export type LocalCountriesType = {
  id: string;
  name: string;
  region: string;
}[];

export type LocalCountryType = {
  id: string;
  name: string;
  region: string;
};

export type CountryStoreType = {
  countryStore: {
    countries: LocalCountriesType;
    load(countries: LocalCountriesType): void;
    readonly all: LocalCountriesType;
  };
};
