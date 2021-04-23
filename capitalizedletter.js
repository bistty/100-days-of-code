/**
 * Capitalizing the first letter of every words in a string
 * 
 * @author Jesukunle Esther (bisolajesukunle@gmail.com)
 *
 * You are given a string
 *
 * You are to return the first letter of each words capitalized
 */

function word(words) {
    const wordArray = words.split(" ");
    const wordCap = wordArray
        .map(item => {
            return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(" ");
    console.log(wordCap);
}

//example
word("persistence pays my friend");
//answer => Persistence Pays My Friend
