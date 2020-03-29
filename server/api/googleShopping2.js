require("../../secrets");
const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(
  "c88292a99c393afebed7524cf431848fbf998b0cbfe2654a81b50525dae23148"
);

const productConfig = item => ({
  engine: "google",
  q: `${item}`,
  google_domain: "google.com",
  tbm: "shop",
  hl: "en",
  gl: "us",
  location: "United States"
});

const searchResult = async shopping_results => {
  let lowestPrice = Number.MAX_SAFE_INTEGER;
  // shopping_results.forEach((lowestPriceCompany) => {
  //   console.log(lowestPriceCompany.extracted_price)
  // })
  // shopping_results.forEach((lowestPriceCompany, currentCompany) => {
    return await shopping_results.reduce((lowestPriceCompany, currentCompany) => {
      return lowestPriceCompany.extracted_price < currentCompany.extracted_price
        ? lowestPriceCompany
        : currentCompany;
  });
}
  // const lowestPrice = Number.MAX_SAFE_INTEGER;
  // lowestPriceCompany = {};

  // result.shopping_results.forEach(item => {
  //   if (
  //     item.source !== "Walmart" &&
  //     item.source !== "Target" &&
  //     item.source !== "Amazon" &&
  //     item.extracted_price < lowestPrice) {
  //       lowestPriceCompany = item;
  //     }
  // });

  // altProducts.push(lowestPrice);
  const getAltProducts = cartAr => {
    const x = []
    cartAr.forEach(item => {
      client.json(productConfig(item), ({ shopping_results }) => {
        x.push(shopping_results);
    });
  });
  // return await Promise.all(altProducts).then(results => {
  //   debugger
  //   return results;
  //   // console.log(results)
  // });
  // for (let i = 0; i < cartAr.length; i++) {
  //   await client.json(productConfig(i), searchResult);
  // }
  // debugger
  console.log(x)
  };
  // return altProducts

const products = ['Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black', 'nintendo switch'];
getAltProducts(products);
