const GET_CART = "GET_CART";

const cart = [];

const getCart = cart => ({
  type: GET_CART,
  cart
});

export const retrieveCart = () => async dispatch => {
  try {
    let cartItems = [];
    await chrome.storage.local.get(["items"], function(result) {
      result.items.forEach(item => cartItems.push(item));
    });
    console.log('this is cart items', cartItems)
    dispatch(getCart(cartItems));
  } catch (err) {
    console.log(err);
  }
};

export default function(state = cart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    default:
      return state;
  }
}
