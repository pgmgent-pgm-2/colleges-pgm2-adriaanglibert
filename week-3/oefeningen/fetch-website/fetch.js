const countriesPromise = fetch('https://restcountries.com/v3.2/independent?status=true&fields=languages,capitals');

// console.log(countriesPromise);
// setTimeout(() => {
//     console.log(countriesPromise);
// }, 5000);

countriesPromise
    .then((response) => {
        // return response.text();
        console.log(response);
        if (response.status !== 200) {
            throw 'Er ging iets mis!';
        }

        return response.json();
    })
    .then((data) => {
        // console.log(JSON.parse(data));
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });