/**
 * Finding the average of a number.
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given an array of number
 *
 * return the average
 */

const average = numbers => {
    const numbersLength = numbers.length;
    const sum = num.reduce((total, current) => total + current, 0);
    return (sum / numbersLength);
}

const result = average([2, 5, 8, 9, 2]);
console.log(result);
