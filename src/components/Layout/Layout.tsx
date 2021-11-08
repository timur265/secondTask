import classes from "./Layout.css";
import cn from "clsx";
import React from "react";
import { routes } from "src/config/routes";
import Typography from "../ui-kit/Typography";

const Layout = (props: {
  children: React.ReactNode;
  setProducts?: Function;
}) => {
  if (props.setProducts) {
    props.setProducts(1);
  }
  return (
    <>
      <nav className={cn(classes.navContainer)}>
        <ul className={cn(classes.navMenu)}>
          <Typography variant="li" color="white">
            <a href={routes.countriesPage}>Countries</a>
          </Typography>
        </ul>
      </nav>
      <main className={cn(classes.container)}>{props.children}</main>
    </>
  );
};

export default Layout;
