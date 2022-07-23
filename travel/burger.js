const burgerMenu = document.querySelector(".burger_menu");
const burgerButtonMenu = document.getElementById("burgerButton");
const burgerWrapper = document.querySelector(".burger_menu_wrapper");
const loginButton = document.querySelector(".login");
const popUpWrapper = document.querySelector(".pop_up_menu_wrapper");
const popUpMenu = document.querySelector(".pop_up_menu");


burgerButtonMenu.addEventListener('click', function() {
  burgerWrapper.classList.toggle('damping');
  burgerMenu.classList.toggle('menuAppearance');
})

burgerWrapper.addEventListener('click', function() {
  burgerWrapper.classList.remove('damping');
  burgerMenu.classList.remove('menuAppearance');

})

loginButton.addEventListener('click', function() {
  popUpWrapper.classList.toggle('damping');
  popUpMenu.classList.toggle('menuAppearance');
})

const whereIclick = (event) => {
  element = event.target;
  if (element ===popUpWrapper) {
    popUpWrapper.classList.toggle('damping');
    popUpMenu.classList.toggle('menuAppearance');
  }
}
popUpWrapper.addEventListener('click', whereIclick)