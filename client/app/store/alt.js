import Axios from "axios";

const GET_ALT = "GET_ALT";


const alt = [];

const getAlt = alternatives => ({
  type: GET_ALT,
  alternatives
});


export const fetchAlternatives = (products, prices) => async dispatch => {
  try {
    const alternatives = await Axios.get(
      `https://altcart.herokuapp.com/api/alt?cart=${products}&price=${prices}`
    );
    console.log(alternatives)
    if (alternatives) {
      dispatch(getAlt(alternatives.data));
    } else {
      console.log("not found");
    }
  } catch (err) {
    console.log(err);
  }
};

export default function(state = alt, action) {
  switch (action.type) {
    case GET_ALT:
      return action.alternatives;
    default:
      return state;
  }
}
