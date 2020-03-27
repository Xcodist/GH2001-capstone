// chrome.windows.onFocusChanged.addListener(function(){
//     chrome.tabs.query({
//       active: true,
//       currentWindow: true
//     }, function(tabs) {
//       var tab = tabs[0];
//       var url = tab.url;
//     //   console.log(tab);
//     //   console.log('this is the url', url)
//       if(url.includes('cart')) {
//         //   const msg = {txt: 'cart is recognized'}
//         //   chrome.tabs.sendMessage(tab.id, msg)
//         console.log('cart is recognized')
//       } else {
//         // const msg = {txt: 'not in cart'}
//         // chrome.tabs.sendMessage(tab.id, msg)
//         console.log('not in cart')
//       }
//     });
//   });

