// 1

function newFuction(name, age, country) {
    var name = name || 'diana';
    var age = age || 25;
    var country = country || 'CO';
    console.log(name, age, country);
}

// Desde asignación de los parámetros -> ES6
function newFuction2(name='Diana', age=25, country='CO') {
    console.log(name, age, country);
};


newFuction2();
newFuction2('Juan', 28, 'MX');

// 2

// template literals -> permiten seprar/unir varios elementos
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6 template literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// 3

// multilinea en los strings
let lorem ="Quiero escribir una super frase para separar \n"
+ "y demostrar que hay otra forma de hacerlo."

// ES6
let lorem2 = `otra frase para demostrar que podemos
separar las frases`

console.log(lorem);
console.log(lorem2);

// 4

// Desestructuración de elementos

let person = {
    'name': 'Diana',
    'age': 25,
    'country': 'CO'
}

console.log(person.name, person.country);

// ES6
let { name, age, country } = person;
console.log(name, age, country);

// 5

// operador de propagación (expandir elementos)

let team1 = ['Diana', 'Juan', 'Camila'];
let team2 = ['Julian', 'Carlos', 'Laura'];

//Unión de elementos
let education = ['David', ...team1, ...team2];
console.log(education);

// 6

// no se usa var, se usa let -> con let la variable esta disponible en el bloque de código en donde es llamado
// NOTA: Es mas conveniente empezar a trabajar con let

// globalVar sí es accesible
{
    var globalVar = "Global Var";
}

//globalLet no es accesible en OTRO scope, se puede hacer accesible DENTRO de este mismo bloque de código
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

// 7

// const -> permite establecer una variable constante, nunca cambia su valor -> No permite la reasignación
const a = 'b';
a = 'a';

// TypeError: Assignment to constant variable.
console.log(a);


// 8

// Propiedad de objetos mejorada

let  name = 'Diana';
let age = 25;

obj = { name: name, age: age };

// ES6
obj2 = { name, age };
console.log(obj2);

// 9

// arrow functions -> sintaxis reducida y this no vinculable
// las arrow functions son funciones anónimas
const names = [
    { name: 'Diana', age: 25 },
    { name: 'Camila', age: 29 }
]
let listOfNames = names.map(function (item) {
    console.log(item.name);
});

// ES6
let listOfElements2 = names.map(item => console.log(item.name));

const listOfElements3 = (name, age, country) => {
 // bloque código
}

const listOfElements4 = name => {
 // bloque codigo
}

const square = num => num * num;


// 10

// promesas -> asincronismo en JS. "Algo va a pasar"

const helloPromise = () => {
    return  new Promise((resolve, reject) => {
        // or false and print Ups
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Holi'))
    .catch(err => console.log(err));


// 11

// classes (OOP)

class calculator {
    // variables de scope global
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    // método -> al que se le pasan los dos elementos que se quieren sumar y
    // se asina a las variables creadas en la clase, el valor de cada elemento que se pasa.
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


// 12

// import/export -> trabajo con módulos
import { hello } from './module';
hello();


// 13

// genereitors -> función especial que retorna una serie de valores según el algorítmo definido
// Recuerda el valor consecuente y lo presenta.

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);