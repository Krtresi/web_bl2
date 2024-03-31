const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);

});



document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });
});

