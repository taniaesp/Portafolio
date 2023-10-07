/*
El DOM = document object model- modelo objeto del documento

Objeto en JavaScript, por lo tanto va a tener propiedades y comportamientos asociados
atributos y funciones.

Es en forma mas sencilla una variable en JS que va a traer una abstraccion de mi documento HTML

*/

const nombre = "Tania";
let edad = 24;
//tipo de cajon
//{}

const ScoobyDoo = {
    raza: "Gran Danés",
    noPatas: 4,
    puedeHablar: true,
    color: "cafe con manchas"
}

//no funciona ScoobyDoo = algo
ScoobyDoo.color = "cafe con manchas negras"

//Maneras de cominicarnos con el mundo

//alert('Hola bienvenido'); 
// console.log('Hola mundo');
//document.write('Hola mundo'+ nombre);

let titulo = document.getElementById('titulo');
console.log(titulo)

let objetoDeLabibliotecatypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecatypewriter
    .typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString(<h1 id="titulo" class="display-5 fw-bold text-body-emphasis">Desarrolladora Front-end</h1>)
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();