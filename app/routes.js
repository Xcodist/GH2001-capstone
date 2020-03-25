import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { me } from "./store/users";
import { Login, Signup } from "./components/auth-form";
import Home from "./components/user-home";
import Articles from "./components/article";


class Routes extends Component {
  componentDidMount() {
    debugger
    this.props.loadInitialData();
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props
    console.log(this.props);
    return (
      <Switch>
         <Route path="/home" component={Home} />
        <Route path="/search" component={Articles} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* <Route exact path="/home" component={Home} /> */}
            {/* {isAdmin && (
              <Switch>
                <Route path="/home" component={AdminHome} />
              </Switch>
            )} */}
          </Switch>
        )}
      </Switch>
    );
  }
}

// /**
//  * CONTAINER
//  */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    // isAdmin: !!state.user.isAdmin
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => dispatch(me())
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};
