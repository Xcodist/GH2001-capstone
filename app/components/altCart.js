import React, { Component } from "react";
import { fetchAlternatives } from "../store/alt";
import { addToWishlistThunk } from "../store/wishlist";
import { connect } from "react-redux";
import {
  Button,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import cart from "../../chrome/icons/empty_cart_1x.jpg";
import CartItems from "./altCart-item.js";

class AltCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFetched: false,
      itemsInCart: true,
    };
    this.altCartOptions = this.altCartOptions.bind(this);
  }

  async componentDidMount() {
    let items = [];
    let prices = [];
    for (let i = 0; i < this.props.state.cart.length; i++) {
      let key = Object.keys(this.props.state.cart[i]);
      let value = Object.values(this.props.state.cart[i]);
      items.push(key[0]);
      prices.push(value[0]);
    }
    let cart = items.map((item) => {
      let parsed = "";
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== ",") {
          parsed += item[i];
        }
      }
      return parsed;
    });
    if (cart.length > 0) {
      this.props.fetchAlternatives(cart, prices);
    } else {
      this.setState({
        ...this.state,
        itemsInCart: false,
      });
    }
  }

  handleSubmit(event, alternative, user) {
    event.preventDefault();
    this.props.addToWishlistThunk(alternative, user);
  }

  altCartOptions() {
    const alternatives = this.props.state.alt;
    const user = this.props.state.user;

    const useStyles = makeStyles(() => ({
      title: {
        color: "blue",
      },
    }));

    if (alternatives.length) {
      return (
        <React.Fragment>
          <div className>
            <br />
            <div className="cartTitle" variant="h5" align="left" padding="30px">
              Your Cart
            </div>
            <div className="cartItems" maxWidth="sm" align="center" paddingBottom="30px">
              <br />
              <Grid container spacing={1} justify="center" alignItems="center">
                {alternatives.map((alternative) => {
                  return (
                    <Grid item key={alternative.title} xs={12}>
                      <CartItems
                        handleSubmit={this.handleSubmit}
                        alternative={alternative}
                        user={user}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (!this.state.itemsInCart) {
      return (
        <React.Fragment>
          <Container maxWidth="sm" align="center">
            <div className="cartTitle" variant="h5">
              <br />
              You have no items in your cart!
            </div>
            <img className="emptyCartImg" src={cart} />
            <br />
            <br />
            Add items and go to the cart on your browser to see alternative
            products.
          </Container>
        </React.Fragment>
      );
    } else {
      return (
        <div className="loaderDiv">
          <br />
          <br />
          <div className="loading">Loading alternatives!</div>
          <br /> <br />
          <div className="loaderHolder">
            <div className="loader"></div>
          </div>
        </div>
      );
    }
  }
  render() {
    return this.altCartOptions();
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlternatives: (cart, prices) =>
    dispatch(fetchAlternatives(cart, prices)),
  addToWishlistThunk: (alternative, user) =>
    dispatch(addToWishlistThunk(alternative, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AltCart);
