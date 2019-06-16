console.log('Console Trials!');


const h3 = document.querySelector('h3');
console.log(h3.textContent);

console.assert(document.querySelector('h2'), 'h2 not found!');

const artists = [
    {
        first: 'René',
        last: 'Magritte'
    },
    {
        first: 'Chaim',
        last: 'Soutine'
    },
    {
        first: 'Henri',
        last: 'Matisse'
    }
];

console.table(artists);

setTimeout(() => {
    h3.textContent = 'Hello, Console!';
    console.log(h3.textContent);
}, 3000);
