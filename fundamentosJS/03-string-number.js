/* 
==============================================================================================
CONTENIDO
==============================================================================================
    (1) Cambiar de string a number
    (2) Cambiar de number a string
*/

let strinn = "10"
let nomber = 123124

/* 
==============================================================================================
CAMBIAR DE STRING A NUMBER
==============================================================================================
(1)
Solo se pueden cambiar cuando el string tiene números adentro y solo números
*/
console.log(Number(strinn)); // Convierte la cadena en número
console.log(parseInt(strinn)); // Convierte la cadena o número decimal en número entero
console.log(parseFloat(strinn)); //Convierte la cadena en un número, y si la cadena contiene un decimal lo mantiene
console.log(Number("a123")) // NaN

/* 
==============================================================================================
CAMBIAR DE NUMBER A STRING
==============================================================================================
(2)
Estos métodos funcionan con números, arreglos, objetos y booleanos. No funciona con null, NaN y undefined
*/
console.log(String(nomber));
console.log(nomber.toString());