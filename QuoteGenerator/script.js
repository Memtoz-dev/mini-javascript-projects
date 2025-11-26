const quote = document.querySelector(".quote");
const quoteButton = document.querySelector(".quote-btn");
const quoteList = ["You are enough!", "Keep calm and carry on.", "Make tomorrow's you proud.", "Don't git gud, Git Hub.", "Love thy neighbor.", "Try, try, try again."];

let previousQuote;
let currentQuote;

function randomQuote(list){
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

quoteButton.addEventListener("click", function(){
    while (currentQuote === previousQuote){ //prevents repeating quotes
        currentQuote = randomQuote(quoteList);
    }
    quote.style.opacity = 0; //sets invisible
    setTimeout(() => quoteChange(quote, currentQuote), 750); //changes quote
    setTimeout(() => fadeIn(quote), 750); //waits 1000ms then sets to visible

    previousQuote = currentQuote; //stores the quote chosen in previousQuote
});

function fadeIn(element){
    element.style.opacity = 1;
}

function quoteChange(quoteText, quoteChosen){
    quoteText.textContent = quoteChosen;
}
