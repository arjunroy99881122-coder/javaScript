const tittle= document.getElementById("tittle");
const description= document.getElementById("desc");
const changeBtn= document.getElementById("change-button");
changeBtn.addEventListener("click",function(){
  tittle.textContent = "Amra prothom barer moto Event listen kora sikhlam";
  description.textContent = "You are seeing this because You Have Clicked The Button";
  
  
  console.log("button clicked");
  
  
});

const themeButton= document.querySelector("#theme-button")
themeButton.addEventListener("click",function(){
  
  document.body.classList.toggle("dark");
  
  });