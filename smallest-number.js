/**
 * Finding the smallest value in an array.
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given an array of number
 *
 * return the smallest number in the array
 */


//method 1
function smallestNumber(numbers) {
    let smallest = 0;
    for (number of numbers) {
        if (smallest > number) {
            smallest = number;
        }
    }
    return smallest;
}

//method 2
function smallestNumber(numbers) {
    const smallest = Math.min(...numbers);
    return smallest;
}

//example
const result = smallestNumber([2, 8, 9, -2, -8, 10]);
console.log(result);

//answer => -8;