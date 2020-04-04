import Axios from 'axios'
import alt from './alt'

const GET_WISHLIST = 'GET_WISHLIST'
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

const wishlist = []

const getWishlist = (wishlist) => ({
  type: GET_WISHLIST,
  wishlist
})

const addToWishlist = altItem => ({
  type: ADD_TO_WISHLIST,
  altItem
})

const removeFromWishlist = wishlistId => ({
  type: REMOVE_FROM_WISHLIST,
  wishlistId
})

export const getWishlistThunk = (userId) => async dispatch => {
  try {
    const wishlist = await Axios.get(`http://localhost:8080/api/wishlist/${userId}`)
    console.log('this is wishlist', wishlist.data[0].wishlists)
    dispatch(getWishlist(wishlist.data[0].wishlists));
  } catch(e) {
    console.log(e);
    next(e)
  }
}

export const addToWishlistThunk = (altItem, user) => async dispatch => {
  try {
    const newItem = await Axios.put(`http://localhost:8080/api/wishlist/add/${user.id}`, altItem);
    if(newItem) {
      dispatch(addToWishlist(newItem.data))
    } else {
      console.log('already in wishlist')
    }
  } catch(e) {
    console.log(e)
    next(e)
  }
}

export const removeFromWishlistThunk = ( userId, wishlistId) => async dispatch => {
  try {
    const removedItem = await Axios.delete(`http://localhost:8080/api/wishlist/remove/${userId}/${wishlistId}`);
    dispatch(removeFromWishlist(wishlistId));
  }  catch (e) {
    console.log(e)
    next(e)
  }
}

export default function(state = wishlist, action) {
  switch (action.type) {
    case GET_WISHLIST:
      return action.wishlist
    case ADD_TO_WISHLIST:
      return [...state, action.altItem];
    case REMOVE_FROM_WISHLIST:
      let newWishlist = state.wishlist.filter(prod => prod.id !== action.wishlistId)
      return newWishlist;
    default:
      return state;
  }
}
