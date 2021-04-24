/**
 * Checking if a number is divisible by two numbers
 * 
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given 3 numbers n, x and y respectively
 *
 * You are to check if n can be divisible by x and y
 * 
 * return true if n is divisible by x and y 
 */



function divisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

//example
let divisibleAns = divisible(18, 2, 4);
console.log(divisibleAns);

// answer => false
