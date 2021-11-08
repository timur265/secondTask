import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "src/config/routes";
import CountriesPage from "src/pages/CountriesPage";
import CountryPage from "src/pages/CountryPage";

function BodyWrapper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.countriesPage} exact component={CountriesPage} />
        <Route path={routes.countryPage} exact component={CountryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default BodyWrapper;
