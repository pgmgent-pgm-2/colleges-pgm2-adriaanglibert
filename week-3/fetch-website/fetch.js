const countriesPromise = fetch('https://restcountries.com/v3.2/independent?status=true&fields=languages,capitals');

// console.log(countriesPromise);
// setTimeout(() => {
//     console.log(countriesPromise);
// }, 5000);

// countriesPromise
//     .then((response) => {
//         // return response.text();
//         console.log(response);
//         if (response.status !== 200) {
//             throw 'Er ging iets mis!';
//         }

//         return response.json();
//     })
//     .then((data) => {
//         // console.log(JSON.parse(data));
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });


async function getData(callback = null) {
    try {
        const response = await fetch('https://restcountries.com/v3.1/independent?status=true&fields=languages,capitals', {
            method: 'POST',
            body: 'Nieuw land'
        });
        const data = await response.json();
        if (callback) {
            callback(data);
        }
        return data;
    } catch (error) {
        console.log(error);
    }
}


function showData(message) {
    console.log('Data', message);
}

console.log('Data', getData());
getData(showData);
