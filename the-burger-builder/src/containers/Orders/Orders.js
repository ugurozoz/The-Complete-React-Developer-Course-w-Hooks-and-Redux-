import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    const orders = axios
      .get("https://react-u-burger.firebaseio.com/orders.json")
      .then((response) => {
        const fetchedORders = [];
        for (let key in response.data) {
          fetchedORders.push({ ...response.data[key], id: key });
        }
        this.setState({ loading: false });
        this.setState({ orders: fetchedORders });
      })
      .catch((error) => {
        this.setState({ loading: false });
        this.setState({ error: true });
      });
  }

  render() {
    let orders = null;
    if (this.state.error) {
      orders = <h1>Some error occured</h1>;
    } else {
      orders = this.state.orders.map((order) => {
        let price = +order.price;
        price = price.toFixed(2);
        let ingredients = []
        for (let ingredient in order.ingredients) {
          console.log("ING>>", ingredient, order.ingredients[ingredient])
          ingredients.push(`${ingredient}(${order.ingredients[ingredient]}), `)
        }        
        return <Order key={order.id} price={price} ingredients={ingredients} />;
      });
     
    }
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
