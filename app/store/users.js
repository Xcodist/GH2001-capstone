import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  debugger
  try {
  chrome.storage.local.get(['isLoggedIn', 'user'], function(data) {
    if(data.isLoggedIn) {
      dispatch(getUser(data.user));
    } else {
      const res = axios.get('http://localhost:8080/auth/me')
      dispatch(getUser(res.data || defaultUser))
    }
  })
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  email,
  password,
  method,
) => async dispatch => {
  let res
  try {
    res = await axios.post(`http://localhost:8080/auth/${method}`, {
      email,
      password
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
    chrome.storage.local.set({isLoggedIn: true, 'user': {...res.data}}, function() {
      console.log('values are set to ', res.data)
    });
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('http://localhost:8080/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
