/* Annotations with Functions */

const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
}

/* Annotations for Anonymous Functions */

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number{
    return a * b;
}

/* Void and Never */

const logger = (message: string): void => {
    console.log(message)
}

const throwErr = (message: string): never => {
    throw new Error(message)
}

/* Destructuring with annotations */
const todaysWeather = {
    date: new Date(),
    weather: "Sunny"
}

const logWeather = (forecast: {date: Date; weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

logWeather(todaysWeather)

const logWeather2 = ({date, weather} : {date: Date; weather: string}): void => {
console.log(date)
console.log(weather)
}

logWeather2(todaysWeather)