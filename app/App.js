import React, { Component } from "react";
import BottomAppBar from "./components/navbar";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Login, Signup } from "./components/auth-form";
import Home from "./components/home";
import Articles from "./components/article";
import Stores from "./components/storeAlt";
import { me } from "./store/users";
import { Header } from "./components/header";
import AltCart from "./components/altCart";
import { retrieveCart } from "./store/cart";
import { Redirect } from 'react-router-dom';
import Profile from './components/profile'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
      isInCart: false
    };
  }

  componentDidMount() {
    this.props.loadInitialData();
    this.props.retrieveCart();
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      if(url.href.includes("cart") ||url.href.includes("checkout") || url.href.includes("basket") || url.href.includes("buy")) {
        this.setState({...this.state, isInCart: true})
      }
      else {
        this.setState({...this.state, isInCart: false})
      }
      if (domain.slice(0, 3) === "www") {
        let companyName = domain.slice(4);
        if (companyName.includes(".")) {
          const idx = companyName.indexOf(".");
          companyName = companyName.slice(0, idx);
        }
        this.setState({...this.state,
          domain: companyName

        });
      } else {
        if (domain.includes(".")) {
          const idx = domain.indexOf(".");
          let companyName = domain.slice(0, idx);
          this.setState({
            domain: companyName
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
          <Route path="/news" render={props => <Articles {...this.state} />} />
          <Route path="/search" render={props => <Stores {...this.props} />} />
          <Route path="/login" render={props => <Login {...this.props} />} />
          <Route path="/signup" render={props => <Signup {...this.props} />} />
          <Route
                path="/profile"
                render={props => <Profile {...this.state}/>} />
          <Route path="/" render={props => <Home {...this.state} />} />
          <Route
            path="/altCart"
            render={props => <AltCart {...this.state} />}
          />
          {isLoggedIn && (
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home {...this.state} />}
              />
              <Route
                path="/profile"
                render={props => <Profile {...this.state}/>} />
              {/* {isAdmin && (
              <Switch>
                <Route path="/home" component={AdminHome} />
              </Switch> */}
              {/* )} */}
            </Switch>
          )}
        </Switch>
      </div>
    );
  }
}
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin,
    state: state
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => dispatch(me()),
    retrieveCart: () => dispatch(retrieveCart())
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

