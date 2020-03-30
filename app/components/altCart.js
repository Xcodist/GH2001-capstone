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
      <div>Loading alternatives!</div>
    );
  }
}
