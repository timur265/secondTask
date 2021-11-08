import React, { useState } from "react";
import { useParams } from "react-router";
import Layout from "src/components/Layout";
import { useAppContext } from "src/contexts/AppContext";
import {
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import Typography from "src/components/ui-kit/Typography";
import classes from "./CountryPage.css";
import cn from "clsx";
import { LocalCountryType } from "src/types/CountryTypes";

const CountryPage = () => {
  const store = useAppContext();
  const params = useParams<{ countryId: string }>();
  const country = store.countryStore.findById(params.countryId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!country) {
    return (
      <Layout>
        <Typography variant="h1">Please choose country</Typography>
      </Layout>
    );
  }

  const siblingCountries = store.countryStore.findByRegion(country.region);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const getSiblingCountries = () => {
    return siblingCountries.map((siblingCountry: LocalCountryType) => {
      return (
        <div className={cn(classes.country)} key={siblingCountry.id}>
          <Typography variant="span">id: {siblingCountry.id}</Typography>
          <Typography variant="span">name: {siblingCountry.name}</Typography>
          <Typography variant="span">
            region: {siblingCountry.region}
          </Typography>
        </div>
      );
    });
  };

  const getAllData = () => {
    return (
      <TableRow>
        <TableCell>
          <Typography variant="span">{country.name}</Typography>
        </TableCell>
        <TableCell
          className={cn(classes.cell)}
          onClick={() => {
            handleClick();
          }}
        >
          <Typography variant="span">{country.region}</Typography>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Layout>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        className={cn(classes.modal)}
      >
        <Box className={cn(classes.box)}>{getSiblingCountries()}</Box>
      </Modal>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Country</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Region</Typography>
            </TableCell>
          </TableRow>
          {getAllData()}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default CountryPage;
