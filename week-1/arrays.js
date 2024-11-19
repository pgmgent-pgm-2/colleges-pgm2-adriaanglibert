const fruits = ["Banaan", { name: 'Appel', amount: 3 }, function () { alert('Test') }];

fruits.length = 100;
// Tip: Array legen.
// fruits.length = 0;

console.log(fruits, fruits.length);

const shoppingCart = ['Parfum', 'Schoenen'];
const wishlist = ['Parfum', 'Schoenen', 'Hemd'];

if (shoppingCart === wishlist) {
    console.log('Hoera, je kan je niet inhouden en koopt wat je wil!');
}

function areArraysEqual(firstArr, secondArray) {
    if (firstArr.length !== secondArray.length) {
        return false;
    }

    firstArr.forEach((element, i) => {
        if (element !== secondArray[i]) {
            return false;
        }
    });

    return true;
}

console.log('Are they the same?', areArraysEqual(wishlist, shoppingCart));

console.log(JSON.stringify(shoppingCart));
console.log(JSON.stringify(wishlist));

if (JSON.stringify(shoppingCart) === JSON.stringify(wishlist)) {
    return true;
}

const deletedItems = "[Das]";
// console.log(deletedItems.length);
// console.log(JSON.parse(deletedItems).length);

fruits.forEach((el, index) => {
    console.log('Fruit', el, index);
});

console.log(fruits.at(0));
console.log(fruits.at(-1));

// Mapping is een combinatie van een loop en een transformatie/aanpassing.
const numbers = [1, 2, 2, 2, 3, 4, 5];
const numbersAsString = numbers.map((el) => {
    return el.toString();
})

const otherNumbersAsString = [];

numbers.forEach(el => {
    otherNumbersAsString.push(el.toString());
    return el.toString();
})

console.log(numbersAsString, otherNumbersAsString);

console.log(shoppingCart.join(' & '));

const cars = [
    ["Volvo", 22, 18],
    ["BMW", 15, 13],
    ["Saab", 5, 2],
    ["Land Rover", 17, 15],
];

// Wanneer gevraagd word om een array te reduceren naar 1 waarde - reduce.
const sumOfNumbers = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
});

console.log(sumOfNumbers);

const numbersBiggerThen2 = numbers.filter((number) => {
    return number > 2;
})
const numbersBiggerThenTwo = numbers.filter((number) => (number > 2))

const numberTwo = numbers.find((number) => {
    return number = 2;
})