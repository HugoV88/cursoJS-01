/* 
==============================================================================================
TRYCATCH - Contenido
==============================================================================================
    1. Esta modalidad se utiliza para que las funciones ejecuten el código a pesar de que tenga errores. En el try se 
utiliza el posible error, y en el catch se puede imprimir el error o colocar alguna funcionalidad diferente. Ademas se 
le puede agregar finally que no le importará el resultado del try-catch y se ejecutará.
 */

try {
    arreglo01();
} catch (err) {
    console.log(err); // error
} finally {
    console.log("No me importa nada y me ejecuto"); // "No me importa nada y me ejecuto"
}
console.log("===========================================");
try {
    arreglo01();
} catch (err) {
    console.log("No quiero errores"); // "No quiero errores"
} finally {
    console.log("No me importa nada y me ejecuto"); // "No me importa nada y me ejecuto"
}