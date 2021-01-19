const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");
});
