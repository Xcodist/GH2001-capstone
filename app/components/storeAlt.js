import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Stores extends Component {
  render() {
    return (
      <div className="mainBody">
        <h1 className="shops-title">Ethically Approved Shopping</h1>
        <div className="categoryList">
          <Link to="/clothing" style={{ textDecoration: 'none' }}>
            <h3 className="category">Clothing and Shoes</h3>
          </Link>
          <Link to="/beauty" style={{ textDecoration: 'none' }}>
            <h3 className="category">Beauty and Personal Care</h3>
          </Link>
          <Link to="/electronics" style={{ textDecoration: 'none' }}>
            <h3 className="category">Electronics</h3>
          </Link>
          <Link to="/forHome" style={{ textDecoration: 'none' }}>
            <h3 className="category">Home</h3>
          </Link>
        </div>
      </div>
    );
  }
}
