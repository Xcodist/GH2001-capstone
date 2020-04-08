import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beauty extends Component {
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
                  className="lush"
                  className="logoContainer"
                  src="https://pbs.twimg.com/profile_images/1120784179182989312/uucySY3-_400x400.png"
                  width="84"
                  height="84"
                />
                <a
                  className="stores"
                  onClick={() => {
                    window.open("https://www.lushusa.com/");
                  }}
                >
                  Lush
                </a>
              </li>
            </div>
            <div className="store-container">
              <li className="storeLink">
                <br />
                <img
                  className="youth"
                  className="logoContainer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_Rk2RWkBTFQ1lqSoOVjR4wEWSPqxQDs2pIXeUNWvi3-IZdw1p&usqp=CAU"
                  width="84"
                  height="84"
                />
                <a
                  className="stores"
                  onClick={() => {
                    window.open("https://www.youthtothepeople.com/");
                  }}
                >
                  Youth To The People
                </a>
              </li>
            </div>
            <div className="store-container">
              <li className="storeLink">
                <br />
                <img
                  className="rahua"
                  className="logoContainer"
                  src="https://cdn.shopify.com/s/files/1/0067/5266/5673/files/RAHUA-LOGO-RainforestGrownBeauty-Horizontal-BROWN-FINAL_170x.png?v=1542047302"
                  width="84"
                  height="84"
                />
                <a
                  className="stores"
                  onClick={() => {
                    window.open("https://rahua.com/");
                  }}
                >
                  Rahua
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
