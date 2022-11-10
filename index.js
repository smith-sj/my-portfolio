const mobileNav = document.querySelectorAll('.nav-link');
const checkBox = document.getElementById('mobile-menu-checkbox');

checkBox.addEventListener('change', (event) => {
    console.log("hi")
    if (event.currentTarget.checked) {
        for (i = 0; i < mobileNav.length; ++i) {
            mobileNav[i].style.display = "block"
            document.querySelector(".mobile-main-nav").style.top = "0"
        }
    } else {
        for (i = 0; i < mobileNav.length; ++i) {
            document.querySelector(".mobile-main-nav").style.top = "-400%"
            // mobileNav[i].style.display = "none"
        }
    }
});