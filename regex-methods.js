const regex = /REGEX/;

const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
const urlPattern = /^https?:\/\/www\.[a-zA-Z\d][\w-]+\.[a-zA-Z]{2,}$/;

const passwordPattern = /^[\w!#\\/-]{9,}\s{0}$/;
const emailPattern = /^[\w]\S*@[a-zA-Z\d][\w-]+\.[a-zA-Z]{2,}$/;

const userInput = "(313) 243-2092";

const isValidPhone = phonePattern.test(userInput);

//console.log(isValidPhone);

const scrapedHtmlText = "<h1>Hello World</h1><p>This is my first webpage</p>";
const tagPattern = /<.*?>/;

const htmlStrings = scrapedHtmlText.split(tagPattern);
console.log(
   htmlStrings.filter((str) => {
      return str !== "";
   })
);

const h1Pattern = /h1/g;
editedHtmltext = scrapedHtmlText.replace(h1Pattern, "p");

console.log(editedHtmltext);

const sentence = "      The quick brown fox jumps over the lazy dog.";
const wordPattern = /\b/;
const firstWordIndex = sentence.search(wordPattern);
console.log(firstWordIndex);
//Search returns the index of the pattern, similar to IndexOf.  Returns -1 if the searched pattern is not found.

const capitalPattern = /(\b[A-Z]\w*\s*)?/g;
const allWordPattern = /(\b[a-zA-Z]\w*\s*)?/g;
const firstLetterPattern = /(\b[a-zA-Z])/g;

sentence.replace(allWordPattern, capitalPattern);
console.log(sentence);

const result = titleCase("I'm a little tea pot");
console.log("The result is", result);

function titleCase(str) {
   const words = str.split(" ");
   const letters = words.map((word) => {
      return word.split("");
   });
   const capitalizedLetters = letters.map((letter) => {
      return letter[0].toUpperCase() + letter.slice(1).join("").toLowerCase();
   });

   console.log(words[0]);
   console.log(letters[0]);
   console.log(String(capitalizedLetters));

   const capitalizedStr = String(capitalizedLetters);
   const finalAnswer = capitalizedStr.replace(/,/g, " ");

   return finalAnswer;
}
