import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  state = {
    counter: 0,
  };

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case "sub":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;
  //   }
  // };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((storedResult) => {
            return (
              <li
                key={storedResult.id}
                onClick={() => this.props.onDeleteResult(storedResult.id)}
              >
                {storedResult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// Connect local ctr to store counter
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionTypes.INCREMENT,
      }),
    onDecrementCounter: () =>
      dispatch({
        type: actionTypes.DECREMENT,
      }),
    onAddCounter: (val) =>
      dispatch({
        type: actionTypes.ADD,
        value: val,
      }),
    onSubtractCounter: (val) =>
      dispatch({
        type: actionTypes.SUBTRACT,
        value: val,
      }),
    onStoreResult: (result) =>
      dispatch({
        type: actionTypes.STORE_RESULT,result:result
      }),
    onDeleteResult: (id) =>
      dispatch({
        type: actionTypes.DELETE_RESULT,
        resultId: id,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//export default Counter;
