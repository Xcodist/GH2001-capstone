import React, { Component } from "react";
import {fetchAlternatives} from '../store/alt'
import {addToWishlistThunk} from '../store/wishlist'
import { connect } from "react-redux";
class AltCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFetched: false
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
    this.props.fetchAlternatives(cart, prices)
  }

  handleSubmit(event, alternative, user) {
    event.preventDefault()
    this.props.addToWishlistThunk(alternative, user)
  }

  render() {
    const alternatives = this.props.state.alt;
    const user = this.props.state.user;
    return alternatives.length > 0 ? (
      <div>
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
      <div className='loading'>Loading alternatives!</div>
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
