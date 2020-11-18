import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { NavLink } from "react-router-dom";

const navigationItems = (props) => {
  console.log(props.isAuthenticated);
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {props.isAuthenticated ? (
        <NavigationItem link="/orders">Orders</NavigationItem>) : null}
      {props.isAuthenticated ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/auth"> Authenticate</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
