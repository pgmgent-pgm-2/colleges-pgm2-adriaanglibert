const person = {
    name: "Adriaan",
    age: 29,
    sayName: function () {
        console.log(`Mijn naam is ${this.name}`);
    }
}

function Person(firstName) {
    this.name = firstName;

    this.sayName = function () {
        console.log(`Hello, ik ben ${this.name}`);
    }
}

const person1 = new Person('Adriaan');
const admin = new Person('Stef');

admin.sayName();
console.log(admin.name);


person.sayName();



console.log(person.name);
console.log(person['name']);

person.height = 179;

const customPersonProperty = 'hobby';
const customPersonValue = 'lopen';

person[customPersonProperty] = customPersonValue;
// person.hobby = 'lopen';

console.log(person);

delete person.height;
delete person[customPersonProperty];

const productPrices = {
    belgium: 50,
    france: 60,
    usa: 55,
};

const activeCountry = 'usa';

console.log(productPrices.belgium);
console.log(productPrices[activeCountry]);


const product = {
    name: 'iPhone 22',
    length: 28,
    width: 3
}

const shoe = {
    size: 42,
    person: 'Habip'
}

for (key in product) {
    console.log(key, product[key]);
}

const personProperties = Object.keys(person); // ['name', 'length', 'height']

personProperties.forEach(prop => {
    console.log(prop, person, person[prop]); // name (of l, of h), {name: '', ...}, Adriaan
});

Object.values(product); // ['iPhone 22', 28, 3]

Object.entries(person); // [['name', 'Adriaan'], ['age', 29]]

const shoppingCart = {
    items: [
        { name: "Product 1", price: 20 },
        { name: "Product 2", price: 30 },
        { name: "Product 3", price: 15 },
    ],

    // Aangepaste methode om totale prijs te berekenen
    calculateTotal: function () {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    },
};

shoppingCart.calculateTotal();
