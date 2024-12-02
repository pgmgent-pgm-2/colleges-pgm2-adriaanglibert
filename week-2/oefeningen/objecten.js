const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blauw"
}

car.color = "Rood";

function getProperty(key) {
    console.log(car.brand);
    console.log(car[key]); // car[VARIABELE]
}

getProperty('brand');
getProperty('model');
getProperty('year');

car.fuel = 'Benzine';
delete car.year;

const person = {
    name: 'Anna',
    age: 25,
    address: {
        street: 'Hoofdstraat',
        number: 123,
        city: 'Stadsville'
    }
}

console.log(person.address.number)
console.log(person['address']['number']);

person.phone = '+32 471 78 89 90';

// Oefening 4

const shoppingCart = {
    item1: { name: "Product 1", price: 20 },
    item2: { name: "Product 2", price: 30 },
    item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart).map(key => shoppingCart[key].name);
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart).map(obj => obj.price);
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart).map(item => `${item[1].name}: ${item[1].price}`)
console.log("Namen en prijzen van items:", itemEntries);