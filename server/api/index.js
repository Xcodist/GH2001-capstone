const router = require('express').Router()
require("../../secrets");
const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(
  "c88292a99c393afebed7524cf431848fbf998b0cbfe2654a81b50525dae23148"
);
router.use('/users', require('./users'))
router.use('/companies', require('./companies'))
// router.use('/test', require('./test'))
const products = ['Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black', 'nintendo switch']

const config = (item) => ({
  engine: "google",
  q: `${item}`,
  google_domain: "google.com",
  tbm: "shop",
  hl: "en",
  gl: "us",
  location: "United States"
})

const getLowestPrice = (result) => {
  let lowestPrice = {};
  result.shopping_results.map(item => {
    if (
      item.source !== "Walmart" &&
      item.source !== "Target" &&
      item.source !== "Amazon"
    ) {
      if (!Object.keys(lowestPrice).length) {
        lowestPrice = item;
      } else {
        if (item.extracted_price < lowestPrice.extracted_price) {
          lowestPrice = item;
        }
      }
      return item;
    }
  });
  return lowestPrice
}

router.get('/test', async (req, res, next) => {
  try {
      // products.forEach((product) => {
      client.json(config(products[0]), result => {
        const lowestPrice = getLowestPrice(result)
        res.json(lowestPrice)
    })
  } catch (error) {
      next(error);
  }
});
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
