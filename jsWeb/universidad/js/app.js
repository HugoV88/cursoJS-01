// Eliminar de Local Storage
localStorage.clear();

/* 
===========================================================================================
EMPEZANDO A MANIPULAR EL DOM
===========================================================================================
 */
let elemento;

elemento = document; /* Para ver los elementos en la consola */

elemento = document.all; /* Para ver los elementos en forma de arreglo en la consola */

elemento = document.all[10]; /* Para ver el elemento de índice 10 en la consola */

elemento = document.head; /* Para ver el elemento head en la consola */

elemento = document.body; /* Para ver el elemento body en la consola */

elemento = document.domain; /* Para ver el dominio http://127.0.0.1 */

elemento = document.URL; /* Para ver más completa el URL http://127.0.0.1 */

elemento = document.characterSet; /* UTF-8 */

elemento = document.forms; /* Para mostrar todos los formularios */

elemento = document.forms[0]; /* Para mostrar un formulario */

elemento = document.forms[0].id; /* Para mostrar un formulario con id */

elemento = document.forms[0].className; /* Para mostrar un formulario con clase */

elemento = document.forms[0].className; /* Para mostrar un formulario con clase */

elemento = document.forms[0].classList; /* Para mostrar una lista de clases */

elemento = document.forms[0].classList[0]; /* Para mostrar una lista de clases con su índice */

elemento = document.images; /* Para mostrar una lista de imagenes */

elemento = document.images[0]; /* Para mostrar una imagen */

elemento = document.images[0].src; /* Para mostrar el el path con el url */

elemento = document.images[0].getAttribute("src"); /* Para mostrar el path de la imagen */

elemento = document.scripts; /* Para ver los scripts del html */

/* Para mandar imagenes en un array en la consola y poder trabajar con ellas */
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach((img) => {
    /* console.log(img); Se imprime cada imagen por separado */
});

/* 
===========================================================================================
SELECIONANDO ELEMENTOS Y APLICANDOLE PROPIEDADES
===========================================================================================
*/
let encabezado;

encabezado = document.getElementById("encabezado"); /* Para seleccionar un elemento por su id */
encabezado = document.getElementsByClassName("encabezado"); /* Para seleccionar elementos por su clase */
encabezado = document.getElementsByTagName("encabezado"); /* Para seleccionar elementos por su etiqueta */

encabezado = document.getElementById("encabezado").textContent; /* Para seleccionar el texto dentro del elemento */
encabezado = document.getElementById("encabezado").innerText; /* Para seleccionar el texto dentro del elemento */

/* Para modificar el texto de un contenido */
encabezado = document.getElementById("encabezado")
encabezado.innerText = "Hola Mundo"; /* Para reescribir un texto dentro del elemento */
encabezado.textContent = "Hola por segunda vez"; /* Para reescribir un texto dentro del elemento */

/* Para acceder a las propiedades de ccs */
encabezado.style.background = "black";
encabezado.style.color = "white";
encabezado.style.fontSize = "16px";
encabezado.style.padding = "20px";

/* 
===========================================================================================
SELECTOR JQUERY
===========================================================================================
Se puede utilizar para reemplazar el selector documente.getElementById y demas, es muy parecido a utilizar CSS. Hay que 
tener en cuenta que solo selecciona un elemento
*/

let enlace;

enlace = document.querySelector("#encabezado");
enlace.style.color = "black";
enlace.style.background = "white";

let enlace01;
enlace01 = document.querySelector("#principal a"); /* Selecciona un solo elemento */
enlace01 = document.querySelector("#principal a:first-child");
enlace01 = document.querySelector("#principal a:nth-child(3)");

console.log(enlace01);