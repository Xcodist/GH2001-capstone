import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clothing extends Component {
  render() {
    return (
      <div className="mainStore">
        <ul className="nobull">
        <div className="store-container">
          <li className="storeLink">
            <br />
            <img
              className="columbia"
              src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/03-02_24694_COL_US_Mens_Dry_NewArrivals_SuperCat_HikingSubhero_V4_M?fmt=pjpeg&scl=1"
              height ="84"
              width="84"
            />
             <a
              className="stores"
              onClick={() => {
                window.open("https://www.columbia.com/");
              }}
            >
              Columbia
            </a>
          </li>
          </div>
          <div className="store-container">
          <li className="storeLink">
            <br />
            <img
              src="https://onda.org/wp-content/uploads/2017/11/Patagonia-logo.png"
              height ="84"
              width="84"
            />
            <a
              className="stores"
              onClick={() => {
                window.open("http://www.patagonia.com/home/");
              }}
            >
              Patagonia
            </a>
          </li>
          </div>
          <div className="store-container">
          <li className="storeLink">
            <br />
            <img
              src="https://d1bntizjlw65va.cloudfront.net/87784eefec72d66cbad069899ffde3492576b5f3.jpg"
              height ="84"
              width="84"
            />
              <a
              className="stores"
              onClick={() => {
                window.open("http://www.thereformation.com/");
              }}
            >
              Reformation
            </a>
          </li>
          </div>
          <div className="store-container">
          <li className="storeLink">
          <div className="store-item">
            </div>
            <br />
            <img
              src="https://d2bo3wgtyrxq4p.cloudfront.net/client_info/FREAKSSTORE/itemimage/christydawnjpg.jpg"
              height ="84"
              width="84"
            />
              <a
              className="stores"
              onClick={() => {
                window.open("https://christydawn.com/");
              }}
            >
              Christy Dawn
            </a>
          </li>
          </div>
          <div className="store-container">
          <li className="storeLink">
          <div className="store-item">
            </div>
            <br />
            <img
              src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2018/04/Gap1-350x200.jpg"
              height ="84"
              width="84"
            />
              <a
              className="stores"
              onClick={() => {
                window.open("https://www.gap.com/");
              }}
            >
              GAP
            </a>
          </li>
          </div>
        </ul>
        <Link className='back' to="/search">Back</Link>
      </div>
    );
  }
}
