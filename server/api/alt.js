const router = require("express").Router();
require("../../secrets");

const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(
  "c88292a99c393afebed7524cf431848fbf998b0cbfe2654a81b50525dae23148"
);

// const products = [
//   "Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black",
//   "nintendo switch"
// ];

const config = item => ({
  engine: "google",
  q: `${item}`,
  google_domain: "google.com",
  tbm: "shop",
  hl: "en",
  gl: "us",
  location: "United States"
});

const searchResult = results => {
  return results.shopping_results.reduce(
    (lowestPriceCompany, currentCompany) => {
      if (
        currentCompany.source !== "Walmart" &&
        currentCompany.source !== "Target" &&
        currentCompany.source !== "Amazon"
      ) {
        return lowestPriceCompany.extracted_price <
          currentCompany.extracted_price
          ? lowestPriceCompany
          : currentCompany;
      }
      else {
        return {}
      }
    }, {extracted_price: Number.MAX_SAFE_INTEGER}
  );
};

// const getLowestPrice = result => {
//   let lowestPrice = {};
//   result.shopping_results.map(item => {
//     if (
//       item.source !== "Walmart" &&
//       item.source !== "Target" &&
//       item.source !== "Amazon"
//     ) {
//       if (!Object.keys(lowestPrice).length) {
//         lowestPrice = item;
//       } else {
//         if (item.extracted_price < lowestPrice.extracted_price) {
//           lowestPrice = item;
//         }
//       }
//       return item;
//     }
//   });
//   return lowestPrice;
// };

router.get("/", async (req, res, next) => {
  try {
    let cartAr = req.query.cart.split(",");
    let altAr = [];
    cartAr.forEach(product => {
      client.json(config(product), result => {
        const lowestPrice = searchResult(result);
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
