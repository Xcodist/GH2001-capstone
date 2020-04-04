import React, { Component } from "react";

export default class Electronics extends Component {
  render() {
    return (
        <ul className="nobull">
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.acer.com/ac/en/US/content/home");
            }}
          >
            Acer
          </a>
          <br />
          <img
            className="acer"
            src="https://vsa9.com/wp-content/uploads/2019/03/544207-meet-the-acer-swift-5.jpg"
            width="200"
            height="100"
          />
        </li>
      </ul>
  );
}
}