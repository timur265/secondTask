import { useLocalObservable } from "mobx-react";
import React from "react";
import AppStore from "src/stores/AppStore";
import CountryStore from "src/stores/CountryStore";

export const AppContext = React.createContext({
  countryStore: CountryStore(),
});

const AppContextProvider = (props: { children: JSX.Element }) => {
  const store = useLocalObservable(AppStore);

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => React.useContext(AppContext);
