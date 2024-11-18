sum(2, 3);
// division();

function sum(x = 0, y = 0) {
    return x + y;
}

const division = () => {
    console.log(10 / 2);
};

const numbers = [2, 3];

console.log(sum(numbers[0], numbers[1]));
console.log(sum());

function message(mess) {
    console.log('Mijn bericht is: ', mess);
}

message(sum(1, 1));

function fetchData(callbackFunc) {
    setTimeout(() => {
        const data = 'Dit is dummy data';
        callbackFunc(data);
    }, 2000);
}

function showPosts(data) {
    console.log('Facebook posts:', data);
}

fetchData(showPosts);
fetchData(() => {
    console.log('Twitter posts:', data)
})