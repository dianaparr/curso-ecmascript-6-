// se lanzó en el 2021

// 1
// replace all

// con replace solo reemplaza el primer elemento que encontraba
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// con replace all
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// 2
// métodos privados (para usar dentro de las clases). Una clase con un método interno.
// # -> metodo privado que solo puede ser accedido dentro de la clase
class Message {
    #show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');

// 3
// getters y setters
class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        // ...
    }
}

const message = new Message();
message.show('Hola!');


// 4
// promise any -> argumento es un array de promesas que captura la respuesta de la primera promesa que es resuelta de manera satisfactoria
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// 5
// WeakRef -> referencia de forma débil a un objeto. Evitar que sea collectado por el manejador de basura del lenguaje
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    // { ... }
}

// 6
// operadores de asignación compuestos
// AND lógico, OR lógico y anulación lógica
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);