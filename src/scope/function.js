function greeting() {
    let userName = 'Ana'; // 'userName' es una variable local, solo accesible dentro de la función 'greeting'
    console.log(userName); // imprime 'Ana', porque 'userName' está dentro del mismo scope de la función

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`); // imprime 'Hello Ana!', ya que 'userName' es accesible dentro del bloque de código de la función
    }

}

greeting(); // Llamamos a la función 'greeting', se ejecuta y muestra los valores dentro de la función
console.log(userName); // Error: 'userName' no está definida fuera de la función