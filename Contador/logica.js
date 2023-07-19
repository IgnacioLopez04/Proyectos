const botonIzq = document.getElementById("boton-izq");
botonIzq.addEventListener("click", ()=>{
    let contador = document.getElementById("contador");
    let resta = parseInt(contador.textContent) - 1;
    contador.textContent = resta;

    if(resta < 0){
        contador.classList.add("negativo");
    }else if(resta == 0){
        contador.classList.remove("positivo");
    }
})

const reiniciar = document.getElementById("boton-reiniciar");
reiniciar.addEventListener("click", ()=>{
    let contador = document.getElementById("contador");
    contador.textContent = 0;
    contador.classList.remove("negativo");
    contador.classList.remove("positivo");
})

const botonDer = document.getElementById("boton-der");
botonDer.addEventListener("click", ()=>{
    let contador = document.getElementById("contador");
    suma = parseInt(contador.textContent) + 1;
    contador.textContent = suma;

    if(suma > 0){
        contador.classList.add("positivo");
    }else if(suma == 0){
        contador.classList.remove("negativo");
    }
})