const API_URL = 'https://catfact.ninja/fact';
const CAT_LENGTH = 60;

// const catFact = {
//     message: 'Cats are aweseome',
//     bullshitValue: 3
// }

// const mess = catFact.message;
// const blshit = catFact.bullshitValue;

// const { message, bullshitValue } = catFact;

function showRandomCatFact(fact) {
    const $fact = document.getElementById('fact');
    $fact.innerText = fact;
}

async function fetchCatFact() {
    const response = await fetch(`${API_URL}?max_length=${CAT_LENGTH}`);
    const {fact} = await response.json();

    showRandomCatFact(fact);
}

// fetchCatFact();

function fetchCatAlt() {
    fetch(API_URL)
        .then(response => response.json())
        .then(({ fact }) => showRandomCatFact(fact))
}

fetchCatAlt();
