'use strict';
// Activamos el modo estricto globalmente en este archivo o script.
// En el modo estricto, el motor de JavaScript impone reglas más estrictas para mejorar la calidad del código y evitar errores comunes.

// En modo estricto, si intentamos usar una variable sin declararla previamente, arroja un error.
pi = 3.1416; // Error: pi no está definida (en modo estricto no puedes asignar una variable sin declararla)
console.log(pi); // No llegará a ejecutarse porque el error anterior detiene el script

// Definimos una función que también usa 'use strict'
function myFunction() {
    'use strict'; // El modo estricto también puede activarse a nivel de función
    return pi = 3.1416; // Error: pi no está definida (de nuevo, en modo estricto se debe declarar antes de asignar)
}

console.log(myFunction()); // No se ejecutará porque la línea anterior genera un error