if (window.location.href.includes('cart')) {
    let items = document.getElementsByClassName('a-size-medium sc-product-title')
          let cartList = []
          for (let i = 0; i < items.length; i++) {
              let item = items[i].innerText;
              cartList.push(item)
            }
          console.log(cartList)
          chrome.storage.local.set({"items": cartList}, function () {
            console.log('Value is set to ' + cartList);
          });

  }


  // addListener(function() { chrome.app.window.create('index.html', { id: 'main', ... one open todo item, create a notification popup via chrome.notifications.create() .

  // chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  //   } );
  //   chrome.runtime.onMessage.addListener({active: true, currentWindow: true}, function(tabs){
  //     chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) { 'hello'});
  // });



  // message is the parameter containing { action: "open_dialog_box" } or whatever you send. sender is an object containing your Chrome extension's ID. sendResponse is the parameter containing function(response) {} or whatever function you pass in to be called once the message is handled.
