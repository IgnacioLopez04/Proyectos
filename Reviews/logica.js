const personas = [
    {
        id: 1,
        nombre: "Jorge Perez",
        trabajo: "FrontEnd",
        imagen: "./Imagenes/persona-1.jpg",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur aspernatur odio vel cumque veritatis nisi voluptatibus voluptatum illo nihil similique."
    },
    {
        id: 2,
        nombre: "Juana Roman",
        trabajo: "UX/UI",
        imagen: "./Imagenes/persona-2.jpg",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos iusto, autem fugit in nam placeat dicta doloribus modi ea, eligendi neque quas doloremque cumque amet qui illo minima excepturi quasi."
    },
    {
        id: 3,
        nombre: "Juan Lovera",
        trabajo: "BackEnd",
        imagen: "./Imagenes/persona-3.jpg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione corporis eius eaque mollitia assumenda omnis, vitae ea dolor autem delectus explicabo recusandae. Illo libero maxime iste dolores consequatur optio vero?"
    }
]

let contador = 0;

const btnSig = document.querySelector(".btn-sig");
btnSig.addEventListener("click", ()=>{
    let persona = document.querySelector(".nombre");

    if(persona.value != 3){
        contador++
    }else if( persona.value == 3){
        contador = 0;
    }
    establecerValores(contador);
})

const btnPrev = document.querySelector(".btn-prev");
btnPrev.addEventListener("click", ()=>{
    let persona = document.querySelector(".nombre");

    if(persona.value != 1){
        contador--;
    }else if( persona.value == 1){
        contador = 2;
    }
    establecerValores(contador);
})

const random = document.querySelector(".boton-random");
random.addEventListener("click", ()=>{
    let nroRandom = Math.floor(Math.random() * personas.length);
    establecerValores(nroRandom);
})

function establecerValores(nro){
    let persona = document.querySelector(".nombre");
    persona.value = personas[nro].id;
    persona.textContent = personas[nro].nombre;

    let trabajo = document.querySelector(".trabajo");
    trabajo.textContent = personas[nro].trabajo;

    let descripcionTrabajo = document.querySelector(".descripcion-trabajo");
    descripcionTrabajo.textContent = personas[nro].descripcion;

    let imag =  document.querySelector(".persona-img");
    imag.src = personas[nro].imagen;
}