//var nameOfDog = 'undefined'  <--el hosting o elevancion asigna como undefined 
console.log(nameOfDog) //cuando se llama es undefined
var nameOfDog = 'Doki' //
console.log(nameOfDog) //aca si aparece 'Doki'


nameOfCat();  //ejecuta y nami es undefined hasta el momento

function nameOfCat() {
    console.log(`El mejor gato es ${nami}`)
}

var nami = 'Nami La Gata Ladrona'

nameOfCat(); 