const router = require("express").Router();
const secrets = require("../../secrets");
const {snip} = require('../../utils')

const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(
  process.env.SERPAPI_KEY
);



const config = item => ({
  engine: "google",
  q: `${item}`,
  google_domain: "google.com",
  tbm: "shop",
  hl: "en",
  gl: "us",
  location: "United States"
});

const getLowestPrice = (result, itemPrice, product) => {
  let lowestPrice = {};
  result.shopping_results.map(item => {
    let priceDiff = item.extracted_price / Number(itemPrice) * 100
    let dif =  Number(priceDiff.toFixed())
    if (
      !item.source.includes("Walmart") &&
      !item.source.includes("Target") &&
      !item.source.includes("Amazon") &&
      !item.source.includes("Best Buy") &&
      dif >= 70 &&
      snip(item.title) === snip(product)
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
  return lowestPrice;
};

router.get("/", async (req, res, next) => {
  try {
    let cartAr = req.query.cart.split(",");
    let priceArr = req.query.price.split(",")
    let altAr = [];
    cartAr.forEach((product, i) => {
      client.json(config(product), result => {
        const lowestPrice = getLowestPrice(result, priceArr[i], product);
        altAr.push(lowestPrice);
        if (altAr.length === cartAr.length) {
          res.json(altAr);
        }
      });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
