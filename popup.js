chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('message recieved');
        if (request.greeting === "hello") {
            sendResponse({farewell: "goodbye"});
        }
    })

console.log('hello');
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