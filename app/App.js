import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Login, Signup } from "./components/auth-form";
import Home from "./components/home";
import Articles from "./components/article";
import Stores from "./components/storeAlt";
import { me } from "./store/users";
import BottomAppBar from "./components/navbar";
import {Header} from "./components/header";
import AltCart from './components/altCart'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
    };
  }

  componentDidMount() {
    this.props.loadInitialData();

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      if(domain.slice(0, 3) === "www") {
        let companyName = domain.slice(4)
        if (companyName.includes(".")) {
          const idx = companyName.indexOf(".")
          companyName = companyName.slice(0, idx)
        }
        companyName = companyName[0].toUpperCase() + companyName.slice(1)
        this.setState({
          domain: companyName,
        })
      } else {
        if (domain.includes(".")) {
          const idx = domain.indexOf(".")
          let companyName = domain.slice(0, idx)
          companyName = companyName[0].toUpperCase() + companyName.slice(1)
          this.setState({
            domain: companyName,
          });
        }
      }
    });
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;
    return (
      <div>
        <Header />
        <BottomAppBar state={this.state} />
        <Switch>
          <Route exact path="/home" render={props => <Home {...this.state} />} />
          <Route path="/news" render={props => <Articles {...this.state} />} />
          <Route path="/search" render={props => <Stores {...this.props}/>}/>
          <Route path="/login" render={props => <Login {...this.props} />} />
          <Route path="/signup" render={props => <Signup {...this.props} />} />
          <Route path ="/altCart" render={props => <AltCart {...this.state} />} />
          {/* {isLoggedIn && (
            <Switch>
              <Route exact path="/home" component={Home} />  */}
              {/* {isAdmin && (
              <Switch>
                <Route path="/home" component={AdminHome} />
              </Switch> */}
            {/* )} */}
            {/* </Switch> */}
          )}
          </Switch>{" "}
      </div>
    );
  }
}
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => dispatch(me())
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(App));

/**
 * PROP TYPES
 */
App.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};
