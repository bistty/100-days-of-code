/**
 * Returning the smallest K distinct even numbers of an array 
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given an array of integers
 *
 * return the smallest K distinct even numbers
 */


function distinctEven(arry, K) {
    const evenNum = [...new Set(arry)].filter(num => num % 2 == 0).sort((a, b) => a - b)
    let distinctNum = []
    for (let i = 0; i < K; i++) {
        distinctNum = [...distinctNum, evenNum[i]]
    }
    return distinctNum;
}

//example
let distinctAns = distinctEven([3, 8, 4, 1, 2, 1, 2, 10, 32, 8], 3)
console.log(distinctAns);

//answer => [2,4,8]