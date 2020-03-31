//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: ""
    };
    this.getCompany = this.getCompany.bind(this);
    // this.rating = this.rating.bind(this);
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
  // rating(company){
  //   const company = this.state.company
  //   if(company[0].rating < 65) return 'bad';
  //   else return "good"
  // }

  render() {
    const company = this.state.company;
    return company[0] ? (
      <div>{company[0].rating && this.rating}</div>
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
