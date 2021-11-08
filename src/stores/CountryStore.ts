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
});
export default CountryStore;
