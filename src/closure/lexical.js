const myGlobal = 0; // Variable global, accesible en cualquier parte del código

function myFunction() {
    const myNumber = 1; // Variable local a myFunction, accesible solo dentro de esta función y sus internas
    console.log(myGlobal); // Imprime 0, ya que myGlobal es accesible desde aquí (ámbito global)

    function parent() { // función interna (closure)
        const inner = 2; // Variable local a parent, accesible solo dentro de parent y sus funciones internas
        console.log(myNumber, myGlobal); // Imprime 1 y 0, ambas variables están en el alcance de parent

        function child() { // función interna de parent (closure dentro de otro closure)
            console.log(inner, myNumber, myGlobal); // Imprime 2, 1 y 0, ya que inner, myNumber y myGlobal están en el alcance
        }

        return child(); // Llama a child dentro de parent
    }

    return parent(); // Llama a parent dentro de myFunction
}

myFunction(); // Inicia la ejecución de myFunction

