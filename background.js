chrome.tabs.onCreated.addListener(function () {
    const response = chrome.runtime.sendMessage({greeting: "hello"});
    console.log(response);
})
