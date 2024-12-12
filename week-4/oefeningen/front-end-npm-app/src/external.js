export const myVariable = "Hello, world!";

export const users = ['Jan', 'Piet'];

function displayResult(result) {
    console.log(result)
}

export function myFunction() {
    console.log("This is a function from main.js");
    displayResult('zeffezf');
}