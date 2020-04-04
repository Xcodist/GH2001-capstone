import React, { Component } from "react";

export default class Electronics extends Component {
  render() {
    return (
        <div className="mainBody">
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
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.lenovo.com/us/en?Redirect=False");
            }}
          >
            Lenovo
          </a>
          <br />
          <img
            className="lenovo"
            src="https://www.lenovo.com/medias/C930688B-D132-455C-AD12-007504A60117.jpg?context=bWFzdGVyfHJvb3R8MTE1Njh8aW1hZ2UvanBlZ3xoNzAvaGI4LzEwNTkxNjQ2NzExODM4LmpwZ3xiODAxMzYxYTNiNzU1YWRhYjFkZWUwMTc2NjUyNDllNzZkNmQwYmUwZWQ0MTRhZjFjNjdkMThlOGQ0MjRjMmNk"
            width="200"
            height="100"
          />
        </li>
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.lg.com/us");
            }}
          >
            LG
          </a>
          <br />
          <img
            className="microsoft"
            src="https://irp-cdn.multiscreensite.com/bf81ee8e/dms3rep/multi/mobile/LG-Appliance-Repair-650x414.jpg"
            width="200"
            height="100"
          />
        </li>
      </ul>
      </div>
  );
}
}