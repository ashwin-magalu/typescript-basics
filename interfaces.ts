/* Interfaces in TS */

interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar}gms of Sugar`
    }
};

/* 
    // Without using Interfaces
    const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic) */

// Using Interfaces
const printVehicle = (vehicle : Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
    console.log(`Summary: ${vehicle.summary()}`)
}

printVehicle(oldCivic)

const printSummary = (item : Reportable): void => {
    console.log(`Summary: ${item.summary()}`)
}

printSummary(oldCivic)
printSummary(drink) // reused using Reportable Interface
