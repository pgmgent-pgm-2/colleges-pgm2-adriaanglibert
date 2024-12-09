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

// Oefening 5
function multiply(numbers) {
    const [a, b] = numbers;
    console.log(a * b);
}

// Oefening 6
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

// Oefening 7
const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
};

const { name, age, address: { street, city } } = person;

console.log(name, age, street, city);

// oefening 8
const book = { title: "JavaScript Basics", author: "John Doe" };
const { title, author, pages = 0 } = book;
console.log(title, author, pages);

// Oefening 9
function printDetails({ name, age = 25, gender = 'Unknown' }) {
    console.log(name, age, gender);
}

printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown

// Oefening 10
function mergeOptions({ ...firstObject }, { ...secondObj }) {
    console.log({ ...firstObject, ...secondObj });
}

mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }