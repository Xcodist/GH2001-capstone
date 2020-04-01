import React from 'react'
import {connect} from 'react-redux'
import { auth } from '../store/users'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form className="form-login" onSubmit={handleSubmit} name={name}>
      {(name === 'signup') ?
        (<div>
        <div>
        <p className="float">
            <label htmlFor="firstName">
                <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </p>
        </div>
        <div>
        <p className="float">
            <label htmlFor="lastName">
                <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </p>
        </div>
        </div>) : <span /> }
        <div>
        <p className="float">
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </p>
        </div>
        <div>
        <p className="float">
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
          </p>
        </div>
        <div>
        <p className="clearfix">
          <button type="submit">{displayName}</button>
          </p>
          {(name === 'signup') ?
          (<Link to='/login'>Or Log In</Link>) :
          (<Link to='/signup'>Or Sign Up</Link>)}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  )
}


const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value

      if(evt.target.firstName && evt.target.lastName){
        const firstName = evt.target.firstName.value
        const lastName = evt.target.lastName.value
        dispatch(auth(email, password, formName, firstName, lastName))
      }

      console.log('inside the thunk', formName, email, password)
      dispatch(auth(email, password, formName))

    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
