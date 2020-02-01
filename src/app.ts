// let age;
// age = 30;
// const userName = 'Maximilian';
// console.log(userName);

// const button = document.querySelector('button')!;
// button.addEventListener('click', () => {
//     console.log('Clicked!');
// });

// // If you don't want !, then you can handle it by wrapped into a if conditional check
// const button1 = document.querySelector('button');
// if (button1) {
//     button1.addEventListener('click', () => {
//         console.log('Clicked!');
//     });
// }

// It allow Unused global variable.
let appId = 'abc';
const button = document.querySelector('button')!;


function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    // return;
}

// function clickHandler(message: string, age: number) {
function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}
// a comment
if (button) {
    // let userName = 'Max';

    // button.addEventListener('click', clickHandler.bind(null));
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}



// because we set
// "target": "es6",
// and comment out // "lib": [],
// by default it includes everything is available in es6
// plus all DOM element, so you can just access document, querySelector etc.
// Some of the es6 features include:
const map = new Map();
