import axios from 'axios';

export default articlesReducer

//action type
const GET_ARTICLES = 'GET_ARTICLES'

const initialState = [];

const getArticles = (articles) => ({
  type: GET_ARTICLES,
  articles,
})

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    default:
      return state
  }
}

export const getArticlesThunk = (company) => {
  return async dispatch => {
    try {
      const {articles} = await axios.get(`http://localhost:8080/newsapi/articles/${company}`)
      dispatch(getArticles(articles));
  } catch(e) {
    console.log(e);
  }
}
}
