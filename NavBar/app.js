const menu = document.querySelector(".menu");
menu.addEventListener("click", ()=>{
    const nav = document.querySelector(".nav");
    nav.classList.toggle("show-nav");
    const list = document.querySelector(".links");
    list.classList.toggle("show-links");
    menu.classList.toggle("rotate-menu");
} )

