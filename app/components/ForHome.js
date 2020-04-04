import React, { Component } from "react";

export default class ForHome extends Component {
  render() {
    return (
        <div className="mainBody">
        <ul className="nobull">
        <li className="storeLink">
          <a
            className="stores"
            onClick={() => {
              window.open("https://www.aptdeco.com/");
            }}
          >
            AptDeco
          </a>
          <br />
          <img
            className="aptDeco"
            src="https://lh3.googleusercontent.com/proxy/KgEMg13aZo9XFo_Nh5H0hgz36B7fVMvfwjg6RHoYxplYqC_hlljomteQTr5sNuGUL4MxletTzaSKdLMdyAB2MKY_35KAvoyPcf-RAEj5NXzQj4AjfbJwmIcHkvMWEw"
            width="200"
            height="100"
          />
        </li>
      </ul>
      </div>
  );
}
}