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
