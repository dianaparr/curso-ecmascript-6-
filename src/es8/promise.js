// 1. Ejemplo de promesa
// Si el número que generamos aleatoriamente es mayor a 5 entonces se resuelve, si es menor a 5 entonces es rechazada y obtenemos un error

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100);

    setTimeout(
        () => number > 5
            ? resolve(number)
            : reject(new Error('Menor a 5')),
            1000
    );
});

promise
    .then(number => console.log(number))
    .catch(error => console.error(error));


// 2. función que recibe parámetros y retorna la instancia de Promise

function randomDelayed(max=10, expected=5, delay=1000) {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * max);

    setTimeout(
        () => number > expected
            ? resolve(number)
            :reject(new Error('El número es menor al esperado')),
        delay
    )
    });
}


// Crear una promesa que luego de 2.5 segundos se va a resolver siempre que el número generado (entre 0 y 100)
// sea mayor a 75.
randomDelayed(100, 75, 2500)
    .then(number => console.log(number))
    .catch(error => console.error(error));


// 3. pasando de Callback a promesas
// leer un archivo usando el módulo `fs` de Node.js

import fs from 'fs';

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
}

readFile('./archivo.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err));


