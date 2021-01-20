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
