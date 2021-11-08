import React from "react";
import { render } from "react-dom";
import AppWrapper from "src/wrappers/AppWrapper";
import BodyWrapper from "src/wrappers/AppWrapper/BodyWrapper/BodyWrapper";
import AppContextProvider from "./contexts/AppContext";

render(
  <AppWrapper>
    <AppContextProvider>
      <BodyWrapper />
    </AppContextProvider>
  </AppWrapper>,
  document.getElementById("root") as HTMLElement
);
