const router = require("express").Router();
require("../../secrets");

const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(
  "c88292a99c393afebed7524cf431848fbf998b0cbfe2654a81b50525dae23148"
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

const getLowestPrice = result => {
  let lowestPrice = {};
  result.shopping_results.map(item => {
    console.log(item.source)
    if (
      !item.source.includes("Walmart") &&
      !item.source.includes("Target") &&
      !item.source.includes("Amazon")
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
    let altAr = [];
    cartAr.forEach(product => {
      client.json(config(product), result => {
        const lowestPrice = getLowestPrice(result);
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
