require("../../secrets");
const GSR = require("google-search-results-nodejs");
let client = new GSR.GoogleSearchResults(
  "c88292a99c393afebed7524cf431848fbf998b0cbfe2654a81b50525dae23148"
);

let altProducts = []

function getLowestPrice (result) {
  debugger;
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


const getAltProducts = item => {
  try {
    client.json(
      {
        engine: "google",
        q: `${item}`,
        google_domain: "google.com",
        tbm: "shop",
        hl: "en",
        gl: "us",
        location: "United States"
      }, getLowestPrice(result)
    )
  }
  catch(err) {
    console.log(err)
  }
};

getAltProducts('nintendo switch')

// let altProducts = [];

// const getAltProducts = async (cartAr) => {
//   for (let i = 0; i < cartAr.length; i++) {
//     client.json(
//       {
//         engine: "google",
//         q: `${cartAr[i]}`,
//         google_domain: "google.com",
//         tbm: "shop",
//         hl: "en",
//         gl: "us",
//         location: "United States"
//       },
//       result => {
//         debugger
//         let lowestPrice = {};
//         result.shopping_results.map(item => {
//           if (
//             item.source !== "Walmart" &&
//             item.source !== "Target" &&
//             item.source !== "Amazon"
//           ) {
//             if (!Object.keys(lowestPrice).length) {
//               lowestPrice = item;
//             } else {
//               if (item.extracted_price < lowestPrice.extracted_price) {
//                 lowestPrice = item;
//               }
//             }
//             return item;
//           }
//         });
//         debugger
//         altProducts.push(lowestPrice);
//       }
//     );
//   }
// };

// getAltProducts(['Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black', 'nintendo switch'])

// async function returnProds(itemAr) {
//   debugger;
//   await getAltProducts(itemAr);
//   console.log(altProducts);
//   debugger;
//   return altProducts;
// }

// returnProds([
//   "Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black",
//   "nintendo switch"
// ]);
