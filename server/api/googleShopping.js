require("../../secrets");
const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults('c88292a99c393afebed7524cf431848fbf998b0cbfe2654a81b50525dae23148');

const productAr = ['nintendo switch', 'Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black']
let altProducts = []
for (let i = 0; i < productAr.length; i++) {
  client.json(
    {
      engine: "google",
      q: `${productAr[i]}`,
      google_domain: "google.com",
      tbm: "shop",
      hl: "en",
      gl: "us",
      location: "United States"
    },
    result => {
      debugger
      let lowestPrice = {}
      const brandFilter = result.shopping_results.map((item) => {
        if (item.source !== "Walmart" && item.source !== "Target" && item.source !== "Amazon") {
          if (Object.keys(lowestPrice).length === 0) {
            lowestPrice = item
          } else {
            if (item.extracted_price < lowestPrice.extracted_price) {
              lowestPrice = item
            }
          }
          return item
        }
      })
      altProducts.push(lowestPrice)
      console.log(altProducts)
    }
  );
}
