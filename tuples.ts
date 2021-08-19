/* Tuples in TS */

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
}; // Object

const pepsi = ["brown", true, 40]; // Array, Order can be swapped here
pepsi[0] = 40;
pepsi[1] = "brown"

const coke: [string, boolean, number] = ["brown", true, 40]; // Tuple, order is fixed here
//coke[0] = true; // warning appears now

type Drink = [string, boolean, number]; /* Type Alias */

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["clear", false, 0];

/* Why Tuples */
const carSpecs: [number, number] = [400, 3354]; // hard to understand

const carStats = {
    horsePower: 400,
    weight: 3354,
}; // easy to understand