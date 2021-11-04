import React from "react";
import { render } from "react-dom";
import AppWrapper from "src/wrappers/AppWrapper";
import BodyWrapper from "src/wrappers/AppWrapper/BodyWrapper/BodyWrapper";

render(
  <AppWrapper>
    <BodyWrapper />
  </AppWrapper>,
  document.getElementById("root") as HTMLElement
);
