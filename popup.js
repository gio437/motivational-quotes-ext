// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message received in content script:", request);

    // Process the message
    if (request.action === "tab_created") {
        // Perform actions specific to the opening of a new tab
        let data = { message: "Content script received message from background script" };
        
        // Send a response back to the background script
        sendResponse(data);
    }
});

let arr = [];
const getQuotes = fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
        arr = data;
        console.log(arr);
        checkQuotes();
    })
    .catch((err) => {
        console.log('Error fetching quotes', err);
    })
console.log(getQuotes);
// if you arent gonna store locally maybe just make a random function? 

let quoteCount = 0;
const checkQuotes = () => {
    console.log(arr[quoteCount].text);
    quoteCount++;
    quoteCount == 15 ? quoteCount = 0 : false;
}