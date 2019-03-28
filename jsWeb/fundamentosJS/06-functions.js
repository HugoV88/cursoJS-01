/* 
==============================================================================================
FUNCIONES - Contenido
==============================================================================================
    1. Formas clásicas de definir una función.
    2. Declarar variables dentro de la función.
    3. Otra clase de funciones, IIFE. Que sirven para declarar y ejecutar la función instantáneamente.
*/

/* 
(1) Esta son las formas clásicas para definir funciones. La segunda forma es mejor
*/

function suma1(a, b) {
    return a + b;
}
let sumax;
sumax = suma1(6, 5);
console.log(sumax) // 11

const suma2 = function(a, b) {
    return a + b;
}
console.log(suma2(4, 7)); // 11

/* 
(2) Con esta forma de declarar se pueden ahorrar unas líneas y es más sencillo. El orden en como se colocan los argumentos 
importa.
*/

const suma3 = function(a = 5, b = 3) {
    return a + b;
}
console.log(suma3()); // Esta suma da 8 y se toman los valores iniciales
console.log(suma3(1, 2)) // Esta suma da 3 y sobreescribe a los valores definidos anteriormente
console.log(suma3(5)); // Esta suma da 8 y el único valor que se toma de esta línea es el 5 como a

const saludo1 = function(nombre = "Visitante") {
    return `Hola ${nombre}`;
}
console.log(saludo1("Hugo")); // Hola Hugo
console.log(saludo1()); // Hola Visitante

/* 
(3) Las funciones IIFE sirven para ejecutar la función al declararla
*/

(function() {
    console.log("Hola Mundo");
})(); // "Hola Mundo"

(function(nombre) {
    console.log(`Hola ${nombre}`);
})("Miguel"); // "Hola Miguel"