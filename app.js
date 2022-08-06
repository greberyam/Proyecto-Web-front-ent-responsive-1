window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");

    if(scroll > 20){
        header.classList.add("navWhileScrolling")

    }
    else if( scroll < 20){
        header.classList.remove("navWhileScrolling")
    }
}
menu = document.getElementById("header")
body = document.getElementById("container_all")
nav = document.getElementById("nav")

document.getElementById("btn__menu").addEventListener('click', displayMenu)

function displayMenu(){

    menu.classList.toggle('move_content')
    body.classList.toggle('move_content')
    nav.classList.toggle('move__nav')
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        menu.classList.remove('move_content')
    body.classList.remove('move_content')
    nav.classList.remove('move__nav')

    }
})

