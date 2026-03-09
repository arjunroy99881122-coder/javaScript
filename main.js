const title = document.getElementById("title");
const description = document.getElementById("desc");

const changeBtn = document.getElementById("change-button");

changeBtn.addEventListener("click", function () {

title.textContent = "Java Programmer into first lesson here available";

description.textContent =
"You are seeing this because you have clicked the button";

console.log("button clicked");

alert("You are here below button");

});
