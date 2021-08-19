/* Classes in TS */

class Vehicle {
    /* color: string = "Blue";

    constructor(color: string) {
        this.color = color;
    } */
    
    constructor(public color: string) {
        this.color = color;
    }

    /* public drive(): void {
        console.log("Driving")
    } */

    protected honk(): void {
        console.log("Beep")
    }
}

/* Inheritance */
class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color)
    }

    /* method overriding */
    private drive(): void {
        console.log("I am driving a Car");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle("Orange");
//vehicle.drive();
//vehicle.honk();
console.log(vehicle.color)

const car = new Car(4, "Red");
car.startDrivingProcess();
//car.honk();
console.log(car.color)