// Listen for tab creation
chrome.tabs.onCreated.addListener(function() {
    let arr = [];
    const getQuotes = fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
        arr = data;
        console.log(arr);
        checkQuotes(arr);
    })
    .catch((err) => {
        console.log('Error fetching quotes', err);
    })
    console.log(getQuotes);
});

// if you arent gonna store locally maybe just make a random function? 
const checkQuotes = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    displayNotification(arr[random].text);
    // quoteCount++;
    // quoteCount == arr.length ? quoteCount = 0 : false;
}

const displayNotification = (quote) => {
    chrome.notifications.create(
        {
            title: 'Motivational Quote',
            message: `${quote}`,
            iconUrl: "logo.png",
            type: 'basic',
            silent: true
        }
    );
}


