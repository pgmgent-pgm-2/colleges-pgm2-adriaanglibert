import fadeIn from "./src/animations.js";
import { myVariable, myFunction, users } from './src/external.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');
    console.log(myVariable);
    myFunction();
    fadeIn();
})