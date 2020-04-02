
const options = {
  type: "basic",
  title: "popup",
   message: 'message!',
   iconUrl: "icons/colored-cart.png"
};
chrome.notifications.create(options, callback);

function callback(){
 console.log('popup done!')
