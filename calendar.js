const menuBackground = document.getElementById("calendar_main_menu_background");

function isMobile() {
    return window.innerWidth <= 414 || /Android|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

function updateMenuWidth() {
    // Always match element width to window width
    menuBackground.style.width = window.innerWidth + "px";
    console.log(menuBackground.width);
}

// Run once when the page loads
updateMenuWidth();

// Run whenever the window is resized
window.addEventListener("resize", updateMenuWidth);

// Debug logging
if (isMobile()) {
    console.log("Mobile mode activated!");
} else {
    console.log("I am on a computer!!!!");
}