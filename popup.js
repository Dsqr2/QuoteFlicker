const getQuote = async () => {
    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        //https://api.adviceslip.com/advice//
        const data = await res.json();
        const myQuote = document.querySelector("#myQuote");
        const myAuthor = document.querySelector("#myAuthor");

        myQuote.innerHTML = data.quote;

        var authorname = data.author;
        var outputauthor = "<strong>" + " -" + authorname + "</strong>";

        myAuthor.innerHTML = outputauthor;
        // myAuthor.innerHTML = data.author; 

    }
    catch(error) {}
};

window.addEventListener("load", () => {
    getQuote();
});