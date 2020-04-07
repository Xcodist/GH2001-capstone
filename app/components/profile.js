import React, { Component } from "react";
import { connect } from "react-redux";
import { me, logout } from "../store/users";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getWishlistThunk, removeFromWishlistThunk } from "../store/wishlist";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getWishlistThunk(this.props.user.id);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (event.target.name === "logout") {
      this.props.logout();
      this.props.history.push("/");
    }
  }

  render() {
    const { user, wishlist } = this.props;

    return (
      <div className="Profile">
        <h1 className="welcomeP">Welcome {user.firstName}!</h1>
        {wishlist.length ? (
          <div>
            <p className="welcomeP">Check your wishlist!</p>
            {wishlist.map((alternative) => {
              return (
                <div key={alternative.title}>
                  <div className="altProd">
                    <div className="leftCol">
                      <img className="thumbnail" src={alternative.thumbnail} />
                    </div>
                    <div className="rightCol">
                      <a
                        className="prodTitle"
                        onClick={() => {
                          window.open(alternative.link);
                        }}
                      >
                        {alternative.title}
                      </a>
                      <div className="prodInfo">
                        {alternative.source}
                        <br />
                        {alternative.price}
                        <br />
                        {alternative.snippet}
                        <br />
                      </div>
                      <button
                        onClick={() => {
                          this.props.removeFromWishlistThunk(
                            user.id,
                            alternative.id
                          );
                          // this.props.getWishlistThunk(user.id)
                          // this.componentDidMount()
                        }}
                      >
                        Remove from wishlist!
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="welcomeP">Your wishlist is empty...</div>
        )}
        <button onClick={this.handleSubmit} name="logout" className="logout">
          Logout
        </button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    wishlist: state.wishlist,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(me()),
    getWishlistThunk: (userId) => dispatch(getWishlistThunk(userId)),
    logout: () => dispatch(logout()),
    removeFromWishlistThunk: (userId, wishlistId) =>
      dispatch(removeFromWishlistThunk(userId, wishlistId)),
  };
};

export default connect(mapState, mapDispatch)(Profile);
