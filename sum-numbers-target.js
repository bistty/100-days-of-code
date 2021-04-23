/**
 * Finding the sum of two numbers of a target
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given an array of numbers
 *
 * You are to return two numbers in the array that are the sum of the target
 */

function Add(number, target) {
    let obj = {};
    for (let i of number) {
        let complement = target - i;
        if (obj.hasOwnProperty(complement)) {
            return [complement, i];
        }
        obj[i] = i;
    }
    return null;
}

//example
const num = [2, 3, 4, 5, 6];
console.log(Add(num, 7));

//answer
[2, 5]