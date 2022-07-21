const burgerMenu = document.querySelector(".burger_menu");
const burgerButtonMenu = document.getElementById("burgerButton");
const burgerExit = document.querySelector(".burger_exit_button");
const navItem1 = document.getElementById("pyt");
const navItem2 = document.getElementById("des");
const navItem3 = document.getElementById("hiw");
const navItem4 = document.getElementById("tst");
const navItem5 = document.getElementById("acc");
const navItem6 = document.getElementById("som");

if (burgerMenu.classList.contains('menuAppearance')){
  document.addEventListener('click', function(element) {
    console.log(element);
    burgerMenu.classList.remove('menuAppearance');
  })
}
else {

  burgerButtonMenu.addEventListener("click", (event) => {
    console.log(event);
  burgerMenu.classList.toggle('menuAppearance');
  })
  burgerExit.addEventListener("click", function() {
    burgerMenu.classList.toggle('menuAppearance');
  })

  navItem1.addEventListener("click", function() {
      burgerMenu.classList.toggle('menuAppearance')
  })
  navItem2.addEventListener("click", function() {
      burgerMenu.classList.toggle('menuAppearance')
  })
  navItem3.addEventListener("click", function() {
      burgerMenu.classList.toggle('menuAppearance')
  })
  navItem4.addEventListener("click", function() {
      burgerMenu.classList.toggle('menuAppearance')
  })
  navItem5.addEventListener("click", function() {
      burgerMenu.classList.toggle('menuAppearance')
  })
  navItem6.addEventListener("click", function() {
      burgerMenu.classList.toggle('menuAppearance')
  })

  }
