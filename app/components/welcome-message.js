import React from 'react'
import cart from "../../static/online-shopping.jpg";
import { connect } from 'react-redux'

const Message = (props) => {
  console.log(props)
  return (
    <div className="message">
      <img className="cartimg" src={cart} />
      <h2 className="welcome">
        <span>Welcome to AltCart!</span>
      </h2>
      <p className='welcomeinfo'>
        Thank you for taking us shopping with you {props.state.user.firstName}! We are here to help keep you
        informed as a consumer and offer alternatives to shopping at retail
        giants like Amazon and Walmart. <span>Happy Shopping!</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps)(Message)
