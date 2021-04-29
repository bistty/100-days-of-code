/**
 * Return the count of vowel letters in a given string
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a string
 *
 * return the count of vowel letters
 */

function vowelCount(word) {
    const wordRegex = /[aeiou]/ig;
    const vowelArray = word.match(wordRegex).length;
    return vowelArray
}

//example
const vowelLetters = vowelCount("adefisayo");
console.log(vowelLetters);

//answer => 5
