const charInput = document.getElementById("char-input");
const charsCounted = document.getElementById("chars-counted");

charInput.addEventListener("input", function(){
    charsCounted.textContent = charInput.value.length; 
});