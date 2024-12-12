const { division, multiply } = require('./modules/calculations.js');
const { round, upperFirst } = require('lodash');
const lodash = require('lodash');

// console.log(calculations.division(20, 2));
console.log(division(20, 2));
console.log(multiply(2, 40));

console.log(round(3.3333333))
console.log(upperFirst('test van een test'));