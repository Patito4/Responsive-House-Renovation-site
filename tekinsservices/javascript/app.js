import animateHeroText from "./hero-bar.js";
import displayCurrentYear from "./display-script.js";
import { enableFixedNavigationBar, showMobileNavigation, hideMobileNavigation } from "./script.js";

const header = document.querySelector("header"),
hamburgerIcon = document.querySelector(".hamburger-menu"),
mobileNavigation = document.querySelector(".responsive-nav-list"),
currentYear = document.querySelector(".current-year");


(function loadAllEventListners() {
    const hamburgerMenu = document.querySelectorAll(".responsive-nav-list-items");

    document.addEventListener("DOMContentLoaded", animateHeroText);
    document.addEventListener("DOMContentLoaded", displayCurrentYear);
    document.addEventListener("scroll", enableFixedNavigationBar);
    hamburgerIcon.addEventListener("click", showMobileNavigation);
    hamburgerMenu.forEach(current => {
        current.addEventListener("click", hideMobileNavigation);
    });
}) ();

export { header, hamburgerIcon, mobileNavigation, currentYear };