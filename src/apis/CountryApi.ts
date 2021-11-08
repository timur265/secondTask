import api from "src/helpers/api";
import { v4 as uuidv4 } from "uuid";

import {
  CountryStoreType,
  ServiceCountriesType,
  ServiceCountryType,
} from "src/types/CountryTypes";

const formatData = (countries: ServiceCountriesType) => {
  const formatedBranchOffices = countries.map((country: ServiceCountryType) => {
    return {
      id: uuidv4(),
      name: country.name.common,
      region: country.region,
    };
  });

  return formatedBranchOffices;
};

export default async function getAll(store: CountryStoreType) {
  const response = await api().get("https://restcountries.com/v3.1/all");
  store.countryStore.load(formatData(response.data));
}
