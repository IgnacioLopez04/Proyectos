const grande1 = document.querySelector('.grande_izq1');
const punto1  = document.querySelectorAll('.punto_izq1');

const grande_der2  = document.querySelector('.grande_der2')
const punto_der2  = document.querySelectorAll('.punto_der2')

const grande_izq3  = document.querySelector('.grande_izq3')
const punto_izq3  = document.querySelectorAll('.punto_izq3')

const grande_der4  = document.querySelector('.grande_der4')
const punto_der4  = document.querySelectorAll('.punto_der4')

punto1.forEach((cadaPunto, i) => {
    punto1[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -50;

        grande1.style.transform = `translateX(${operacion}%)`;

        asignarClase(i);
    })
})

function asignarClase(e){
    punto1.forEach((cadaPunto, i ) => {
        punto1[i].classList.remove('activo');
    })

    punto1[e].classList.add('activo');
}

//2

punto_der2.forEach((cadaPunto, i) => {
    punto_der2[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -50;

        grande_der2.style.transform = `translateX(${operacion}%)`;

        asignarClaseDer2(i);
    })
})

function asignarClaseDer2(e){
    punto_der2.forEach((cadaPunto, i ) => {
        punto_der2[i].classList.remove('activo');
    })

    punto_der2[e].classList.add('activo');
}

//3

punto_izq3.forEach((cadaPunto, i) => {
    punto_izq3[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -50;

        grande_izq3.style.transform = `translateX(${operacion}%)`;

        asignarClase3(i);
    })
})

function asignarClase3(e){
    punto_izq3.forEach((cadaPunto, i ) => {
        punto_izq3[i].classList.remove('activo');
    })

    punto_izq3[e].classList.add('activo');
}

//4

punto_der4.forEach((cadaPunto, i) => {
    punto_der4[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -50;

        grande_der4.style.transform = `translateX(${operacion}%)`;

        asignarClaseDer4(i);
    })
})

function asignarClaseDer4(e){
    punto_der4.forEach((cadaPunto, i ) => {
        punto_der4[i].classList.remove('activo');
    })

    punto_der4[e].classList.add('activo');
}
