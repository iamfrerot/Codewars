// Function that returns sum of number between a and b but if a equals b just return one among both 
function getSum(a,b) {
    if(a===b) return a;
    let sum=0;
    let min= Math.min(a,b);
    const max=Math.max(a,b);

    for(min;min<=max;min++){
       sum+=min; 
    }
    return sum;
}

console.log(getSum(-2,3)); // Output: 3
