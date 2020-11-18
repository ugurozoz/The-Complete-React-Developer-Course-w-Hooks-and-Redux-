import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import classes from "./Orders.css";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    let orders = null;

    orders = this.props.orders.map((order) => {
      let price = +order.price;
      price = price.toFixed(2);
      let ingredients = [];
      for (let ingredient in order.ingredients) {
        ingredients.push(`${ingredient}(${order.ingredients[ingredient]}) `);
      }
      let ingredientsStyled = ingredients.map((ingredient, index) => (
        <span className={classes.Ingredient} key={index}>
          {ingredient}
        </span>
      ));
      return (
        <Order key={order.id} price={price} ingredients={ingredientsStyled} />
      );
    });

    return <div>{this.props.loading ? <Spinner /> : orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.oR.orders,
    loading: state.oR.loading,
    token: state.aR.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
