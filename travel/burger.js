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
// let offset = 0;
const slider = document.querySelector(".slider");



burgerButtonMenu.addEventListener('click', function() {
  burgerWrapper.classList.toggle('damping');
  burgerMenu.classList.toggle('menuAppearance');
})

const burgerWrapperClose = (event) => {
  element = event.target;
  if (element !== burgerMenu) {
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

const toCreateAccount = () => {
  document.querySelector(".pop_up_header").innerHTML = 'Create account';
  document.querySelector(".auto_login").style.display = "none";
  document.querySelector(".separator_or").style.display = "none";
  document.querySelector(".sign_in_button").innerHTML = 'Sign Up';
  document.querySelector(".recovery_link").style.display = "none";
  document.querySelector(".register_enter").innerHTML = 'Already have an account?';
  document.querySelector(".register_enter_link").innerHTML = ' Log in';
  popUpMenu.style.height = "436px";
}

const toLoginAccount = () => {
  document.querySelector(".pop_up_header").innerHTML = 'Log in to your account';
  document.querySelector(".auto_login").style.display = "flex";
  document.querySelector(".separator_or").style.display = "flex";
  document.querySelector(".sign_in_button").innerHTML = 'Sign In';
  document.querySelector(".recovery_link").style.display = "flex";
  document.querySelector(".register_enter").innerHTML = 'Don’t have an account?';
  document.querySelector(".register_enter_link").innerHTML = ' Register';
  popUpMenu.style.height = "660px";
}

const toCreateAccountMobile = () => {
  document.querySelector(".pop_up_header").innerHTML = 'Create account';
  document.querySelector(".auto_login").style.display = "none";
  document.querySelector(".separator_or").style.display = "none";
  document.querySelector(".sign_in_button").innerHTML = 'Sign Up';
  document.querySelector(".recovery_link").style.display = "none";
  document.querySelector(".register_enter").innerHTML = 'Already have an account?';
  document.querySelector(".register_enter_link").innerHTML = ' Log in';
  popUpMenu.style.height = "297px";
}

const toLoginAccountMobile = () => {
  document.querySelector(".pop_up_header").innerHTML = 'Log in to your account';
  document.querySelector(".auto_login").style.display = "flex";
  document.querySelector(".separator_or").style.display = "flex";
  document.querySelector(".sign_in_button").innerHTML = 'Sign In';
  document.querySelector(".recovery_link").style.display = "flex";
  document.querySelector(".register_enter").innerHTML = 'Don’t have an account?';
  document.querySelector(".register_enter_link").innerHTML = ' Register';
  popUpMenu.style.height = "450px";
}

const mediaQuery = window.matchMedia('(max-width: 391px)')
if (mediaQuery.matches) {
  registerEnter.addEventListener('click', function(event) {
    if (popUpMenu.clientHeight === 450) toCreateAccountMobile(event);
    else toLoginAccountMobile(event);
  })
}
else {
  registerEnter.addEventListener('click', function(event) {
    if (popUpMenu.clientHeight === 660) toCreateAccount(event);
    else toLoginAccount(event);
  })
}

// const getMove = (event) => {
//   event.addEventListener('click',function (event) {
//     if (document.getElementById("slide_left").contains(event.target)){
//       offset += (event.target.clientWidth + 60);
//       if (offset > (event.target.clientWidth + 60)){
//         offset = 0;
//       }
//       slider.style.left = offset + 'px';
//     }
//     else if (document.getElementById("slide_right").contains(event.target)) {
//       offset -= (event.target.clientWidth + 60);
//       if (offset < -(event.target.clientWidth + 60)){
//         offset = 0;
//       }
//       slider.style.left = offset + 'px';
//     }
//   })
// }
// getMove(document.getElementById("slide_left"));
// getMove(document.getElementById("slide_right"));

let slides = document.querySelectorAll(".slide_image");
let sslider = [];

// for (i=0; i<slides.length; i++) {
//   sslider[i] = slides[i].src;
//   slides[i].remove();
// }
// const init = (input, output) => {
//   for (i=0; i<input.length; i++) {
//     output[i] = input[i].src;
//     input[i].remove();
//   }
// }
// init(slides, sslider);

// let step = 0;
// let offset = 0;

// function draw() {
//   let img = document.createElement('img');
//   img.src = sslider[step];
//   img.classList.add('slide_image');
//   img.style.left = offset*800 +'px';
//   document.querySelector('.slide').appendChild(img);
//   step++;
//   offset = 1;
// }
// draw(); draw(); draw();