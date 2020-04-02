//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";
import AltCart from "./altCart";
import frown from "../../chrome/icons/frown-128.jpg";
import smile from "../../chrome/icons/smiley-128.jpg";
import meh from "../../chrome/icons/middling-128.jpg";
import cart from "../../static/online-shopping.jpg";

const Message = () => {
  return (
    <div className="message">
      <img className="cartimg" src={cart} />
      <h2 className="welcome">
        <span>Welcome to AltCart!</span>
      </h2>
      <p>
        Thank you for taking us shopping with you. We are here to help keep you
        informed as a consumer and offer alternatives to shopping at retail
        giants like Amazon and Walmart. Happy Shopping!
      </p>
    </div>
  );
};

const HasRating = props => {
  const company = props.company;

  if (company.name[company.name.length - 1] === ".")
    company.name =
      company.name[0].toUpperCase() +
      company.name.slice(1, company.name.length - 1);

  // for (let i = 1; i < company.name.length; i++) {
  //   if (company.name[i-1] === ' ') company.name[i] = company.name[i].toUpperCase()
  // }

  return (
    <div>
      <div className="header">
        {company.name}
        {company.rating}
        <br></br>
      </div>

      <p className="ratingexpl">
        This is CRS Hub's rating of {company.name}. CSR Hub offers transparent
        ratings and rankings of 19,184 companies from 143 countries, driven by
        662 industry-leading CSR/ESG data sources, including ESG analyst, crowd,
        government, publication, and and not-for-profit data. For more
        information on them, visit{" "}
        <a href="https://www.csrhub.com/">CSRHUB.com</a>
      </p>
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
      if (isInCart) {
        return <InCart />;
      } else if (company.rating) {
        return (
          <div>
            <HasRating company={company} />
          </div>
        );
      } else {
        return <Message />;
      }
    };
    return company[0] ? <div>{homeOptions(company[0])}</div> : <Message />;
  }
}
