// dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener("change", function (e) {
    if (e.target.checked) {
        document.body.classList.add("darkMode");
        document.body.classList.remove("lightMode");
        localStorage.setItem("theme", "darkMode");
        modeBtn.innerHTML = "Light";
    } else {
        document.body.classList.remove("darkMode");
        document.body.classList.add("lightMode");
        localStorage.setItem("theme", "lightMode");
        modeBtn.innerHTML = "Dark";
    }
});
const currentTheme = localStorage.getItem("theme");
document.body.classList.add(currentTheme);
if (currentTheme === "darkMode") toggleSwitch.checked = true;

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
        localStorage.setItem("theme", "darkMode");
        document.body.classList.remove("lightMode");
        modeBtn.innerHTML = "Light";
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem("theme", "lightMode");
        document.body.classList.add("lightMode");
        modeBtn.innerHTML = "Dark";
        toggleSwitch.checked = false;
    }
});
const currentMobileTheme = localStorage.getItem("theme");
if (currentMobileTheme === "darkMode") modeBtn.innerHTML = "Light";
else modeBtn.innerHTML = "Dark";
// **active nav-item color**
const liItemRights = document.getElementsByClassName("header__navbar-item");
liItemsRightArr = Array.from(liItemRights);
//use localstorage để giữ tài nguyên khi load page

// localStorage.setItem("activeItem", "nothing");
// window.onload = () => {
//     liItemsRightArr.forEach((liItem) => {
//         liItem.classList.remove("active");
//     });
// };
function handleActiveColor() {
    // liItemsRightArr.forEach((liItem) => {
    //     liItem.onclick = (e) => {
    //         // e.preventDefault();
    //         localStorage.setItem("activeItem", liItem.id);
    //         liItemsRightArr.forEach((item) => {
    //             item.classList.remove("active");
    //         });
    //         liItem.classList.add("active");
    //         liItem.style.cursor = "pointer";
    //     };
    // });
    var url = window.location.href;
    liItemsRightArr.forEach((liItem) => {
        itemLink = liItem.querySelector("a");
        if (url === itemLink.href + "/") {
            liItem.classList.add("active");
        } else {
            liItem.classList.remove("active");
        }
    });
}
handleActiveColor();
// var currentActiveItem = localStorage.getItem("activeItem");
// // console.log(currentActiveItem);
// if (currentActiveItem) {
//     var elementAct = document.querySelector(`#${currentActiveItem}`);
//     if (elementAct) {
//         // console.log(elementAct);
//         elementAct.classList.add("active");
//     }
// }

let navRightItem = document.querySelector(".header__navbar-left");
// console.log(navRightItem);
navRightItem.onclick = (e) => {
    liItemsRightArr.forEach((item) => {
        item.classList.remove("active");
    });
    // localStorage.setItem("activeItem", "nothing");
};

/*Hide loader */
function hideLoader() {
    loaderElement = document.querySelector(".loader-wrapper");
    window.onload = function () {
        // loaderElement.classList.add("hideLoader");
        setTimeout(() => {
            loaderElement.style.display = "none";
        }, 1000);
    };
    // setTimeout(() => {
    //     loaderElement.classList.add("hideLoader");
    //     loaderElement.style.display = "none";
    // }, 1500);
}
hideLoader();
