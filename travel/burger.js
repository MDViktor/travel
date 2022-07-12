const burgerMenu = document.querySelector(".burger_menu");
const burgerButtonMenu = document.getElementById("burgerButton");


burgerButtonMenu.addEventListener("click", function() {
    document.addEventListener('click', function(burgerButtonMenu) { 
        burgerMenu.classList.toggle('menuAppearance');
        })
})


