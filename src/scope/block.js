function fruits() {
    if (true) { // un bloque definido por las llaves {} dentro de la función
        var fruit1 = 'Apple'; // 'fruit1' tiene function scope, es accesible en toda la función
        let fruit2 = 'Kiwi'; // 'fruit2' tiene block scope, solo accesible dentro de este bloque (dentro del if)
        const fruit3 = 'Banana'; // 'fruit3' tiene block scope, también solo accesible dentro del bloque (dentro del if)

        // Dentro del bloque (if), se puede acceder a 'fruit2' y 'fruit3' sin problemas:
        console.log(fruit2); // imprime 'Kiwi'
        console.log(fruit3); // imprime 'Banana'
    }

    // Fuera del bloque if:
    console.log(fruit1); // imprime 'Apple', porque 'fruit1' fue declarado con 'var' y tiene function scope (accesible en toda la función)

    // Si tratamos de acceder a 'fruit2' o 'fruit3' aquí, causaría un error porque están en block scope:
    // console.log(fruit2); // Error: 'fruit2' no está definida fuera del bloque if
    // console.log(fruit3); // Error: 'fruit3' no está definida fuera del bloque if
}

fruits(); // Ejecutamos la función