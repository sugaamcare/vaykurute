document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeBtn = document.getElementById("close-btn");

    hamburgerMenu.addEventListener("click", function() {
        mobileNav.classList.add("show");
    });

    closeBtn.addEventListener("click", function() {
        mobileNav.classList.remove("show");
    });
});
