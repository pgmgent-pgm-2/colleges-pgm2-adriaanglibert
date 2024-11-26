// Oefening 1
function calcSquareAndShowResult(num) {
    console.log(`Dit is het kwadraat van ${num}:`, num * num)
}

function calcDivisionAndShowResult(num) {
    console.log(`Dit is het deling van ${num} gedeeld door 2:`, num / 2);
}

function calculation(number, callback) {
    // Do logic here, after logic is finished, do callback:
    callback(number);
    // calcSquareAndShowResult(number)
}

// calculation(3, calcSquareAndShowResult);
// calculation(6, calcDivisionAndShowResult);

// Oefening 2
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Voorbeeld data');
        }, 1000)
    })
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);

            const processData = data.toUpperCase();
            resolve(processData);
        }, 1000)
    })
}

function displayResult(result) {
    console.log(result);
}

fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayResult(processedData))
    .catch((err) => console.log(err));
