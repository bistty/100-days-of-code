/**
 * Checking if a number is a narcissistic number
 * 
 * A narcissistic number is a number which is the sum of it's own digit each raised to the power of the number of digit in a given base.
 * 
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a number
 *
 * You are to return true or false depending upon whether the given number is a narcissistic number
 */

function narcissistic(number) {
    const numToStr = `${number}`;
    const numberLength = Math.ceil(Math.log10(number + 1));

    return (
        numToStr.split("").reduce((total, num) => {
            total += Math.pow(+num, numberLength);
            return total;
        }, 0) === number
    );
}

const narcAns = narcissistic(153);
console.log(narcAns);

//example 1 153 (3 digits)
//1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
//example 2 1634 (4 digits)
//1 ^ 4 + 6 ^ 4 + 3 ^ 4 + 4 ^ 4 = 1634

//answer=> true