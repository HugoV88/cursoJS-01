/* 
==============================================================================================
ARREGLOS - Contenido
==============================================================================================
    1. Formas de declaraciones de los arreglos.
    2. length propiedad para determinar el número de índices de un arreglo.
    3. Array.isArray(); es un método para comprobar en booleano si es un arreglo. 
    4. push(); es un método para agregar uno o mas elementos al final del arreglo. Tener en cuenta que si el ".push" se
guarda en una variable, ésta contendrá el length final del arreglo modificado.
    5. indexOf(valor[, desde el index]); es un método para buscar en el arreglo por sus valores y devuelve su índice. En 
caso de no encontrar resultados devolverá un -1. El primer argumento sería el valor que se desea buscar y el segundo 
argumento sería el índice a partir de donde se quiere buscar.
    6. unshift(); es un método para agregar uno o mas elementos al inicio del arreglo.
    7. pop(); elimina el último elemento de un arreglo
    8. shift(); elimina el primer elemento de un arreglo
    9. splice(index[, número de elementos]) es un método que a partir del index elimina uno o mas elementos. El número de
elementos a eliminar lo determina la segunda propiedad. El valor de retorno serán los elementos eliminados.
    10. reverse(); es un método para revertir el orden de un arreglo.
    11. arreglo1.concat(arreglo2) es un método para unir dos arreglos.
    12. sort(); es un método para ordenar los valores del arreglo. Los arregla alfabeticamente y por número. Aunque por 
número sucede algo extraño y hay que crear una función para que trabaje correctamente. Tanto el arreglo original como
el retorno obtienen el mismo valor.
*/

/* 
==============================================================================================
FORMA DE DECLARACIONES
==============================================================================================
(1)
Se puede declara de estas dos formas
*/
let arreglo01 = [1, 2, 3, 4, 5];
let arreglo02 = new Array(1, 2, 3, 4, 5);

console.log(arreglo01); // [1, 2, 3, 4, 5]
console.log(arreglo02); // [1, 2, 3, 4, 5]

/* 
==============================================================================================
LENGTH
==============================================================================================
(2)
La propiedad length nos indica el número de índices de un arreglo.
*/
let largo = arreglo01.length;

console.log(largo); // 5

/* 
==============================================================================================
ARRAY.ISARRAY
==============================================================================================
(3)
Este método Array.isArray(); comprueba si es un array y responde en booleano
*/
let nombre = "Juan";

console.log(Array.isArray(arreglo01)); // true
console.log(Array.isArray(nombre)); // false

/* 
==============================================================================================
PUSH
(4)
push es un método que agrega uno o más elementos al final del arreglo. Tener en cuenta que si el ".push" se guarda en una
variable, ésta guardará el length final del arreglo modificado.
*/
let result = arreglo01.push(100);
console.log(arreglo01); // [1, 2, 3, 4, 5, 100]
console.log(result); // 6

/* 
==============================================================================================
INDEXOF
==============================================================================================
(5)
indexOf(valor[, desde el index ]); es un método para buscar con un valor el índice en el arreglo. El primer argumento se
colocaría el valor y en el segundo el índice a partir de donde se quiere buscar. Si no encuentra resultados retornará -1.
*/
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "enero"];

console.log(meses.indexOf("enero")); // 0
console.log(meses.indexOf("enero", 1)); // 5 

/* 
==============================================================================================
UNSHIFT
==============================================================================================
(6)
unshift(); es un método para añadir elementos al inicio del arreglo.
*/
let result2 = arreglo01.unshift(101);
console.log(arreglo01); // [101, 1, 2, 3, 4, 5, 100]
console.log(result2); // 7

/* 
==============================================================================================
POP
==============================================================================================
(7)
pop(); elmina el último elemento de un arreglo y guarda en su variable el elemento eliminado.
*/
let result3 = arreglo01.pop();
console.log(arreglo01); // [101, 1, 2, 3, 4, 5]
console.log(result3); // 100

/* 
==============================================================================================
SHIFT
==============================================================================================
(8)
shift(); elimina el primer elemento de un arreglo y guarda en su variable el elemento eliminado
*/
let result4 = arreglo01.shift();
console.log(arreglo01); // [1, 2 ,3 ,4, 5]
console.log(result4); // 101

/* 
==============================================================================================
SPLICE
==============================================================================================
(9)
splice(index[, número de elemento]); es un método que elimina según el index y el número de elementos que se eliminará.
La variable que retorna serán el o los elementos eliminados.
*/
meses; // ["enero", "febrero", "marzo", "abril", "mayo", "enero"];
let result5 = meses.splice(3, 2);
console.log(meses); // ["enero", "febrero", "marzo", "enero"]
console.log(result5); // ["abril", "mayo"]

/* 
==============================================================================================
REVERSE
==============================================================================================
(10)
reverse(); es un método para revertir el orden de un arreglo
*/
arreglo01; // [1, 2 ,3 ,4, 5]
console.log(arreglo01.reverse()); // [5, 4, ,3, 2, 1]

/* 
==============================================================================================
CONCAT
==============================================================================================
(11)
arreglo1.concat(arreglo2); es un método para unir dos arreglos
*/
meses; // ["enero", "febrero", "marzo", "enero"]
result5; // ["abril", "mayo"]
console.log(meses.concat(result5)); // ["enero", "febrero", "marzo", "enero", "abril", "mayo"]

/* 
==============================================================================================
SORT
==============================================================================================
(12)
sort(); es un método que ordena alfabeticamente y por número. Por este último sucede algo muy extraño.
*/
let desorden = [46, 1, 3, 24, 10, 36]
let result6 = desorden.sort()
console.log(result6); // [1, 10, 24, 3, 36, 46] Sigue desordenado
console.log(desorden); // Tanto el retorno como el arreglo se modifican igual
desorden.sort((x, y) => x - y);
console.log(desorden); // [1, 3, 10, 24, 36, 46]