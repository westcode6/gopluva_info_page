
let overlayEl = document.getElementById("overlay-el");
let sidebarEl = document.getElementById("sidebar-btn");
function showSideNav() {
overlayEl.classList.toggle("hidden")

sidebarEl.textContent = "x";

}

function closeSideNav() {
overlayEl.classList.toggle("hidden")
sidebarEl.textContent = "=";


}

function navFunc() {
sidebarEl.textContent = "=";

}