import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Electronics extends Component {
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
                  className="acer"
                  src="data:image/png;base64,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"
                  width="84"
                  height="84"
                />
                <a
                  className="stores"
                  onClick={() => {
                    window.open("https://www.acer.com/ac/en/US/content/home");
                  }}
                >
                  Acer
                </a>
              </li>
            </div>
            <div className="store-container">
              <li className="storeLink">
                <br />
                <img
                  className="lenovo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3yzDmTULBonvcBfC_W1fhmHZFydtVQkFQeuLqiIBcqdU78DAg&usqp=CAU"
                  width="84"
                  height="84"
                />
                <a
                  className="stores"
                  onClick={() => {
                    window.open("https://www.lenovo.com/us/en?Redirect=False");
                  }}
                >
                  Lenovo
                </a>
              </li>
            </div>
            <div className="store-container">
              <li className="storeLink">
                <br />
                <img
                  className="microsoft"
                  src="data:image/png;base64,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"
                  width="84"
                  height="84"
                />
                <a
                  className="stores"
                  onClick={() => {
                    window.open("https://www.lg.com/us");
                  }}
                >
                  LG
                </a>
              </li>
            </div>
            </div>
          </ul>
      </div>
    );
  }
}
