const jsonString = '{"name":"Alice","age":25,"city":"London"}';

const object = {
    prop: 'value',
}

const JSON_object = {
    "prop": "value"
}

const stringifiedObject = JSON.stringify(object);
console.log(stringifiedObject.toUpperCase());

const obj = JSON.parse(jsonString);
console.log(obj);

