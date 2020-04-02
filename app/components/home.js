//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";
import AltCart from "./altCart";

const Message = () => {
  return (
    <div className="message">
      <h1 className="welcome">Welcome to AltCart</h1>
      <p>
        We are here to help keep you informed as a consumer. Thank you for
        taking us shopping with you. Happy Shopping!
      </p>
    </div>
  );
};

const HasRating = props => {
  const company = props.company;
  return (
    <div className="header">
      {company.name}
      <br></br>
      {company.rating}
      <br></br>
      <p>this is CRS Hub's rating of {company.name}. To find out more click the link below</p>
    </div>
  );
};

const InCart = () => {
  console.log("in cart");
  return <AltCart />;
};

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
    const isInCart = this.props.isInCart;
    const company = this.state.company;
    const homeOptions = company => {
      console.log('this is company', company)
        if (isInCart) {
          console.log("site is cart");
          return <InCart />;
        }
      else if (company.rating) {
        return (
          <div>
            <HasRating company={company} />
          </div>
        );
      } else {
        return <Message />;
      }
    }
      // console.log("after search", url);
      //  if (window.location.href.includes("cart")) {
      //   console.log('site is cart')
      //   return <InCart />
      // } else if (company.rating) {
      //   return (
      //     <div>
      //       <HasRating company={company} />
      //     </div>
      //   );
      // } else {
      //   return <Message />
      // }
    // };
    return company[0] ? <div>{homeOptions(company[0])}</div> : <Message />;
  }
}
