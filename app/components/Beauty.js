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
              window.open("https://www.honest.com/");
            }}
          >
            Honest
          </a>
          <br />
          <img
            className="honest"
            src="https://i.imgur.com/W7vnBVs.jpg"
            width="200"
            height="100"
          />
        </li>
      </ul>
      </div>
  );
}
}
