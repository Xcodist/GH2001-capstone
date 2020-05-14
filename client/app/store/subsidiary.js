import Axios from 'axios'

const GET_SUBSIDIARY = 'GET_SUBSIDIARY'
const subsidiary = {};

const getSubsidiary = subsidiary => ({
  type: GET_SUBSIDIARY,
  subsidiary
})

export const retrieveSubsidiary = (domain) => async dispatch => {
  try {

    let subsidiary = await Axios.get(`https://altcart.herokuapp.com/api/subsidiaries?name=${domain}`)

  if(subsidiary) {
    dispatch(getSubsidiary(subsidiary.data))
  } else {
    console.log('not found')
  }
  } catch(e) {
    console.log(e)
  }
}

export default function(state = subsidiary, action) {
  switch(action.type) {
    case GET_SUBSIDIARY:
      return action.subsidiary
    default:
      return state
  }
}
