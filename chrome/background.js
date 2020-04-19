const addToCart = {
  type: "basic",
  title: "popup",
  message: "You have more choices!",
  iconUrl: "./icons/colored-cart.png",
};

const checkout = {
  type: "basic",
  title: "popup",
  message: "Your alternate cart is now ready for checkout!",
  iconUrl: "./icons/colored-cart.png",
};

function redirectWindow() {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      const count = 0;
      const tab = tabs[0];
      const url = tab.url;

      if (url.includes("amazon")) {
        if (url.includes("cart") && count === 0) {
          count++;
          chrome.notifications.create(checkout);
        } else if (url.includes("newItems=")) {
          chrome.notifications.create(addToCart);
        } else if (!url.includes("cart")) {
          count = 0;
        }
      }
      
    }
  );
}


chrome.windows.get.addListener(redirectWindow);

