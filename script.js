const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})


// prevent defaut behavior when button is submitted 
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
       });