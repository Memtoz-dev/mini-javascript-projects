const numberInput = document.getElementById("num-input");
const guessButton = document.getElementById("guess-btn");
const numberHint = document.getElementById("num-hint");
const retryButton = document.getElementById("retry-btn");

let numberChosen = randomNumber();

guessButton.addEventListener("click", function(){
  let isCorrect = numberCheck(Number(numberInput.value), numberChosen);
  if (isCorrect === "correct"){
    numberHint.style.color = "green";
    numberHint.textContent = "Number is: CORRECT";
    guessButton.style.display = "none";
    retryButton.style.display = "inline-block";
  }
  else if (isCorrect === "too high"){
    numberHint.style.color = "red";
    numberHint.textContent = "Number is: too high";
  }
  else {
    numberHint.style.color = "blue";
    numberHint.textContent = "Number is: too low";
  }
  numberInput.value = "";
});

function randomNumber(){
  let x = Math.floor(Math.random() * 100);
  return x;
}

retryButton.addEventListener("click", function(){
  numberChosen = randomNumber();
  numberHint.style.color = "black";
  numberHint.textContent = "Number is: ";
  retryButton.style.display = "none";
  guessButton.style.display = "inline-block";
});

function numberCheck(x, y){
  let z = "";
  if (x === y){
    z = "correct";
  }
  else if (x > y){
    z = "too high";
  }
  else {
    z = "too low";
  }
  return z;
}



