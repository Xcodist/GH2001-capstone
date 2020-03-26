chrome.windows.onFocusChanged.addListener(function(){
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.log(tab);
    console.log('this is the url', url)
    if(url.includes('cart')) {
      console.log('cart is recognized')
    } else {
      console.log('not in cart')
    }
  });
});
// document.write('hello');
// chrome.windows.getCurrent.addListener(function() {
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//     const tab = tabs[0];
//     const url = tab.url;
//     if(url.includes('cart')) {
//       console.log('cart is recognized')
//     } else {
//       console.log('not in cart')
//     }
//   });
// })
// onFocusedChanged
// chrome.windows.onFocusedChanged.addListener(function() {
//   chrome.tabs.query({
//   active: true,
//   currentWindow: true
// }, function(tabs) {
//   var tab = tabs[0];
//   var url = tab.url;
//   if(url.includes('cart')) {
//     console.log('cart is recognized')
//   } else {
//     console.log('not in cart')
//   }
// });
// })


// chrome.tabs.query({
//   active: true,
//   currentWindow: true
// }, function(tabs) {
//   var tab = tabs[0];
//   var url = tab.url;
//   if(url.includes('cart')) {
//     console.log('cart is recognized')
//   } else {
//     console.log('not in cart')
//   }
// });
