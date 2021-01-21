// dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");
});

// nav_mobile event
const menuBtn = document.querySelector(".icon-menu");
const menuContent = document.querySelector(".nav-mobile");
const body = document.querySelector("body, html");
const cancelBtn = document.querySelector(".icon-menu-cancel");
menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menuContent.classList.toggle("show-menu");
});
menuContent.addEventListener("click", function (e) {
    e.stopPropagation();
});
body.addEventListener("click", function (e) {
    menuContent.classList.remove("show-menu");
});
cancelBtn.addEventListener("click", function () {
    menuContent.classList.remove("show-menu");
});
///Mobile mode btn
const modeBtn = document.querySelector(".change-theme");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
        modeBtn.innerHTML = "Light";
    } else {
        modeBtn.innerHTML = "Dark";
    }
});
// active nav-item color
const navLinks = document.querySelectorAll(".header__navbar-right a");
const navLinksArr = Array.from(navLinks);
navLinksArr.forEach((navLink) => {
    navLink.onclick = (e) => {
        e.preventDefault();
        var eleHasActive = document.getElementsByClassName("active");
        if (eleHasActive.length != 0) eleHasActive[0].className = eleHasActive[0].className.replace("active", "");
        navLink.classList.add("active");
        navLink.parentElement.style.cursor = "pointer";
    };
});
