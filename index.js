const menueBackground = document.getElementById("main_menu_background");

function isMobile() {
    return window.innerWidth <= 414 || /Android|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

function updateMenuWidth() {
    const width = window.innerWidth;
        menuBackground.style.width = window.innerWidth + "px";
    }

if (isMobile()) {
    updateMenuWidth();
    window.addEventListener("resize", updateMenuWidth);
    console.log("Mobile mode activated!");
}
else{
    console.log("I am on a computer");
}
