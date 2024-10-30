//------VAR--------

// Declaración de la variable 'firstName' (sin asignación, valor por defecto: undefined)
var firstName; // declaración - Undefined
firstName = 'Orlando'; // asignación de valor
console.log(firstName); // imprime 'Orlando'

// Declaración y asignación de 'lastName'
var lastName = "David"; // declarar / asignar
lastName = 'Ana'; // reasignación de valor, 'lastName' ahora es 'Ana'
console.log(lastName); // imprime 'Ana'

// Declaración y asignación de 'secondName'
var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // redeclaración (permitido con var) y reasignación
console.log(secondName); // imprime 'Ana', porque se reasignó el valor

//------LET--------

// Declaración y asignación de la variable 'fruit'
let fruit = 'Apple'; // declara y asigna
fruit = 'Kiwi'; // reasignación de valor (permitido con let)
console.log(fruit); // imprime 'Kiwi'

// let no permite la redeclaración en el mismo scope
// let fruit = 'Banana'; // error: no se puede redeclarar 'fruit', ya está declarada

console.log(fruit); // sigue siendo 'Kiwi'

//-----CONST-----

// Declaración y asignación de la variable 'animal' con const
const animal = 'dog'; // declara y asigna
// animal = 'cat'; // error: no se puede reasignar el valor de una variable const
// const animal = 'Snake'; // error: tampoco se puede redeclarar con const
console.log(animal); // imprime 'dog'

// Los arrays y objetos declarados con const permiten modificar su contenido
const vehicles = []; // declara un array vacío
vehicles.push("🚗"); // se puede modificar el contenido (agregar elementos)
console.log(vehicles); // imprime ['🚗']

vehicles.pop(); // se puede modificar el contenido (eliminar elementos)
console.log(vehicles); // imprime []