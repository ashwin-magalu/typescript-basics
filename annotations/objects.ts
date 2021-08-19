/* Annotations with Objects */

const profile = {
    name: "Ashwin",
    age: 26,
    coords: {
        lat: 12,
        lng: 66
    },
    setAge(age: number): void{
        this.age = age;
    }
};

const { age } : { age: number } = profile;
const { coords: { lat, lng } } : { coords: { lat: number; lng: number } } = profile;