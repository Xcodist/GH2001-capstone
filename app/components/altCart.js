import React, { Component } from "react";
import {fetchAlternatives} from '../store/alt'
import {addToWishlistThunk} from '../store/wishlist'
import { connect } from "react-redux";

const hasAlt = (alt, user) => {
  return (
    <div className='mainBody'>
    <div className='header'>Your altCart:</div>
    {alternatives.map(alternative => {
      return (
        <div key={alternative.title}>
          <div className="altProd">
            <div className="leftCol">
              <img className="thumbnail" src={alternative.thumbnail} />
            </div>
            <div className="rightCol">
              <a className="prodTitle"
              onClick={() => {
                window.open(alternative.link)
              }}>
                {alternative.title}
              </a>
              <div className="prodInfo">
                {alternative.source}<br/>
                {alternative.price}<br/>
                {alternative.snippet}<br/>
              </div>
              <button onClick={() => {
                this.handleSubmit(event, alternative, user)
              }}>Add to wishlist!</button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}

const noCart = () => {
  return (
    <div className='noCart'>
      <h1>You have no items in your cart!</h1>
      <p>Add some items to your cart to see alternatives.</p>
    </div>
  )
}


class AltCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFetched: false,
      itemsInCart: true
    }

  }

  async componentDidMount() {
    let items = []
    let prices = []
    for (let i = 0; i < this.props.state.cart.length; i++) {
      let key = Object.keys(this.props.state.cart[i])
      let value = Object.values(this.props.state.cart[i])
      items.push(key[0])
      prices.push(value[0])
    }
    let cart = items.map((item) => {
      let parsed = ''
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== ',') {
          parsed += item[i]
        }
      }
      return parsed
    })
    if (cart.length > 0) {
      this.props.fetchAlternatives(cart, prices);
    } else {
      this.setState({
        ...this.state,
        itemsInCart: false
      })
    }
  }

  handleSubmit(event, alternative, user) {
    event.preventDefault()
    this.props.addToWishlistThunk(alternative, user)
  }

  altCartOptions() {
    const alternatives = this.props.state.alt
    const user = this.props.state.user;
    if (alternatives.length > 0) {
      return hasAlt(alternatives, user)
    } else if (!cart.length) {
      return
    }
  }

  render() {
    const alternatives = this.props.state.alt;
    const user = this.props.state.user;
    return alternatives.length > 0 ? (
      <div className='mainBody'>
        <div className='header'>Your altCart:</div>
        {alternatives.map(alternative => {
          return (
            <div key={alternative.title}>
              <div className="altProd">
                <div className="leftCol">
                  <img className="thumbnail" src={alternative.thumbnail} />
                </div>
                <div className="rightCol">
                  <a className="prodTitle"
                  onClick={() => {
                    window.open(alternative.link)
                  }}>
                    {alternative.title}
                  </a>
                  <div className="prodInfo">
                    {alternative.source}<br/>
                    {alternative.price}<br/>
                    {alternative.snippet}<br/>
                  </div>
                  <button onClick={() => {
                    this.handleSubmit(event, alternative, user)
                  }}>Add to wishlist!</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="loaderDiv">
        <div className='loading'>Loading alternatives!</div>
        <div className="loaderHolder">
        <div className="loader"></div>
        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlternatives: (cart, prices) => dispatch(fetchAlternatives(cart, prices)),
  addToWishlistThunk: (alternative, user) => dispatch(addToWishlistThunk(alternative, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AltCart)
