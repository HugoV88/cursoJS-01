/* 
==============================================================================================
CONTENIDO
==============================================================================================
    (1) Math.PI es una propiedad que representa la constante PI.
    (2) Math.round es un método para redondear el número a su más cercano.
    (3) Math.ceil es un método para redondear al siguiente número.
    (4) Math.floor es un método para redondear al número anterior.
    (5) toFixed es un método para definir el número de decimales del float.
    (6) Math.sqrt es un método para calcular la raíz cuadrada de un número.
    (7) Math.abs es un método para convertir en valor absoluto.
    (8) Math.pow es un método para calcular potencias.
    (9) Math.min y Math.max para el número mínimo y máximo en una secuencia de números.
    (10) Math.random genera un número aleatorio.
*/

/* 
==============================================================================================
MATH.PI
==============================================================================================
(1)
Math.PI Representa a la constante PI
*/
console.log("Constante PI presente en las longitudes de circunferencia");
console.log("Math.PI: ", Math.PI); //3.14159265...
console.log("\n");

/* 
==============================================================================================
MATH.ROUND
==============================================================================================
(2)
Math.round redondea el número a su más cercano
*/
console.log("El número ha sido redondeado a su más cercano");
console.log("Math.round: ", Math.round(2.5)); // 3
console.log("Math.round: ", Math.round(2.4)); // 2
console.log("\n");

/* 
==============================================================================================
MATH.CEIL
==============================================================================================
(3)
Math.ceil es un método para redondear a su siguienre número
*/

console.log("El número ha sido redondeado a su siguiente número");
console.log("Math.ceil: ", Math.ceil(2.1)); // 3
console.log("Math.ceil: ", Math.ceil(2.9)); // 3
console.log("\n");

/* 
==============================================================================================
MATH.FLOOR
==============================================================================================
(4)
Math.floor es un método para redondear al número anterior
*/

console.log("El número ha sido redondeado al número anterior");
console.log("Math.floor: ", Math.floor(2.1)); // 2
console.log("Math.floor: ", Math.floor(2.9)); // 2
console.log("\n");

/* 
==============================================================================================
TOFIXED
==============================================================================================
(5)
toFixed es un método para determinar el número de decimales de un float que devuelve el número en un string
*/
let decimal = 3.1231253573456234
console.log("Determinando el número de decimales");
console.log(decimal.toFixed(2));
console.log("\n");

/* 
==============================================================================================
MATH.SQRT
==============================================================================================
(6)
Math.sqrt es un método para calcular la raíz cuadrada
*/

console.log("Calculando la raíz cuadrada");
console.log("Math.sqrt: ", Math.sqrt(10)); // 3
console.log("\n");

/* 
==============================================================================================
MATH.ABS
==============================================================================================
(7)
Math.abs es un método para convertir en valor absoluto el valor
*/

console.log("Calculando el valor absoluto de un número negativo");
console.log("Math.abs: ", Math.abs(-3));
console.log("\n");
/* 
==============================================================================================
MATH.POW
==============================================================================================
(8)
Math.pow es un método para calcular potencias
*/

console.log("Calculando el valor de una potencia");
console.log("Math.pow: ", Math.pow(8, 3));
console.log("\n");

/* 
==============================================================================================
Math.MIN Y Math.MAX 
==============================================================================================
(9)
Math.min y Math.max para determinar el número mínimo y máximo de una secuencia de números
*/

console.log("Números mínimos y máximos");
console.log("Math.min: ", Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log("Math.max: ", Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log("\n");

/* 
==============================================================================================
MATH.RANDOM
==============================================================================================
(10)
Math.random genera básicamente un número aleatorio entre 0 y 1, pero si se configura los parámetros
Math.random() * (max-min))+min)
*/

console.log("Generando un número aleatorio entre 2 y 8");
console.log("Math.random: ", (Math.random() * (8 - 2)) + 2);
console.log("\n");

/* IMPORTANTE! Todos los números estan siendo devueltos en cadenas, porque te imprimen con cadenas. En el 
caso de toFixed siempre devuelve una cadena*/