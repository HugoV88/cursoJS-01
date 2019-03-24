/* 
==============================================================================================
Contenido
==============================================================================================
    (1) length propiedad para determinar el número de carácteres en un string.
    (2) indexOf método para determinar la ubicación del carácter o cadena por medio de índices.
    (3) slice método para recortar y devolver cierto número de carácteres de un índice a otro.
    Hay otro método similar que se llama substring pero no admite número negativos
    (4) split método para separar una cadena en un arreglo con el carácter o string que se coloque.
    (5) replace método para reemplazar una cadena o caracter a otra cadena o caracter.
    (6) includes método para detectar si el carácter o cadena existe y responde en booleano.
    (7) repeat método para repetir una variable de cadena.
*/


/* Variable que contiene el string principal con el que vamos a trabajar */
let cadena01 = "Me siento cansado esta mañana porque mañana estaré más cansado";

/* 
==============================================================================================
LENGTH
==============================================================================================
(1) 
length es una propiedad para retornar el número de carácteres de un string 
*/
let long = cadena01.length;
console.log("length: Utilizando length el largo de la cadena introducida es:")
console.log(long); // Return 62
console.log("\n");

/* 
============================================================================================== 
INDEXOF
==============================================================================================
(2)
indexOf es un método para ubicar el índice del carácter o string 
*/
let indof = cadena01.indexOf('M')
console.log("indexOf: Utilizando indexOf el carácter introducido se en cuentra en la posición índice:");
console.log(indof); // Return 0
console.log("\n");

/*
(2)
string.indexOf(searchElement [, fromInndex]) para saber diferentes posiciones de múltiples carácteres 
*/
let cadena02 = "vaca loca vaca loca vaca loca";

console.log("indexOf: Encontrando los diferentes índices de 'vaca'");
console.log(cadena02.indexOf("vaca")); // Return 0
console.log(cadena02.indexOf("vaca", cadena02.indexOf("vaca") + 1)); // Return 10
console.log(cadena02.indexOf("vaca", cadena02.indexOf("vaca", cadena02.indexOf("vaca") + 1) + 1)); // Return 20
console.log("\n");

/*
(2)
 Creando una función para encontrar el número de carácteres o strings dentro de una cadena01 con indexOf
 */
let finde = (palabra) => {
    let index = [];

    let finder = cadena01.indexOf(palabra)

    while (finder != -1) {
        index.push(finder);

        finder = cadena01.indexOf(palabra, finder + 1);
    }

    console.log(index);
}

console.log("indexOf: La palabra introducida se encuentra en las siguientes posiciones");
finde("cansado"); // [10, 55]

/* 
============================================================================================== 
SLICE
==============================================================================================
(3)
slice es un método para recortar y devolver un número de carácteres de un índice a otro
cadena.substring(indiceA[, indiceB])
*/
console.log("slice: Recorta la cadena de un índice a otro");
console.log(cadena01.slice(4, 25)); // Return "siento cansado esta ma"
console.log("\n");

/* Admite números negativos, y si se coloca un negativo en el indiceA y el índiceB es positivo
recorta de atras para adelante  */

/* 
==============================================================================================
SPLIT
==============================================================================================
(4)
split es un método para separar carácters o strings en una cadena de texto a un arreglo
*/
console.log("split: recorte la cadena de texto en los espacios y crea un arreglo");
console.log(cadena01.split(" ")); // Separa la cadena por cada espacio y lo mete en un arreglo
console.log("\n");

/* 
==============================================================================================
REPLACE
==============================================================================================
(5)
replace es un método para reemplaza un carácter o string en un carácter o string
cadena.replace(cadenaA [, cadenaB])
*/
console.log("replace: solo se reemplaza el primer elemento pero el segundo no");
console.log(cadena01.replace("cansado", "energico"));
/* Para poder cambiar todos los elementos que se repiten se deben utilizar flags:  
g - emparejamiento global, i - ignorar mayúsculas, m - emparejar multiples líneas */
console.log("replace: se reemplazan todos los elementos que se repiten");
console.log(cadena01.replace(/cansado/gi, "energico"));
console.log("\n");

/* 
==============================================================================================
INCLUDES
==============================================================================================
(6)
includes es un método para detectar de forma booleana si el carácter o string existe en la cadena
*/
console.log("includes: El carácter o string introducido true si existe y false si no existe");
console.log(cadena01.includes("cansado"));
console.log("\n");

/* 
==============================================================================================
REPEAT
==============================================================================================
(7)
repeat es un método para repetir una variable de tipo cadena
*/
console.log("repeat: Se repite todo el texto dos veces");
console.log(cadena01.repeat(2));
console.log("\n");