// Oefening 1
const letters = ["A", "B", "C"];

const [firstLetter, secondLetter, thirdLetter] = letters;

// Oefening 2
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const [[a], [, b], [, , c]] = matrix;

// Oefening 3
let x = 5;
let y = 10;

// schrijf hier je code om x en y om te wisselen
[x, y] = [y, x];

console.log(x, y); // Output: 10 5

// Oefening 4
const sentence = "This is a sentence.";
const [firstLett, ...restOfSentence] = sentence;
// schrijf hier je code om de eerste letter en de rest van de letters toe te kennen aan variabelen
console.log(firstLett, restOfSentence.join(" ")); // Output: T his is a sentence.