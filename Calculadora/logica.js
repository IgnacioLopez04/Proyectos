let num1 = "";
let num2 = "";
let signo = "";
let bandera = false;
let resultado = 0;

const botones = document.querySelectorAll(".botones");
botones.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        if(boton.textContent != "+" && boton.textContent != "-" && boton.textContent != "/" && boton.textContent != "*" && !bandera){
            num1 += boton.textContent;
        }else if(boton.textContent == "+" || boton.textContent == "-" || boton.textContent == "/" || boton.textContent == "*" || !bandera){
            signo = boton.textContent;
            if(bandera == false){
                bandera = true;
            } 
        }else{
            num2 += boton.textContent;
        }
        let pantalla = document.getElementById("pantalla");
        pantalla.innerHTML += boton.textContent;
    })
})

const btnIgual = document.getElementById("igual");
btnIgual.addEventListener("click", ()=>{
    if(signo == "+"){
        resultado = Calculadora.suma(parseFloat(num1), parseFloat(num2));
    }else if(signo == "-"){
        resultado = Calculadora.resta(parseFloat(num1), parseFloat(num2));
    }else if(signo == "*"){
        resultado = Calculadora.multiplicar(parseFloat(num1), parseFloat(num2));
    }else{
        resultado = Calculadora.dividir(parseFloat(num1), parseFloat(num2));
    }

    let pantalla = document.getElementById("pantalla");
    pantalla.innerHTML = "";
    pantalla.innerHTML = resultado;
    
    num1 = resultado;
    num2 = "";
    signo = "";
    bandera = false;
})

const borrar = document.getElementById("borrar");
borrar.addEventListener("click", ()=>{
    if(!bandera){
        let num = num1.split("");
        num.pop();
        num1 = num.join("");
    }else{
        let num = num2.split("");
        num.pop();
        num2 = num.join("");
    }

    let pantalla = document.getElementById("pantalla");
    let pant = pantalla.textContent.split("");
    pant.pop();
    pantalla.textContent = pant.join("");
})

const eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", ()=>{
    let pantalla = document.getElementById("pantalla");
    pantalla.textContent = "";
    num1 = "";
    num2 = "";
    signo = "";
    resultado = 0;
    bandera = false;
})