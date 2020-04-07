import React from "react";
import cart from "../../static/online-shopping.jpg";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div className="message">
      <img className="cartimg" src={cart} />
      <h2 className="welcome">
        <span>Welcome to AltCart!</span>
      </h2>
      <p className="welcomeinfo">
        Thank you for taking us shopping with you {props.state.user.firstName}!
        We are here to help keep you informed as a consumer and make it easier
        to steer clear of the online shopping giants putting smaller retailers
        out of business.
        {/* Anytime you shop on Amazon or Walmart, our app will
        run a search to find the same products you chose from alternative
        retailers - sometimes at lower prices than you originally found!<br></br>
        <span>How to use your altCart:</span><br></br>
        From your Amazon or Walmart cart, open the extension to view your
        altCart. Buy the product directly, or save it to your altCart wishlist.
        You can also use our extension on any website to access:
        <ul>
          <li>
            Corporate social responsibility ratings for over 9000 businesses
            worldwide
          </li>
          <li>Up-to-date news articles on the companies you're viewing</li>
          <li>Ethical brands recommended by our team at altCart</li>
        </ul> */}
        <span> Happy Shopping!</span>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(Home);
