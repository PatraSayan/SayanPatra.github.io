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
