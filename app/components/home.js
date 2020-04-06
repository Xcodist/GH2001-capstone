//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";
import AltCart from "./altCart";
import Message from "./welcome-message";
import CompanyRating from "./companyRating";
import {retrieveCompany} from '../store/company'
import { connect } from "react-redux";


class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   company: ""
    // };
    // this.getCompany = this.getCompany.bind(this);
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.props.domain.length !== prevState.domain.length) {
      this.props.retrieveCompany(this.props.domain);
    }
  }

  // getCompany(name) {

    // chrome.storage.local.get(name, function(res) {
    //   console.log(res)
    //   if (res) {
    //     console.log(this)
    //     this.setState({
    //       company: res.name
    //     });
    //     console.log(this.state)
    //   } else {
        // Axios.get(`http://localhost:8080/api/companies?name=${name}`)
        //   .then(company => {
        //     this.setState({
        //       company: company.data
        //     });
            // chrome.storage.local.set({ name: company.data[0] }, function() {
            //   console.log(`Company name is set to ${name}.`);
            // });
          // })
          // .catch(err => {
          //   console.log(err);
          // });
    //   }
    // });
  // }

  render() {
    const isInCart = this.props.isInCart;
    const company = this.props.state.company;
    console.log(this.props);
    const homeOptions = company => {
      if (isInCart) {
        return <AltCart />;
      } else if (company.rating) {
        return <CompanyRating company={company} />;
      } else {
        return <Message />;
      }
    };
    return this.props.state.company ? (
      <div className="mainBody">{homeOptions(company)}</div>
    ) : (
      <Message />
    );
  }
}


const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  retrieveCompany: (domain) => dispatch(retrieveCompany(domain))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
