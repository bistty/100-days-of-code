/**
 * Checking the number of vowel letters
 * 
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a string
 *
 * You are to return how many times the vowel letters appear in a string
 */

function vowelCount(word) {
    const vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (str of word) {
        for (vow of vowel) {
            if (vow === str) {
                count++;
            }
        }
    }
    return count;
}

//example
const vowelLetters = vowelCount("adefisayo");
console.log(vowelLetters);

//answer => 5