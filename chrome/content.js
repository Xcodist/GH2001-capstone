chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    // console.log(message)
    if(message.txt === 'cart') {
        let items = document.getElementsByClassName('a-size-medium sc-product-title')
        let cartList = []
        for (let i = 0; i < items.length; i++) {
            let item = items[i].innerText;
            // console.log(item)
            cartList.push(item)
            
          }
        
        console.log(cartList)
    }
}
