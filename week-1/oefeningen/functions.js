function greetings() {
    return 'Hallo daar';
}

function greetings(message = 'daar') {
    return `Hello ${message}!`;
}

console.log(greetings("Anna"));
console.log(greetings());

function controlAge(age, name = 'De gebruiker') {
    if (age >= 18) {
        return `${name} is volwassen.`;
    }

    return `${name} is nog niet volwassen.`;
}

const isJefAdult = controlAge(20, 'Jef');
const isErosAdult = controlAge(24);
console.log(isJefAdult);
console.log(isErosAdult);

function mainLogic(callback) {
    // Andere logica en meer complexe zaken.
    return callback();
}

function myCallback() {
    console.log('Dit is de callback functie');
}

mainLogic(myCallback);