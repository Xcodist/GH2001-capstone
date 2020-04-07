import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Electronics extends Component {
  render() {
    return (
        <div className="mainStore">
        <ul className="nobull">
        <div className="store-container">
        <li className="storeLink">
          <br />
          <img
            className="acer"
            src="https://vsa9.com/wp-content/uploads/2019/03/544207-meet-the-acer-swift-5.jpg"
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
            src="https://www.lenovo.com/medias/C930688B-D132-455C-AD12-007504A60117.jpg?context=bWFzdGVyfHJvb3R8MTE1Njh8aW1hZ2UvanBlZ3xoNzAvaGI4LzEwNTkxNjQ2NzExODM4LmpwZ3xiODAxMzYxYTNiNzU1YWRhYjFkZWUwMTc2NjUyNDllNzZkNmQwYmUwZWQ0MTRhZjFjNjdkMThlOGQ0MjRjMmNk"
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
            src="https://irp-cdn.multiscreensite.com/bf81ee8e/dms3rep/multi/mobile/LG-Appliance-Repair-650x414.jpg"
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
      </ul>
      <Link className='back' to="/search">Back</Link>
      </div>
  );
}
}
