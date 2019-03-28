/* 
==============================================================================================
WINDOW OBJECT
==============================================================================================
    1. Altura y anchura del navegador
    2. Ubicación
*/

/* (1) Para definir la altura y anchura que tiene el navegador incluyendo todos los elements. Se debe trabajar en la 
consola del navegador*/
let altura = window.outerHeight;
let anchura = window.outerWidth;

/* Para definir la altura y anchura si la interfaz de como por ejemplo la consola */
let altura1 = window.innerHeight;
let anchura1 = window.innerWidth;

/* (2) Esta propiedad de window permite dar la ubicación con multiples detalles como el host, directorio, puerto, etc*/
let ubicacion = window.location;
let host = window.location.host;
let puerto = window.location.port;
let historial = window.history.go(-2) // Va para dos páginas atras asi estes en incógnito