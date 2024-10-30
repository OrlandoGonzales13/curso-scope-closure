// variables

var a; // declarando la variable 'a', su valor por defecto es undefined
var b = 'b'; // declaramos y asignamos el valor 'b' a la variable 'b'
b = 'bb'; // reasignación de 'b', ahora su valor es 'bb'
var a = 'aa'; // redeclaración de 'a', ahora 'a' tiene el valor 'aa'


// Global Scope
var fruit = 'Apple'; // declaramos una variable global 'fruit', accesible en todo el programa
console.log(fruit); // imprime 'Apple' ya que 'fruit' está en el global scope

function bestFruit() {
    console.log(fruit); // la función accede a la variable global 'fruit'
}

bestFruit(); // al ejecutar la función, imprime 'Apple', ya que 'fruit' está en el global scope


function countries() {
    country = 'Colombia'; // se asigna una variable global 'country' sin usar var, let o const
    var continent = 'America'; // 'continent' es una variable local, accesible solo dentro de la función
    console.log(country); // imprime 'Colombia'
    console.log(continent); // imprime 'America'
}

countries(); // ejecuta la función y muestra 'Colombia' y 'America'
console.log(country); // imprime 'Colombia', ya que 'country' fue declarada de forma global dentro de la función
console.log(continent); // Error: 'continent' no está definida fuera de la función, ya que es una variable local