// const options = {
//     type: "basic",
//     title: "popup",
//     message: "You have more choices!",
//     iconUrl: "icons/colored-cart.png"
//   };
//   chrome.notifications.create(options);


//   chrome.windows.onFocusChanged.addListener(redirectWindow);

//   function redirectWindow() {
//     chrome.tabs.query(
//       {
//         active: true,
//         currentWindow: true
//       },
//       function(tabs) {
//         var tab = tabs[0];
//         var url = tab.url;
//         if (url.includes("cart")) {
//           alert("Your alternate cart is now ready for checkout!");
//         }
//       }
//     );
//   }
