// Listen for tab creation
chrome.tabs.onCreated.addListener(function() {
    let arr = [];
    const getQuotes = fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
        arr = data;
        console.log(arr);
        getRandomQuote(arr);
    })
    .catch((err) => {
        console.log('Error fetching quotes', err);
    })
    console.log(getQuotes);
});

const getRandomQuote = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    displayNotification(arr[random].text);
}

const displayNotification = (quote) => {
    chrome.notifications.create(
        {
            title: 'Motivational Quote',
            message: `${quote}`,
            iconUrl: "pictures/logo128.png",
            type: 'basic',
            silent: true
        }
    );
}


