import React, { Component } from "react";
import axios from "axios";
export default class Stores extends Component {
  render() {
    return (
      <div className="mainBody">
        <h1 className="shops-title">Ethically Approved Shopping</h1>
        <ul className="nobull">
          <li>
            <a
              className="stores"
              onClick={() => {
                window.open("https://www.columbia.com/");
              }}
            >
              Columbia
            </a>
            <img
              className="columbia"
              src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/03-02_24694_COL_US_Mens_Dry_NewArrivals_SuperCat_HikingSubhero_V4_M?fmt=pjpeg&scl=1"
              width="200"
              height="100"
            />
          </li>
          <li>
            <a
              className="stores"
              onClick={() => {
                window.open("http://www.patagonia.com/home/");
              }}
            >
              Patagonia
            </a>
            <img
              src="https://onda.org/wp-content/uploads/2017/11/Patagonia-logo.png"
              width="200"
              height="100"
            />
          </li>
          <li>
            <a
              className="stores"
              onClick={() => {
                window.open("http://www.thereformation.com/");
              }}
            >
              Reformation
            </a>
            <img
              src="https://d1bntizjlw65va.cloudfront.net/87784eefec72d66cbad069899ffde3492576b5f3.jpg"
              width="200"
              height="100"
            />
          </li>
          <li>
            <a
              className="stores"
              onClick={() => {
                window.open("https://christydawn.com/");
              }}
            >
              Christy Dawn
            </a>
            <img
              src="https://d2bo3wgtyrxq4p.cloudfront.net/client_info/FREAKSSTORE/itemimage/christydawnjpg.jpg"
              width="200"
              height="100"
            />
          </li>
        </ul>
      </div>
    );
  }
}
