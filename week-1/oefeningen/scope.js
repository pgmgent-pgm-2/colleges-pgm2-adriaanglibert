function increaseByTen(num) {
    return num + 10;
}

let myNumber = 20;
myNumber = increaseByTen(myNumber);
console.log("Number:", myNumber)

let global = "Globale variabele";

function setGlobal() {
    let global = 'Scoped variabele';
    global = 'Updated variabele';
}

setGlobal();
console.log(global);