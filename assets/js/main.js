import menuLateralInit from "./lateralMenu.js";
import scrollToTopInit from "./scrollToTop.js";
import carrosselInit from "./carrossel.js";
import linksInternosInit from "./linksInternos.js"
import animaScrollInit from "./animaScroll.js";
import loadingInit from "./loading.js";

document.addEventListener("DOMContentLoaded", function() {
    menuLateralInit();
    scrollToTopInit();
    carrosselInit();
    linksInternosInit();
    animaScrollInit();
    loadingInit();
});