// Dagen van de week
const days = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

days.forEach(day => {
    console.log(day);
});

// Array waarde?
let fruits = ['Apples', 'Pear', 'Orange']; // array1
let randomString = "Dank";

// push a new value into the "copy"
let shoppingCart = fruits; // referentie naar array1
shoppingCart.push('Banana');
let copyString = randomString;
copyString = 'Meme';

// what's in fruits?
console.log(fruits.length); // ?
console.log(randomString, copyString); // ?

// Multidimensional
const matrix = [
    [12, 23, 43],
    [80, 11, 9]
];

function getElementFromMatrix(matrix, column, row) {
    return console.log(matrix[row - 1][column - 1]);
}

getElementFromMatrix(matrix, 3, 1);

// For of
const numbers = [1, 2, 3, 4, 5];
const colors = ['red', 'blue', 'green', 'yellow'];

for (number of numbers) {
    console.log(number);
}

for (character of 'Hello') {
    console.log(character);
}

colors.forEach((color) => {
    console.log(color);
});

// Methods
const woorden = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];

// Maak een string door alle elementen in de array te verbinden met een koppelteken.
console.log(woorden.join('-'));

const startWithB = woorden.every((woord) => {
    return woord.startsWith('b');
});

console.log('Start met B?', startWithB);


function checksIfItemsStartsWith(arr, letter) {
    let startsWith;

    arr.forEach(item => {
        if (item.startsWith(letter)) {
            startsWith = true;
        }
    });

    return startsWith;
}

console.log(checksIfItemsStartsWith(woorden, 'b'));

woorden.unshift('Hello');