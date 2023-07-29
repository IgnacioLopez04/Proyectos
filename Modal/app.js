const btn = document.querySelector(".btn-modal");
btn.addEventListener("click", ()=>{
    const modal = document.querySelector(".contenedor-modal");
    modal.classList.add("show-modal");
    const body = document.querySelector("body");
    body.classList.add("show-background");
})

const cross = document.querySelector(".cross");
cross.addEventListener("click", ()=>{
    const modal = document.querySelector(".contenedor-modal");
    modal.classList.remove("show-modal");
    const body = document.querySelector("body");
    body.classList.remove("show-background");
})