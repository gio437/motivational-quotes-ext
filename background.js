// Listen for tab creation
chrome.tabs.onCreated.addListener(function(tab) {
    console.log("New tab created:", tab);
    
    let arr = [];
const getQuotes = fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
        arr = data;
        console.log(arr);
        // checkQuotes();
    })
    .catch((err) => {
        console.log('Error fetching quotes', err);
    })
    console.log(getQuotes);
    setTimeout(displayNotification, 3000);
});

// if you arent gonna store locally maybe just make a random function? 

// let quoteCount = 0;
// const checkQuotes = () => {
//     console.log(arr[quoteCount].text);
//     quoteCount++;
//     quoteCount == 15 ? quoteCount = 0 : false;
// }

const displayNotification = () => {
    console.log('hello');
    chrome.notifications.create(
        {
            title: 'Motivational Quote',
            message: 'insert quote',
            iconUrl: "logo.png",
            type: 'basic',
            silent: false
        }
    );
}


