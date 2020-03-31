import React, { Component } from "react";
import {fetchAlternatives} from '../store/alt'
import { connect } from "react-redux";
class AltCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFetched: false
    }
  }

  async componentDidMount() {
    let cart = this.props.state.cart.map((item) => {
      let parsed = ''
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== ',') {
          parsed += item[i]
        }
      }
      return parsed
    })
    this.props.fetchAlternatives(cart)
  }

  render() {
    const alternatives = this.props.state.alt;
    return alternatives.length > 0 ? (
      <div>
        {alternatives.map(alternative => {
          return (
            <div key={alternative.title}>
              <div className="altProd">
                <div className="leftCol">
                  <img className="thumbnail" src={alternative.thumbnail} />
                </div>
                <div className="rightCol">
                  <a className="prodTitle" href={alternative.link}>
                    {alternative.title}
                  </a>
                  <div className="prodInfo">
                    {alternative.source}<br/>
                    {alternative.price}<br/>
                    {alternative.snippet}<br/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div>Loading alternatives!</div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  fetchAlternatives: (cart) => dispatch(fetchAlternatives(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(AltCart)
