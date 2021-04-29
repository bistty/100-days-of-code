/**
 * Return true if n is divisible by all the parameters given
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a n and any number of parameters
 *
 * return true if n is divisible by all the parameters
 */

function divisible(n, ...x) {
    for (let num of x) {
        if (n % num !== 0) {
            return false
        }
    }
    return true
}

//example
let divisibleAns = divisible(18, 2, 6, 9, 18);
console.log(divisibleAns);

// answer => true
