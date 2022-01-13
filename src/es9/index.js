// se lanzó en junio de 2018

// 1
// Operador de reposo que puede extraer las propiedades de un objeto que aun no se ha construido

const obj = {
    name: 'Diana',
    age: 25,
    country: 'CO'
};

// usar operador de reposo para separar los elementos -> ...all
let { name, ...all } = obj;
console.log(name, all);

// 2
// Propiedades de propagación para unir varios objetos a un objeto

const obj = {
    name: 'Diana',
    age: 25
}

const obj1 = {
    ...obj,
    country: 'CO'
}

console.log(obj1);

// 3
// Promise.finally para saber cuanto ha terminado el llamado y ejecutar alguna otra lógica de código

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))


// 4
// Agrupar bloques de regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
