const burgerMenu = document.querySelector(".burger_menu");
const burgerButtonMenu = document.getElementById("burgerButton");
const burgerExit = document.querySelector(".burger_exit_button");

if (burgerMenu.classList.contains('menuAppearance')) {
  document.addEventListener('click', function(burgerButtonMenu) { 
    burgerMenu.classList.toggle('menuAppearance');
  })
}
else burgerButtonMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('menuAppearance');        
})

burgerExit.addEventListener("click", function() {
  burgerMenu.classList.toggle('menuAppearance')
})