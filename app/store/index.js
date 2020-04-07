import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user, { logout } from "./users";
import cart from "./cart";
import alt from './alt';
import wishlist from "./wishlist"
import company from './company'

const reducer = combineReducers({
  user,
  cart: cart,
  alt: alt,
  wishlist: wishlist,
  company: company
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export { logout };
export * from "./users";
