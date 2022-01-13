// se lanzó en junio de 2020

// 1
// Dynamic import -> realizar una importación de un elemento de forma dinámica.
// cómo llamar un archivo dentro de otra pieza de código cuando se desencadene un llamado -> click
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
})

// 2
// Big int -> representación de estos elementos tan grandes, dos maneras:
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 3
// promise allSettled -> no importa el estado de las promesas, espera a que todas esten resueltas
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// 4
// global.this -> forma estándar de acceder al valor global desde apps creadas con Node

console.log(window);
console.log(globalThis);

// 5
// operador nulo -> hacer diferentes preguntas segun sea el caso.

const fooo = null ?? 'default string';
console.log(fooo);

// 6
// optional chaining -> trabajar diferentes niveles de recursos. Validar que algo aún no está disponible
// Propósito: no romper la aplicación y tratar de leer ese elemento.

const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}
