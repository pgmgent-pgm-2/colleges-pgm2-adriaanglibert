const cars = [undefined, 'Skoda', 'Lambo'];

const secondCar = cars[1];
const thirdCar = cars[2];
const firstCar = cars[0];

const [firstItem = 'Saab', secondItem, thirdItem] = cars;
const [firstThing, , thirdThing, fourthThing = 'Ferrari'] = cars;

const numbers = [1, 2, 3, 4];

const [firstNumber, ...restNumbers] = numbers;

const productPrices = {
    belgium: 50,
    france: 60,
    usa: 55,
};

const belgianPrice = productPrices.belgium;
const frenchPrice = productPrices.france;
const americanPrice = productPrices.usa;

const { belgium: belgiumPrice, usa, germany = 80 } = productPrices;

// console.log('Dit product kost', belgium);
console.log('Dit product kost', belgiumPrice);

const { message: msg = "Something went wrong" } = {
    message: 'Oh no!'
};

console.log(message); // undefined
console.log(msg); // Oh no!


const {belgium: bPrice, ...otherCountriesPrices} = productPrices;
