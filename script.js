var animation = document.getElementsByClassName("js")
window.onscroll = function(){
    for (let i = 0; i < animation.length; i++){
        var topElm = animation[i].offsetTop;
        var bottomElm = animation[i].offsetTop + animation[i].clientHeight;
        var topscreen = window.pageYOffset;
        var bottomscreen = window.pageYOffset  + window.innerHeight;
        if (bottomscreen > topElm && topscreen < bottomElm){
            animation[i].classList.add("animation-opcity");
        }
        else{
            animation[i].classList.remove("animation-opcity")
        }
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Optional: change ☰ to ✖ when open
            menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
        });
    }
});