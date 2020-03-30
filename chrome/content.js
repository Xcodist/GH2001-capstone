if (window.location.href.includes('cart')) {
    let items = document.getElementsByClassName('a-size-medium sc-product-title')
          let cartList = []
          for (let i = 0; i < items.length; i++) {
              let item = items[i].innerText;
              cartList.push(item)
            }
          console.log(cartList)
          chrome.storage.local.set({"items": cartList}, function() {
              console.log('Value is set to ' + cartList);
          });
  }
  