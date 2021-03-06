import React from "react";
import BottomAppBar from "./components/navbar";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {retrieveCompany} from './store/company'
import {retrieveSubsidiary} from './store/subsidiary'

//Components
import { Login, Signup } from "./components/auth-form";
import HasRating from './components/companyRating'
import Home from "./components/home";
import Articles from "./components/article";
import Stores from "./components/storeAlt";
import { Header } from "./components/header";
import AltCart from "./components/altCart";
import Profile from "./components/profile";
import Beauty from "./components/Beauty";
import Electronics from "./components/Electronics";
import Clothing from "./components/Clothing";
import ForHome from "./components/ForHome";

//Thunks
import { me } from "./store/users";
import { retrieveCart } from "./store/cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
      isInCart: false
    };
    this.homeOptions = this.homeOptions.bind(this)
  }

  homeOptions() {
    if (this.state.isInCart) {
      return <Route path="/" render={props => <AltCart {...this.state} />} />
    } else if (this.props.state.company.rating) {
      return <Route path="/" render={props => <HasRating {...this.state} />} />
    } else {
      return <Route path="/" render={props => <Home {...this.state} />} />
    }
  };

  componentDidMount() {
    this.props.loadInitialData();
    this.props.retrieveCart();

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      if (
        url.href.includes("cart") ||
        url.href.includes("checkout") ||
        url.href.includes("basket") ||
        url.href.includes("buy")
      ) {
        this.setState({ ...this.state, isInCart: true });
      } else {
        this.setState({ ...this.state, isInCart: false });
      }
      if (domain.slice(0, 3) === "www") {
        let companyName = domain.slice(4);
        if (companyName.includes(".")) {
          const idx = companyName.indexOf(".");
          companyName = companyName.slice(0, idx);
        }
        this.setState({ ...this.state, domain: companyName });
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

  componentDidUpdate(prevState, prevProps) {
    let {domain} = this.state
    let prevDomain = prevProps.domain
    let {retrieveCompany, retrieveSubsidiary, retrieveCart} = this.props;
    let {subsidiary, company} = this.props.state
    let prevSubsidiary = prevState.state.subsidiary
    let prevCompany = prevState.state.company;
    if (domain) {
      if (domain.length !== prevDomain.length) {
        retrieveSubsidiary(domain);
      }
    }
    if(subsidiary) {
      if(subsidiary.name !== prevSubsidiary.name) {
        retrieveCompany(subsidiary.companyId)
      }
    }
    else if(!company.name) {
      retrieveCompany(domain)
    }
    // if(this.props.state.subsidiary) {
    //   if(this.props.state.subsidiary.name !== prevState.state.subsidiary.name) {
    //     this.props.retrieveCompany(this.props.state.subsidiary.companyId)
    //   }
    // } if(!this.props.state.subsidiary.name) {
    //   if(this.props.state.company.name !== prevState.state.company.name) {
    //     this.props.retrieveCompany(this.state.domain)
    //   }
    // }
  }

  render() {
    const { isLoggedIn } = this.props;

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
            render={props => <Profile {...this.state} />}
          />
          <Route
            path="/altCart"
            render={props => <AltCart {...this.state} />}
          />
          <Route path='/rating' render={props => <HasRating {...this.state} />} />
          <Route path="/clothing" component={Clothing} />
          <Route path="/beauty" component={Beauty} />
          <Route path="/electronics" component={Electronics} />
          <Route path="/forHome" component={ForHome} />
          <Route path="/home" render={props => <Home {...this.state} />} />
          {this.homeOptions()}
          {isLoggedIn && (
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home {...this.state} />}
              />
              <Route
                path="/profile"
                render={props => <Profile {...this.state} />}
              />
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
    retrieveCart: () => dispatch(retrieveCart()),
    retrieveCompany: (domain) => dispatch(retrieveCompany(domain)),
    retrieveSubsidiary: (domain) => dispatch(retrieveSubsidiary(domain))
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
