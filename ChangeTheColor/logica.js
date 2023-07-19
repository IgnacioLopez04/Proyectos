const boton = document.getElementById("button");
boton.addEventListener("click", ()=>{
    let numero = "";
    const caracteresHexadecimales = "0123456789ABCDEF";

    for(let i = 0; i < 6; i++){
        const indice = Math.floor(Math.random() * caracteresHexadecimales.length);

        numero += caracteresHexadecimales.charAt(indice);
    }

    const color = document.getElementById("color");
    color.textContent = `#${numero}`;

    const body = document.querySelector("body");
    body.style.backgroundColor = `#${numero}`;
})