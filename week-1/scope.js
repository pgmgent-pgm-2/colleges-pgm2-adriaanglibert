const message = 'Dit is een bericht';

function sayMessage(myMessage) {
    const prefix = 'Message:';

    function logMessage() {
        const suffix = '!';
        console.log(prefix, myMessage, suffix);
    }
    // console.log(suffix);
    logMessage();
}

console.log(message);
// console.log(prefix);

sayMessage('Hey');

function doubleNumber(obj) { // number
    // number = number * 2;
    obj.value = obj.value * 2;
    // return result;
}

let originalNumber = 5;
doubleNumber(originalNumber);
originalNumber = doubleNumber(originalNumber);
console.log(originalNumber);

let originalObject = {
    value: 5
}

doubleNumber(originalObject);

function countDown(number) {
    if (number === 0) {
        return;
    }

    console.log(number);
    countDown(number - 1);
}

countDown(5);

const family = {
    name: "John",
    children: [
        {
            name: "Zoe",
            children: [],
        },
        {
            name: "Bob",
            children: [
                {
                    name: "Joe",
                    children: [],
                },
                {
                    name: "Eloise",
                    children: [],
                },
            ],
        },
    ],
};

function showFamily(family) {
    console.log("Parent:", family.name);

    family.children.forEach(child => {
        showFamily(child);
    });
}

showFamily(family);