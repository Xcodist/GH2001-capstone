//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face

import React, { Component } from "react";
import Axios from "axios";
import AltCart from "./altCart";

function Message() {
  return (
    <div>
      <h1>Welcome to AltCart</h1>
      <p>
        We are here to help keep you informed as a consumer. Thank you for
        taking us shopping with you. Happy Shopping!
      </p>
    </div>
  );
}

function HasRating(company) {

  return (
    <div className="header">
      {company[0].name}
      <br></br>
      {company[0].rating}
    </div>
  )
}

function InCart() {
  return <Altcart />
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: ""
    };
    this.getCompany = this.getCompany.bind(this);
  }

  componentDidMount() {
    console.log('this.props in comp did mount', this.props)
    this.getCompany(this.props.domain);
  }

  getCompany(name) {
    Axios.get(`http://localhost:8080/api/companies?name=${name}`)
      .then(company => {
        console.log('this is the  company in the getcompany', company)
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
    console.log('this is company in the render', company);
    const homeOptions = () => {
      if(window.location.href.includes('cart' || 'checkout'|| 'basket')) {
        return <InCart />
      }
      else if(company[0].rating) {
        return <HasRating company={company}/>
      }
      (<Message />)
    }
    return company[0] ? (
      <div>
      {homeOptions()}
      </div>
    ) : (
      <div>
        <h3>loading...</h3>
      </div>
    )


  }
}

    // return company[0] ? (
    //   <div>
    //     <div className="header">
    //       {company[0].name}
    //       <br></br>
    //       {company[0].rating}
    //     </div>
    //     <AltCart />
    //   </div>
    // ) : (
    //   <div>
    //     <h1>Welcome to AltCart</h1>
    //     <p>
    //       We are here to help keep you informed as a consumer. Thank you for
    //       taking us shopping with you. Happy Shopping!
    //     </p>
    //   </div>
    // );
