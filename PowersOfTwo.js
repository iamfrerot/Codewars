// Function that returns a list/array off all powers of two from 0 to n ;

function powersOfTwo(n) {
    const listOfAllPowersOfTwo=[];
    for (let i = 0; i <=n; i++) {
    listOfAllPowersOfTwo.push(2**i);    
    }
    return listOfAllPowersOfTwo;
}

console.log(powersOfTwo(4)); // Output:[ 1, 2, 4, 8, 16 ]