
//backend to look up company and rating
//get domain props from App.js
//boolean to decide if page has cart == may need state
//if statement to decide what face


import React, {Component} from 'react';
import Axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
    }
    this.getCompany = this.getCompany.bind(this)
  }

  componentDidMount() {
   this.getCompany(this.props.domain)
    }

getCompany(name) {
      Axios.get(`http://localhost:8080/api/companies?name=${name}`)
      .then(company => {
        this.setState({
          company: company.data
        });
      })
       .catch(err => {
        console.log(err)
       })
     }



  render() {
    console.log(this.state)
    const company = this.state.company
    return company[0] ? (
      <div>
      {company[0].rating }
      </div> ) :
      (
      <div>
      <p>
      Hello! We are _____ . Thank you for taking us shopping with you. We are here to help guide you toward making valuable consumer choices that benefit the community and world around you. That way you can shop with a piece of mind knowing where your hard earned money is going and with satisfaction that you are an informed consumer.
      A couple of pointers along the way. As you shop we will be right there with you, giving you a thumbs up or down based on the companies responsibility rating. We are also here to give you direction to learn more about the companies you are purchasing from and a little reward if those companies are good players. Just click on the icon to find out more. Check your account to see if you have earned rewards and of course...
      Happy Shopping!
    </p>
      </div>
      )
    }
  }





