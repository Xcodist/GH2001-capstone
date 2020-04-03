const router = require('express').Router()
const NewsAPI = require('newsapi')
require('../../secrets')
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
module.exports = router

router.get('/:company', async (req, res, next) => {
    const { company } = await req.params;
    newsapi.v2.everything({
      q: `${company} company`,
      sources: 'bbc-news,the-verge',
      domains: 'bbc.co.uk, techcrunch.com',
      from: '2020-3-23',
      to: '2019-1-19',
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    }).then((articles) =>{
      res.json(articles)
    })
})
