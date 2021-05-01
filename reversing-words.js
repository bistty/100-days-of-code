/**
 * Method of reversing words in a sentence
 *
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a string
 *
 * reverse each word in the string
 */

function reverseSentence(sentence) {
    const words = sentence.split(' ');
    const reverseWords = words.map(word => word.split('').reverse().join(''));
    return reverseWords.join(' ');
}

const answer = reverseSentence("consistency is the key")
console.log(answer);

//answer =>ycnetsisnoc si eht yek