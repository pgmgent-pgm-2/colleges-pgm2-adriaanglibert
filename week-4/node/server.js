const process = require('process');
const path = require('path');
const fs = require('fs');

// console.log(process.env.port);

// const pathToFacts = '/documents/facts.json';
const pathToFacts = path.join('documents', 'facts.json');
const facts = fs.readFile(pathToFacts, "utf-8", (err, data) => {
    const originalFacts = JSON.parse(data);
    const newFacts = originalFacts.push('Cats are awesome!');

    fs.writeFile(pathToFacts, JSON.stringify(newFacts), (err) => {
        console.log('Error bij het schrijven van een bestand', err);
    });
});



