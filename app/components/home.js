//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";
import AltCart from "./altCart";
import Message from './welcome-message'
import CompanyRating from './companyRating'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: ""
    };
    this.getCompany = this.getCompany.bind(this);
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.props.domain.length !== prevState.domain.length) {
      this.getCompany(this.props.domain);
    }
  }
  getCompany(name) {
    // if (localStorage)
    Axios.get(`http://localhost:8080/api/companies?name=${name}`)
      .then(company => {
        this.setState({
          company: company.data
        });
        localStorage.setItem({'company': company.data}, function() {
          console.log('company is set to ' + company.data)
          console.log(chrome.storage)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const isInCart = this.props.isInCart;
    const company = this.state.company;
    const homeOptions = company => {
      if (isInCart) {
        return <AltCart />;
      } else if (company.rating) {
        return <CompanyRating company={company} />
      } else {
        return <Message />;
      }
    };
    return company[0] ? <div className='mainBody'>{homeOptions(company[0])}</div> : <Message />;
  }
}
