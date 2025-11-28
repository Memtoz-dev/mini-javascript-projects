const mainText = document.getElementById("main-text");
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark"){
  body.classList.add("dark");
  themeBtn.textContent = "Switch to Light Theme";
  mainText.textContent = "Dark Mode";
  
}



themeBtn.addEventListener("click", function(){
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (isDark) {
    themeBtn.textContent = "Switch to Light Theme";
    mainText.textContent = "Dark Mode";
  }
  else {
    themeBtn.textContent = "Switch to Dark Theme";
    mainText.textContent = "Light Mode";
  }
});