// se lanzó en junio de 2019

// 1
// devolver una matriz con cualquier otra matriz aplanada -> por niveles

let list = [1,2,3, [1,2,3, [1,2,3]]];

console.log(list.flat(2));

// falp.map -> mapear el elemento

let list = [1,2,3,4,5];

console.log(list.flatMap(value => [value, value * 2]));

// 2
// eliminar espacios en blanco de un string

let hello = '                      Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world         ';
console.log(hello);
console.log(hello.trimEnd());

// 3
// optional catch building -> se puede pasar de manera opcional el parámetro de error al valor de catch

try {

} catch (e) {
    e
}

// ahora, sin pasar el valor de error
try {

} catch {
    e
}

// 4
// entries, convierte clave-valor en objetos

let entries = [["name", "Diana"], ["age", 25]];

console.log(Object.fromEntries(entries));

// 5
// objeto de tipo simbolo que nos permite ingresar a una descripción

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);