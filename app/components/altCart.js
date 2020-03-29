import React, { Component } from "react";
import Axios from "axios";

const products = [
  "Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black",
  "nintendo switch"
];
//to be imported from the content script cart array

export default class AltCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alternatives: []
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:8080/api/alt?cart=${products}`).then(res => {
      this.setState({
        alternatives: res.data
      });
    });
  }

  render() {
    console.log(this.state);
    const alternatives = this.state.alternatives;
    return alternatives.length > 0 ? (
      <div>
        {alternatives.map(alternative => {
          return (
            <div key={alternative.title}>
              <div className="altProd">
                <div className="leftCol">
                  <img className="thumbnail" src={alternative.thumbnail} />
                </div>
                <div className="rightCol">
                  <a className="prodTitle" href={alternative.link}>
                    {alternative.title}
                  </a>
                  <div className="prodInfo">
                    {alternative.source}<br/>
                    {alternative.price}<br/>
                    {alternative.snippet}<br/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div>Loading alternatives</div>
    );

    // return company[0] ? (
    //   <div>{company[0].rating}</div>
    // ) : (
    //   <div>
    //     <p>
    //       Hello! We are _____ . Thank you for taking us shopping with you. We
    //       are here to help guide you toward making valuable consumer choices
    //       that benefit the community and world around you. That way you can shop
    //       with a piece of mind knowing where your hard earned money is going and
    //       with satisfaction that you are an informed consumer. A couple of
    //       pointers along the way. As you shop we will be right there with you,
    //       giving you a thumbs up or down based on the companies responsibility
    //       rating. We are also here to give you direction to learn more about the
    //       companies you are purchasing from and a little reward if those
    //       companies are good players. Just click on the icon to find out more.
    //       Check your account to see if you have earned rewards and of course...
    //       Happy Shopping!
    //     </p>
    //   </div>
    // );
  }
}
