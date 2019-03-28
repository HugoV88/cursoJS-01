/* 
==============================================================================================
Contenido
==============================================================================================
    (1) length propiedad para determinar el número de carácteres en un string.
    (2) indexOf(valor[, indice desde]); método para determinar la ubicación del carácter o cadena por medio de índices.
    (3) slice(inicio[, fin]); método para recortar y devolver número de carácteres de un índice a otro por índices.
    Hay otro método similar que se llama substring pero no admite número negativos
    (4) split(); método para separar una cadena en un arreglo con el carácter o string que se coloque.
    (5) replace(); método para reemplazar una cadena o caracter a otra cadena o caracter. Este método tiene flags para 
maximizar su función:  g - emparejamiento global, i - ignorar mayúsculas, m - emparejar multiples líneas. 
    (6) includes(búsqueda[, posición]); método para detectar si el carácter o cadena existe y responde en booleano.
    (7) repeat(); método para repetir una variable de cadena.
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
console.log(long); // Return 62

/* 
============================================================================================== 
INDEXOF
==============================================================================================
(2)
indexOf(valor[, indice desde]); es un método para ubicar el índice del carácter o string 
*/
cadena01; //  "Me siento cansado esta mañana porque mañana estaré más cansado"
let index = cadena01.indexOf("cansado")
console.log(index); // 10 *Encuentra la primera palabra, pero se puede conseguir todas las palabras con una función 
let buscador = () => {
    let inicio = [];

    while (index != -1) {
        inicio.push(index);

        index = cadena01.indexOf("cansado", index + 1);
    }

    return inicio;
}
console.log(buscador()); // [10, 55]

/* 
==============================================================================================
SLICE
==============================================================================================
(3)
slice(inicio[, fin]); es un método para recortar trozos de cadena de un índice inicial a otro final.
*/
cadena01; //  "Me siento cansado esta mañana porque mañana estaré más cansado"
let result1 = cadena01.slice(4, 20);
console.log(result1); // "iento cansado es"

/* 
==============================================================================================
SPLIT
==============================================================================================
(4)
split("valor separador") método que se utiliza para separar palabras por medio del valor y expresarlo en un arreglo.
*/
cadena01; //  "Me siento cansado esta mañana porque mañana estaré más cansado"
let result2 = cadena01.split(" ");
console.log(result2); // ["Me", "siento", "cansado", "esta", "mañana", "porque", ...]

/* 
==============================================================================================
REPLACE
==============================================================================================
(5)
replace(original[, reemplazo]) método para reemplazar cadenas o carácteres en una variable string
*/
cadena01; //  "Me siento cansado esta mañana porque mañana estaré más cansado"
let result3 = cadena01.replace(/cansado/gi, "enérgico"); // Se le coloca flags para que tome todos los valores
console.log(result3); //  "Me siento enérgico esta mañana porque mañana estaré más enérgico"

/* 
==============================================================================================
INCLUDES
==============================================================================================
(6)
includes(búsqueda[, posición]); es un método para comprobar si existe palabra o carácter
*/
cadena01; //  "Me siento cansado esta mañana porque mañana estaré más cansado"
let result4 = cadena01.includes("cansado");
console.log(result4); // true
let result5 = cadena01.includes("enérgico");
console.log(result5); // false

/* 
==============================================================================================
REPEAT
==============================================================================================
(7)
repeat(); es un método para repetir una cadena o carácter
*/
cadena01; //  "Me siento cansado esta mañana porque mañana estaré más cansado"
let result6 = cadena01.repeat(3);
console.log(result6); // "Me siento cansado esta mañana porque mañana estaré más cansadoMe siento cansado esta ma..."