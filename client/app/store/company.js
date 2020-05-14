import Axios from 'axios'

const GET_COMPANY = 'GET_RATING';
const company = {};

const getCompany = company => ({
  type: GET_COMPANY,
  company
})

export const retrieveCompany = (domain) => async dispatch => {
  try {
    if(typeof domain === 'number') {

      let company = await Axios.get(`https://altcart.herokuapp.com/api/companies/subsidiaries?name=${domain}`)
      if(company) {
        dispatch(getCompany(company.data))
      } else {
        console.log('not found')
      }
    }
    else {
      let company = await Axios.get(`https://altcart.herokuapp.com/api/companies?name=${domain}`)

      if (company) {
        dispatch(getCompany(company.data))
      }
      else {
        console.log('not found')
      }
    }
  } catch(err) {
    console.log(err)
  }
}

export default function(state = company, action) {
  switch(action.type) {
    case GET_COMPANY:
      return action.company
    default:
      return state;
  }
}
