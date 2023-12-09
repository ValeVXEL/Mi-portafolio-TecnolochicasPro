/*
Javascript es un lenguaje de programación debil que corre en el navegador
*/
/* Variable */
/* Elegir el tipo de cajita
    let: Son cajitas que les podemos cambiar la estructura
    const: Son cajitas que no les podemos cambiar la estructura

*/

const nombre="Valeria Ek Lavadores";
/* console.log(nombre); para poder llegar alerta en la consola*/
document.write(nombre);
console.log(document.getElementById('titulo'));
let elementHTMLtitulo= document.getElementById('titulo');
/*let titulo = document.getElementById('titulo');  */ 

let elementoDetypewriter = new Typewriter(elementHTMLtitulo, {
    loop: true
});

elementoDetypewriter.typeString('Valeria Ek Lavadores')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Web')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Estudiante de Ingeniería Mecatrónica')
    .pauseFor(2500)
    .start();