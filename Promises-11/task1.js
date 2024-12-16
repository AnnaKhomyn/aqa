const displayText = (text, timestamp) => {
    setTimeout (() => {
        console.log(text);
    }, timestamp);
}

displayText('Hi, I am a delayed text', 5000);


