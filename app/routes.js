import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { me } from "./store/users";
import { Login, Signup } from "./components/auth-form";
import UserHome from "./components/user-home";

class Routes extends Component {
  componentDidMount() {
    debugger
    this.props.loadInitialData();
  }

  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={Carousel} />
            {isAdmin && (
              <Switch>
                <Route path="/home" component={UserHome} />
                <Route exact path="/admin" component={adminHome} />
              </Switch>
            )}
          </Switch>
        )}
        <Route component={Login} />
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
    isAdmin: !!state.user.isAdmin
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: me
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
