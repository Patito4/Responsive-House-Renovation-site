import { header, hamburgerIcon, mobileNavigation } from "./app.js";

function enableFixedNavigationBar() {
    if (window.scrollY >= 49) {
        header.classList.add("header-box-shadow");
    } else {
        header.classList.remove("header-box-shadow");
    }

    if (window.scrollY >= 31) {
        header.classList.add("fixed-nav-bar");
    } else {
        header.classList.remove("fixed-nav-bar");
    }

    if (window.scrollY >= 49) {
        header.classList.add("res-fixed-nav-bar");
    } else {
        header.classList.remove("res-fixed-nav-bar");
    }
}
function showMobileNavigation() {
    hamburgerIcon.classList.toggle("active");
    mobileNavigation.classList.toggle("show-mobile-navigation");
    document.body.classList.toggle("prevent-scrolling");
    header.classList.toggle("hamburger-menu-blur-effect");
}
function hideMobileNavigation() {
    hamburgerIcon.classList.remove("active");
    mobileNavigation.classList.remove("show-mobile-navigation");
    document.body.classList.remove("prevent-scrolling");
    header.classList.remove("hamburger-menu-blur-effect");
}

export { enableFixedNavigationBar, showMobileNavigation, hideMobileNavigation };