const burgerMenu = document.querySelector(".burger_menu");
const burgerButtonMenu = document.getElementById("burgerButton");
const burgerWrapper = document.querySelector(".burger_menu_wrapper");
const burgerExit = document.getElementById("burger_exit_button_id");
const burgerMenuItems = document.querySelectorAll(".nav_link");
const loginButton = document.querySelector(".login");
const popUpWrapper = document.querySelector(".pop_up_menu_wrapper");
const popUpMenu = document.querySelector(".pop_up_menu");
const eMail = document.getElementById("user_e_mail");
const password = document.getElementById("user_password");
const signInButton = document.querySelector(".sign_in_button");
const loginButtonMobile = document.getElementById("acc");
const registerEnter = document.querySelector(".register_enter_link");


burgerButtonMenu.addEventListener('click', function() {
  burgerWrapper.classList.toggle('damping');
  burgerMenu.classList.toggle('menuAppearance');
})

const burgerWrapperClose = (event) => {
  element = event.target;
  console.log(element);
  if (element !== burgerMenu) {
    console.log(element);
    burgerWrapper.classList.remove('damping');
    burgerMenu.classList.remove('menuAppearance');
  } 
}
burgerWrapper.addEventListener('click', burgerWrapperClose);
burgerExit.addEventListener('click', burgerWrapperClose);
burgerMenuItems.forEach(element => element.addEventListener('click', burgerWrapperClose));

loginButton.addEventListener('click', function() {
  popUpWrapper.classList.toggle('damping');
  popUpMenu.classList.toggle('popUpMenuAppearance');
})

loginButtonMobile.addEventListener('click', function() {
  popUpWrapper.classList.toggle('damping');
  popUpMenu.classList.toggle('popUpMenuAppearance');
})

const closePopUp = (event) => {
  element = event.target;
  if (element === popUpWrapper) {
    popUpWrapper.classList.toggle('damping');
    popUpMenu.classList.toggle('popUpMenuAppearance');
  }
}
popUpWrapper.addEventListener('click', closePopUp);

const textInput = (event) => {
  let userEmail = eMail.value;
  let userPassword = password.value;
  let alertText = `     E-mail: ${userEmail}\nPassword: ${userPassword}`;
  alert(alertText);
}

signInButton.addEventListener('click', textInput);

registerEnter.addEventListener('click', function() {
  document.querySelector(".pop_up_header").innerHTML = 'Create account';
  document.querySelector(".auto_login").style.display = "none";
  document.querySelector(".separator_or").style.display = "none";
  document.querySelector(".sign_in_button").innerHTML = 'Sign Up';
  document.querySelector(".recovery_link").style.display = "none";
  document.querySelector(".register_enter").innerHTML = 'Already have an account?';
  document.querySelector(".register_enter_link").innerHTML = 'Log in';
  popUpMenu.style.height = "436px";
})