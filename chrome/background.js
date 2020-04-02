
// window.open("index.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");

// chrome.windows.onFocusChanged.addListener(function(){
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//     var tab = tabs[0];
//     var url = tab.url;
//     console.log(tab);
//     console.log('this is the url', url)
//     if(url.includes('cart'|| 'basket' || 'shopping-cart')) {
//       console.log('cart is recognized')
//     } else {
//       console.log('not in cart')
//     }
//   });
// });
// chrome.webNavigation.onCompleted.addListener(function() {
//   chrome.tabs.query({
//         active: true,
//         currentWindow: true
//       }, function(tabs) {
//         var tab = tabs[0];
//         var url = tab.url;
//         console.log(tab);
//         console.log('this is the url', url)
//         if(url.includes('cart'|| 'basket' || 'shopping-cart')) {
//         alert("This is my favorite website!");
//         } else {
//           alert("This is my favorite website!");
//         }
//       });
//     });

//

const options = {
  type: "basic",
  title: "popup",
   message: 'You have more choices!',
  iconUrl: "icons/colored-cart.png"
};
chrome.notifications.create(options);

// function callback(){
//  console.log('popup done!')
// }

// chrome.notifications.onClicked.addListener(redirectWindow);
chrome.windows.onFocusChanged.addListener(redirectWindow);

function redirectWindow(){
  alert("items")
}






