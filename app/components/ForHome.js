import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ForHome extends Component {
  render() {
    return (
        <div className="mainStore">
        <ul className="nobull">
        <div className="store-container">
        <li className="storeLink">
          <br />
          <img
            className="aptDeco"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/c31.31.387.387a/s100x100/999124_231196013695603_833984939_n.png?_nc_cat=105&_nc_sid=dbb9e7&_nc_oc=AQnkUV6pqXNje595cZTsh-dhwR209Ce-fErHTnfV3QNVEsJH3TK6SKQcURcPSakT5jig9TyXFNrsalmascHNSonh&_nc_ht=scontent-lga3-1.xx&oh=e1c794636fb089bdda6a90b1bc40822c&oe=5EAD30D7"
            width="84"
            height="84"
          />
           <a
            className="stores"
            onClick={() => {
              window.open("https://www.aptdeco.com/");
            }}
          >
            AptDeco
          </a>
        </li>
        </div>
        <div className="store-container">
        <li className="storeLink">
          <br />
          <img
            className="honest"
            src="https://i.imgur.com/W7vnBVs.jpg"
            width="84"
            height="84"
          />
           <a
            className="stores"
            onClick={() => {
              window.open("https://www.honest.com/");
            }}
          >
            Honest
          </a>
        </li>
        </div>
        <div className="store-container">
        <li className="storeLink">
          <br />
          <img
            className="goodee"
            src="https://cdn.shopify.com/s/files/1/0071/1684/9252/products/GOODEE_GoodeeTote_Yellow_2_1500x.jpg?v=1574794842"
            width="84"
            height="84"
            />
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.goodeeworld.com/")
            }}
          >
            Goodee
          </a>
        </li>
        </div>
      </ul>
      <Link className='back' to="/search">Back</Link>
      </div>
  );
}
}
