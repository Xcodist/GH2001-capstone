
window.open("index.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");

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

chrome.runtime.onMessage.addListener(function(message, callback) {
  if (message.data == “setAlarm”) {
    chrome.alarms.create({delayInMinutes: 5})
  } else if (message.data == “runLogic”) {
    chrome.tabs.executeScript({file: 'logic.js'});
  } else if (message.data == “changeColor”) {
    chrome.tabs.executeScript(
        {code: 'document.body.style.backgroundColor="orange"'});
  };
});





