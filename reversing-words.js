/**
 * Method of reversing words in a sentence
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a string
 *
 * reverse each word in the string
 */

function reverse(word) {
    return word.split(" ").map(words => words.split('').reverse().join('')).join(' ')
}
console.log(reverse("consistency is the key"));

//answer =>ycnetsisnoc si eht yek