/* 
==============================================================================================
ITERACIONES AVANZADAS
==============================================================================================
    1. Iteracciones para arreglos
    2. Iteraciones para objetos.
    3. Iteraciones para arreglos con objetos.
    4. Iteraciones en string se aplica las propiedades de los arreglos.
*/

/* 
==============================================================================================
ARREGLOS
==============================================================================================
*/
let arreglo = [10, 20, 30, 40, 50, 60];

/* Forma clásica para arreglos */
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

for (let i in arreglo) {
    console.log(i); // Imprime el índice del arreglo
    console.log(arreglo); // Imprime el valor del arreglo
}

/* Recorrer arreglos por forEach */
arreglo.forEach((valor, indice) => {
    console.log(indice); // Imrpime el índice del arreglo
    console.log(valor); // Imprime el valor del arreglo
});

/* El for..of combinado con llaves da lo siguientes resultados*/
for (let i of arreglo.entries()) {
    console.log(i); // Imprime de la siguiente forma: [índice, valor]
}
for (let i of arreglo.values()) {
    console.log(i); // Imprime los valores del arreglo
}
for (let i of arreglo.keys()) {
    console.log(i); // Imprime los índices del arreglo
}
for (let i of arreglo) {
    console.log(i); // Este es el default, y por default es como si tuviera values e imprime los valores
}

/* 
==============================================================================================
OBJETOS
==============================================================================================
*/
let objeto = {
    nombre: "Hugo",
    apellido: "Vargas",
    sexo: "M",
    edad: 30
}

for (let i in objeto) {
    console.log(i); // Imprime la propiedad
    console.log(objeto[i]); // Imprime el valor de la propiedad
}

/* 
==============================================================================================
ARREGLOS DE OBJETOS
==============================================================================================
*/
let carrito = [
    { id: 1, producto: "libro" },
    { id: 2, producto: "guitarra" },
    { id: 3, producto: "camisa" },
    { id: 4, producto: "computadora" }
]

/* Iteración por medio de map */
const impreso = carrito.map((valor) => {
    console.log(valor.id); // 1 2 3 4 etc 
    console.log(valor.producto); // libro guitarra camisa computadora etc
});
for (let i of carrito.entries()) {
    console.log(i); // [ 0, { id: 1, producto: "libro" } ]   [ 1, { id: 2, producto: "guitarra" } ] ...
    console.log(i[0]); // 0 1 2 3
    console.log(i[1].id); // 1 2 3 4
    console.log(i[1].producto); // libro guitarra camisa computadora
}
for (let i of carrito.values()) {
    console.log(i); // { id: 1, producto: "libro" }  { id: 2, producto: "guitarra" } ...
}
for (let i of carrito.keys()) {
    console.log(i); // 0 1 2 3 
}