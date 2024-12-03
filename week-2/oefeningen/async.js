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
    .catch((err) => console.log(err))
    .finally(() => { console.log('Always') });

async function handleData() {
    try {
        const data = await fetchData();
        const processedData = await processData(data);
        displayResult(processedData);
        renderData(processedData);
    } catch (err) {
        console.log('Er ging iets mis', err);
    } finally {
        console.log('Always executed');
    }
}

handleData();

// Oefening 3
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .3) {
                resolve('Gegevens opgehaald');
            } else {
                reject('Fout bij ophalen van gegevens')
            }
        }, 2000);
    });
}

fetchDataWithPromise()
    .then(confirmMessage => {
        console.log(confirmMessage);
    })
    .catch(errorMessage => {
        console.log(errorMessage);
    });

const users = [
    {
        userId: 1,
        name: 'Stef'
    },
    {
        userId: 2,
        name: 'Jan'
    },
    {
        userId: 3,
        name: 'Piet'
    }
]

const posts = [
    {
        authorId: 1,
        message: 'Yolo'
    },
    {
        authorId: 1,
        message: 'Het sneeuwt'
    },
    {
        authorId: 2,
        message: 'Let that sink in.'
    }
]

// Oefening 4
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        // Search in db for user width userId
        const user = users.find(user => user.userId === id);

        if (user) {
            resolve(user)
        } else {
            reject(`Er is geen gebruiker gevonden met user id ${id}`);
        }
    });
}

function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
        const userPosts = posts.filter(post => post.authorId === user.userId);

        if (userPosts.length) {
            resolve(userPosts);
        } else {
            reject('Er zijn geen posts voor deze gebruiker');
        }
    });
}

function renderData(post) {

}

fetchUserData(2)
    .then(user => {
        console.log('Gebruiker is: ', user.name);
        return fetchUserPosts(user);
    })
    .then(posts => {
        console.log('Posts', posts);
        renderData(posts);
    })