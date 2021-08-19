/* Arrays in TS */

const carMakers: string[] = ["ford", "toyota", "chevron", "hyundai", "tata"];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [
    ["f150"], ["corolla"], ["camaro"]
];

/* Why Typed Arrays: */
/* 1. Help with Inference when extracting values */
const car = carMakers[0];
const myCar = carMakers.pop();

/* 2. Prevent incompatible values */
carMakers.push("mahindra");

/* 3. We can get help with ‘map’, ‘forEach’, ‘reduce’ functions */
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

/* 4. Arrays can still contain multiple different types */
const importantDates: (Date | string)[] = [new Date(), "2030-10-20"];
importantDates.push("2012-12-12")
importantDates.push(new Date());