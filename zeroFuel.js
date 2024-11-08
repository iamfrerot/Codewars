// Function that test if the amount fuelleft can be able to reach the next pumping station
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ((mpg * fuelLeft) / distanceToPump >= 1) {
        return true
    } else {
        return false;
    }
};

console.log(zeroFuel(100, 50, 2)); // Output: true

console.log(zeroFuel(140, 24, 1)); // Output: false

