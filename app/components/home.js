//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";
import AltCart from "./altCart";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: ""
    };
    this.getCompany = this.getCompany.bind(this);
  }

  componentDidMount() {
    this.getCompany(this.props.domain);
  }

  getCompany(name) {
    Axios.get(`http://localhost:8080/api/companies?name=${name}`)
      .then(company => {
        this.setState({
          company: company.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    const company = this.state.company;
    console.log('this is state' ,this.state)
    return company[0] ? (
      <div>
      <div className='header'>{company[0].name}<br></br>{company[0].rating}</div>
      <AltCart />
      </div>
    ) : (
      <div>
        <p>
          Hello! Welcome to AltCart. We are here to help keep you informed as a consumer. Thank you for taking us shopping with you.
          Happy Shopping!
        </p>
      </div>
    );
  }
}
