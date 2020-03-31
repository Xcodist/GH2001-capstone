import Axios from "axios";

const GET_ALT = "GET_ALT";

const alt = [];

const getAlt = alternatives => ({
  type: GET_ALT,
  alternatives
});

export const fetchAlternatives = products => async dispatch => {
  try {
    const alternatives = await Axios.get(
      `http://localhost:8080/api/alt?cart=${products}`
    );
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
