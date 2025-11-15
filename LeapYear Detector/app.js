const inputBtn = document.getElementById("input-button");
const isLeapYear = document.getElementById("output");

inputBtn.addEventListener("click", function(){
    let yearInput = prompt("What year do you want to check?");
    let check1 = yearInput / 4;

    if (Number.isInteger(check1)){
        isLeapYear.innerText = "It is a leap year!";
        isLeapYear.style.color = "green";
    }
    else{
        isLeapYear.innerText = "It is not a leap year!";
        isLeapYear.style.color = "red";
    };
});