function greetings() {
    return 'Hallo daar';
}

function greetings(message = 'daar') {
    return `Hello ${message}!`;
}

console.log(greetings("Anna"));
console.log(greetings());