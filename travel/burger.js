const burgerMenu = document.querySelector(".burger_menu");
const burgerButtonMenu = document.getElementById("burgerButton");
const burgerExit = document.querySelector(".burger_exit_button");
const accountExit = document.getElementById("accountexit");
const navItem = document.querySelector(".nav_item");


if (burgerMenu.classList.contains('menuAppearance')) {
  document.addEventListener('click', function() {
    burgerMenu.classList.toggle('menuAppearance');
  })
}
else {burgerButtonMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('menuAppearance');
})}

burgerExit.addEventListener("click", function() {
  
  burgerMenu.classList.toggle('menuAppearance');
})

// accountExit.addEventListener("click", function() {
//   burgerMenu.classList.toggle('menuAppearance')
// })

navItem.addEventListener("click", function() {
  burgerMenu.classList.toggle('menuAppearance')
})