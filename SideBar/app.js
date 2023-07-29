const menu = document.querySelector(".menu");
menu.addEventListener("click", ()=>{
    const nav = document.querySelector(".nav");
    nav.classList.toggle("show-nav");
    const list = document.querySelector(".links");
    list.classList.toggle("show");
    const media = document.querySelector(".social-media");
    media.classList.toggle("show");
    menu.classList.toggle("rotate-menu");
} )

