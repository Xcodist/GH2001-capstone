import React from "react";
import cart from "../../static/online-shopping.jpg";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div className="altCartContainer">

      <div className="welcomeContainer">
        <img className="cartImg" src={cart} />
      </div>

      <div className="aboutAltCartContainer">
        <h2 className="welcomeTitle">
          Welcome to AltCart!
        </h2>

        <p className="welcomeInfo">
          Thank you for taking us shopping with you {props.state.user.firstName}!
          We are here to help keep you informed as a consumer and make it easier
          to steer clear of the online shopping giants putting smaller retailers
          out of business.
          Anytime you shop on Amazon or Walmart, our app will
          run a search to find the same products you chose from alternative
          retailers - sometimes at lower prices than you originally found!

          <br/><br/><span className="howToUseAltCart">HOW TO USE YOUR ALTCART:</span><br/>

          From your Amazon or Walmart cart, open the extension to view your
          altCart. Buy the product directly, or save it to your altCart wishlist.
          You can also use our extension on any website to access:
        </p>

        <ul className="aboutAltCartList">
          <li className="altCartAboutListItem">
            Corporate social responsibility ratings for over 9000 businesses
            worldwide
          </li>

          <li className="altCartAboutListItem">
            Up-to-date news articles on the companies you're viewing
          </li>

          <li className="altCartAboutListItem">
            Ethical brands recommended by our team at altCart
          </li>
        </ul>

        <h4 className="happyShopping"> HAPPY SHOPPING!</h4>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(Home);
