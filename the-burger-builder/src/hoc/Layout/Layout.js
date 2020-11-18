import React, { Component } from "react";
import { connect } from 'react-redux';
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerCloseHandler = () => {    
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {    
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  };



  render() {
    return (
      <Aux>
        <Toolbar isAuthenticated={this.props.isAuthenticated} drawerToggleClicked={this.SideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerCloseHandler}
        />

        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.aR.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
