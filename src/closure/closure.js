//funcion anidada
function greeting() {
    let username = 'Orlando';

    function displayUserName() {
        return `hello ${username}`
    }

    return displayUserName;
}

const g = greeting();

console.log(g);
console.log(g());