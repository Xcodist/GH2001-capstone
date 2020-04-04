import React, { Component } from "react";

export default class Electronics extends Component {
  render() {
    return (
      <div className="mainBody">
        <ul className="nobull">
          <li>
            <a
              className="stores"
              onClick={() => {
                window.open("https://www.columbia.com/");
              }}
            >
              Columbia
            </a>
            <img
              className="columbia"
              src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/03-02_24694_COL_US_Mens_Dry_NewArrivals_SuperCat_HikingSubhero_V4_M?fmt=pjpeg&scl=1"
              width="200"
              height="100"
            />
          </li>
        </ul>
      </div>
    );
  }
}
