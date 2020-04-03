if(window.location.href.includes('amazon')) {
  if (window.location.href.includes('cart')) {
    let items = document.getElementsByClassName('a-size-medium sc-product-title')
    let prices = document.getElementsByClassName('a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold')
    let cartList = []
    for (let i = 0; i < prices.length; i++) {
      let item = items[i].innerText;
      let price = prices[i].innerText.slice(1)
      cartList.push({[item]: price})
    }
    chrome.storage.local.set({"items": cartList}, function() {
      console.log('Value is set to ' + cartList);
    });
  }
  if (window.location.href.includes('buy')) {
    let items = document.getElementsByClassName('a-row breakword')
    let prices = document.querySelectorAll('.a-color-price .a-text-bold')
    let cartList = []
    for (let i = 0; i < prices.length; i++) {
      let item = items[i].innerText;
      let price = prices[i].innerText.slice(1)
      cartList.push({[item]: price})
    }
    chrome.storage.local.set({"items": cartList}, function() {
      console.log('Value is set to ' + cartList);
    });
  }
}
if(window.location.href.includes('walmart')) {
  if (window.location.href.includes('cart')) {
    let items = document.getElementsByClassName("cart-item-name js-product-title")
    let prices = document.querySelectorAll('.price-main .price .visuallyhidden')
    let cartList = []
    for (let i = 0; i < prices.length; i++) {
      let item = items[i].innerText;
      let price = prices[i].innerText.slice(1)
      cartList.push({[item]: price})
    }
    chrome.storage.local.set({"items": cartList}, function() {
      console.log('Value is set to ' + cartList);
    });
  }
}
