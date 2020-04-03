import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me, logout} from '../store/users'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {getWishlistThunk, removeFromWishlistThunk} from '../store/wishlist'



class Profile extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('did mount', this.props)
    this.props.getWishlistThunk(this.props.user.id);
  }



  handleSubmit(evt) {
    evt.preventDefault()
    if(event.target.name === 'logout') {
      this.props.logout();
      this.props.history.push('/');
    }

  }

  render() {
    console.log('the props', this.props)
    const {user} = this.props
    const {wishlist} = this.props.wishlist;

    return (
      <div className="Profile">
        <h1 className="welcome">Welcome {user.firstName}</h1>
        <div>
        {/* {wishlist.map(alternative => {
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
                            this.handleSubmit(event, user.id, alternative.id)
                          }}>Remove from wishlist!</button>
                        </div>
                      </div>
                    </div>
                  ); */}
      {/* })} */}
        </div>
        <button onClick={this.handleSubmit} name="logout">Logout</button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    wishlist: state.wishlist
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me()),
    getWishlistThunk: (userId) => dispatch(getWishlistThunk(userId)),
    logout: () => dispatch(logout()),
    removeFromWishlistThunk: (userId, wishlistId) => dispatch(removeFromWishlistThunk(userId, wishlistId))
  }
}

export default connect(mapState, mapDispatch)(Profile);
