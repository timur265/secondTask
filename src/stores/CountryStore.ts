import { LocalCountriesType } from "src/types/CountryTypes";

const CountryStore = () => ({
  countries: [] as LocalCountriesType,
  load(countries: LocalCountriesType) {
    this.countries = [...countries];
  },
  get all() {
    return this.countries;
  },
  findById(countryId: string) {
    return this.countries.find(function (country) {
      return country.id == countryId;
    });
  },
  findByRegion(region: string) {
    const filteredCountries = this.countries.filter(function (country) {
      return country.region == region;
    });
    return filteredCountries;
  },
  findByName(countryName: string) {
    const filteredCountries = this.countries.filter(function (country) {
      return country.name.match(countryName);
    });
    return filteredCountries;
  },
});
export default CountryStore;
