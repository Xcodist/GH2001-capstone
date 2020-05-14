import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clothing extends Component {
  render() {
    return (
      <div>
        <Link className="back" to="/search">
          Back
        </Link>
        <ul className="nobull">
          <div className="mainStore">
            <div className="store-container">
              <li className="storeLink">
                <br />
                <img
                  className="columbia"
                  src="https://i.pinimg.com/originals/0a/b8/da/0ab8dae2ba3543f6043ac661db9f6101.png"
                  height="84"
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
                  src="https://i.ebayimg.com/images/g/aTwAAOSwfu9dfX4u/s-l300.jpg"
                  height="84"
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
                  height="84"
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
                <div className="store-item"></div>
                <br />
                <img
                  src="https://d2bo3wgtyrxq4p.cloudfront.net/client_info/FREAKSSTORE/itemimage/christydawnjpg.jpg"
                  height="84"
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
                <div className="store-item"></div>
                <br />
                <img
                  src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2018/04/Gap1-350x200.jpg"
                  height="84"
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
          </div>
        </ul>
      </div>
    );
  }
}
