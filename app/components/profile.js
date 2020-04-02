import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me, logout} from '../store/users'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({...this.state.user})
    console.log('in the component did mount', this.props)
    console.log(this.state)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    const {user} = this.props
    return (
      <div className="Profile">
        <h1 className="welcome">Welcome {user.firstName}</h1>
        <button onClick={this.handleSubmit}>Logout</button>
      </div>
    )
  }
}
const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(Profile);
