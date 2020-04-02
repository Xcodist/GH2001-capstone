import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logout} from '../store/users'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class Profile extends Component {

  return (
    <div className="Profile">
      <h1></h1>
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(Profile);
