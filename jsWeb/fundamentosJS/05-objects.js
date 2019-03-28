/* 
==============================================================================================
OBJETOS - Contenido
==============================================================================================
    1. .this es una forma de llamar a una propiedad dentro del objeto, para formar una funciones constructoras, etc. Esta
palabra clave solo se puede utilizar con la función clásica y no es aceptada por las nuevas versiones de ECMA.
*/

/* 
==============================================================================================
(1) .this en este caso lo utilizaremos para llamar a una propiedad dentro del objeto
==============================================================================================
*/
let mairelys = {
    nombre: "Mairelys",
    apellido: "Rondon",
    edad: 29,
    oriundo: {
        pais: "Venezuela",
        ciudad: "Maracay"
    },
    musica: ["BTS", 1975, "Manowar"],
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(mairelys.nacimiento()); // 1989