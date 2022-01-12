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


// 4. Encadenando promesas -> promise chaining
// Una promesa puede devolver otra promesa y llamar al siguiente .then de la cadena.

// Ejemplo: archivo.txt devuelve un string con el path de otro archivo y se quiere leer ese segundo archivo que esta en ese path. Con callbacks sería:

fs.readFile('./archivo.txt', 'utf-8', (error, path) => {
    if (error) throw error;
    fs.readFile(path, 'utf8', (err, data) => {
        console.log(data);
    });
});

// Con promesas: (ver promesa, line 48)
readFile('./archivo.txt')
    .then(readFile)
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Ejemplo2: No solo hay que devolver promesas, ya que si la función que pasamos a .then hace un return entonces el valor devuelto pasa al siguiente
// .then de la cadena, sin importar que sea una promesa, un objeto, un string, un número o cualquier otro tipo de datos.

import { resolve } from 'path';

readFile('./archivo.txt')
    .then(resolve)
    .then(readFile)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// 5. Promesas en paralelo
// Método estático Promise.all -> recibe un único parámetro: una lista de promesas las cuales se ejecutan simultáneamente

import { resolve } from 'path';

Promise.all([readFile('./archivo.txt'), readFile('./archivo2.txt')])
    .then(data => data.map(resolve))
    .then(data => Promise.all(data.map(readFile)))
    .then(finalData => console.log(finalData))
    .catch(error => console.error(error));


// 6. Carrera de promesas
// Método que corre varias promesas al tiempo, pero solo es para obtener el resultado de la primera promesa -> Promise.race

import { resolve } from 'path';

Promise.race([readFile('/.archivo.txt'), readFile('./archivo2.txt')])
    .then(resolve)
    .then(readFile)
    .then(data => console.log(data))
    .catch(err => console.error(err));
