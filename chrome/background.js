var background = {
  init: function() {

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      console.log('message received', request);
    })
  }
};

background.init();
