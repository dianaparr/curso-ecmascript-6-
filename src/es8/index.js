// se lanza en junio de 2017

// 1
// object.entries -> retorna la key y value de un array de arrays
const data = {
    frontend: 'Juan',
    backend: 'Diana',
    design: 'Camilo'
}

const entries = Object.entries(data);
console.log(entries);

// para saber cuántos elementos tiene un objeto
console.log(entries.length);

// 2
// object values -> retorna los valores de un objeto en un array
const data = {
    frontend: 'Juan',
    backend: 'Diana',
    design: 'Camilo'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);


// 3
// padding -> anteponer elementos a un string

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));

console.log('food'.padEnd(12, ' ------'));


// Trailing commas: pueden ir las comas al final de cada elemento dentro del objeto así se vaya o no a agregar mas elementos en el objeto

const obj = {
    item: 'casa',
}


// 4
// Async y await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Hello World"), 3000)
        : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


// manejo correcto de errores con try y catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (err) {
        console.error(err);
    }
};

anotherFunction();
