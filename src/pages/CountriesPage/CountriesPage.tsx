import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout";
import { useAppContext } from "src/contexts/AppContext";
import getAll from "src/apis/CountryApi";
import { LocalCountryType } from "src/types/CountryTypes";
import { observer } from "mobx-react-lite";
import Typography from "src/components/ui-kit/Typography";
import { useHistory } from "react-router";
import classes from "./CountriesPage.css";
import cn from "clsx";

const CountriesPage = observer(() => {
  const store = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const load = async () => {
    try {
      await getAll(store);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleClick = (id: string) => {
    history.push(`/country/${id}`);
  };

  const getAllCountries = () => {
    return store.countryStore.all.map(
      (country: LocalCountryType, index: number) => {
        return (
          <TableRow
            className={cn(classes.row)}
            key={country.id}
            onClick={() => {
              handleClick(country.id);
            }}
          >
            <TableCell>{country.name}</TableCell>
            <TableCell>{country.region}</TableCell>
          </TableRow>
        );
      }
    );
  };

  if (isLoading) {
    return (
      <Layout>
        <Typography variant="h1">Loading...</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Country Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Region</Typography>
            </TableCell>
          </TableRow>
          {getAllCountries()}
        </TableBody>
      </Table>
    </Layout>
  );
});

export default CountriesPage;
