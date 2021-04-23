/**
 * Sorting the list of some programing language
 * @authors Jesukunle Esther (bisolajesukunle@gmail.com)
 * 
 * You are given a list of some programming languages
 * 
 * You are to return how many times each language appears as an object
 */

 function sortProgrammingLang(languages) {
  const programmingLangArray = languages.split(",");
  return programmingLangArray.reduce((total, item) => {
    total[item] ? (total[item] = total[item] + 1) : 1;
    return total;
  }, {});
}
//example
var languageAns = sortProgrammingLang(
  "Javascript,Python,C#,Java,Java,C++,Python,C# Javascript,Python,Java,C++,Java"
);
console.log(languageAns);

//answer
//{Javascript: 2, Python: 3, C#: 2, Java: 4, C++: 2}