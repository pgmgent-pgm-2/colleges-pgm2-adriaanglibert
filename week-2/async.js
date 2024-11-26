// Promises

const myPromise = new Promise((resolvingFunction, rejectingFunction) => {
    if (true) {
        resolvingFunction("Het is gelukt!");
    } else {
    }
});

function fetchData() {
    return new Promise((resolve, reject) => {
        if (true) {
            reject('Er ging iets mis, 503 error.')
        }
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data); // Gegevens zijn met succes opgehaald
            // Of om afwijzing te simuleren: reject('Fout bij ophalen van gegevens');
        }, 2000);
    });
}

const promise = fetchData();
promise.then((userData) => {
    console.log('Data is opgehaald', userData);
})

promise.catch((errorMessage) => {
    console.log(errorMessage);

});
console.log(promise);



// Synchrone functie die gegevens van een externe API ophaalt
function fetchDataSync(callbackFunc) {
    console.log("Start ophalen van gegevens");

    // Simuleer een langzame API-oproep met setTimeout
    for (let i = 0; i < 5000000000; i++) {
        // Doe niets, wacht gewoon
    }

    console.log("Gegevens opgehaald");
    callbackFunc("Mijn gegevens");
    return "Mijn gegevens";
}

function processData(data) {
    console.log("Verwerken van gegevens:", data);
}

// console.log("Begin programma");

// Roep de synchrone functie aan
// const data = fetchDataSync(processData);


// console.log(
//     "Nu wordt er andere code uitgevoerd, zoals bijvoorbeeld het toevoegen van event listeners, mogelijkheid om dropdowns te openen, ..."
// );