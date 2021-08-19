/* Annotations with Variables */

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

/* Built in Objects */
let now: Date = new Date();

/* Array */
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true,];

/* Classes */
class Car {

}

let car: Car = new Car();

/* Object literals */
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

/*  Functions */
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
};

/* When to use Annotations */
/* 1. Function that returns the “any” type */
/* const json = '{"x": 10, "y":20}';
const coordinates = JSON.parse(json); // type any
console.log(coordinates);  */
const json = '{"x": 10, "y":20}';
const coordinates: {x: number; y: number} = JSON.parse(json); 
console.log(coordinates);

/* 2. When we declare a variable in one line and initialize it later */
let words = ["red", "green", "blue"];
/* let foundWord; // type any
for (let i = 0; i < words.length; i++) {
    if(words[i] === "green") foundWord = true;
} */
let foundWord: boolean; // type any
for (let i = 0; i < words.length; i++) {
    if(words[i] === "green") foundWord = true;
}

/* 3. Variable whose type cannot be inferred correctly */
let numbers = [10, 1, 12];
/* let numberAboveZero = false; // type only boolean
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) numberAboveZero = numbers[i]
} */
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) numberAboveZero = numbers[i]
}