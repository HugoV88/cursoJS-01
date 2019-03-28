/* 
==============================================================================================
FECHAS - Contenido
==============================================================================================
    1. El tema de las fechas es sumamente extenso. Empezaremos entiendo la función Date();
    2. Para imprimir otra fecha se puede modificar con el argumento de la función Date();
    3. Para obtener fechas más detalladas como año, mes, día, hora, segunds y etc.
    4. Para agregar una nueva fecha y diferente a la actual a una variable, se utiliza set... Es importante primero
guardar el new Date(); en una variable.
*/

/* 
(1)
Date(); es una función que proporciona la fecha actual. También cuando defines un new Date(); imprime la fecha actual y
la forma recomendada para declararla
*/
console.log(Date()); // Tue Mar 26 2019 07:48:47 GMT-0500 (GMT-05:00)
let hoy = new Date();
console.log(hoy); // 2019-03-26T12:57:31.276Z

/* 
(2)
new Date(argumento); para modificar la fecha
*/
let navidad = new Date("12-25-2018");
console.log(navidad); //2018-12-25T05:00:00.000Z

/* 
(3) Para ingresar a fechas más detalladas
*/
let data = new Date();
/* Obtener año */
let año = data.getFullYear();
console.log(año); // 2019
/* Obtener mes */
let mes = data.getMonth();
console.log(mes); // 2 | Regresará como un arreglo con una unidad menos a la del mes en número de índice
/* Obtener día */
let dia = data.getDate();
console.log(dia); // 26 | Te regresa el número del día. Tambien sirve getDay
/* Obtener hora */
let hora = data.getHours();
console.log(hora); // 9 | Te regresa la hora en un número
/* Obtener minutos */
let minuto = data.getMinutes();
console.log(minuto); // 17 | Te regresa los minutos en un número

/*n
(4) set para ingresar una nueva fecha anterior a la actual. Es importante guardar primero el new Date(); en una var
*/
let anoNew = data.setFullYear(2015);
anoNew = data.getFullYear();
console.log(anoNew);