require("../../secrets");
const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(process.env.GOOGLE_SHOPPING_API_KEY);

client.json(
  {
    engine: "google",
    q: "nintendo switch",
    google_domain: "google.com",
    tbm: "shop",
    hl: "en",
    gl: "us",
    location: "United States"
  },
  result => {
    const filtered = result.shopping_results.map((item) => {
      if (item.source !== "Walmart" && item.source !== "Target" && item.source !== "Amazon") {
        return item
      }
    })
    console.log(filtered)
  }
);

// var parameter = {
//     engine: "google",
//     q: "nintendo switch",
//     google_domain: "google.com",
//     tbm: "shop",
//     hl: "en",
//     gl: "us",
//     location: "United States"
// };

// var callback = function(data) {
//   console.log(data)
// }

// // Show result as JSON
// client.json(parameter, callback)
