import React from "react";
import classes from "./Order.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: {props.ingredients}</p>
      <p>
        Price: <strong>USD ({props.price})</strong>
      </p>
    </div>
  );
};

export default order;
