import React, { Component } from "react";

export default class Beauty extends Component {
  render() {
    return (
        <div className="mainBody">
        <ul className="nobull">
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.lushusa.com/");
            }}
          >
            Lush
          </a>
          <br />
          <img
            className="lush"
            src="https://i.guim.co.uk/img/media/4794451cf6d1065daf74af3d0d50b77bbbd83f3e/362_163_3454_2073/master/3454.jpg?width=620&quality=85&auto=format&fit=max&s=0cec0d93c9c7deb5e9ee7b7325cd940c"
            width="200"
            height="100"
          />
        </li>
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.youthtothepeople.com/")
            }}
          >
            Youth To The People
          </a>
          <br />
          <img
          className="youth"
          src="https://cdn.shopify.com/s/files/1/0466/9701/files/yttp-logo_321x_2x_321x_2x_321x_2x_7ccc446e-d83f-454d-a826-0710f3c46b44_321x@2x.png?v=1562194452"
          width="300"
          height="50"
          />
        </li>
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://rahua.com/")
            }}
            >
            Rahua
          </a>
          <br />
          <img
          className="rahua"
          src="https://cdn.shopify.com/s/files/1/0067/5266/5673/files/RAHUA-LOGO-RainforestGrownBeauty-Horizontal-BROWN-FINAL_170x.png?v=1542047302"
          width="200"
          height="100"
          />
        </li>
      </ul>
      </div>
  );
}
}
