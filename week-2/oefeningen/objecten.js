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