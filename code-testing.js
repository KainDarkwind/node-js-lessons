// function findLongestWordLength(str) {
//    const splitWords = str.split(" ");
//    console.log(splitWords);

//    for (let i = 0; i < splitWords.length; i++) {
//       let longestWord = splitWords[0];
//       const wordInQuestion = splitWords[i];
//       // console.log(`Word in Question:`, wordInQuestion);
//       // console.log(`length:`, wordInQuestion.length);
//       // console.log(`Current Longest Word:`, longestWord);
//       // console.log(`length:`, longestWord.length);
//       if (longestWord.length > wordInQuestion.length) {
//          console.log(`The longest word is`, longestWord);
//       } else if (longestWord.length <= wordInQuestion.length) {
//          let longestWord = wordInQuestion;
//          console.log(`The longest word changed to`, longestWord);
//       }
//    }

//    return str.length;
// }

// const lengthOfString = findLongestWordLength(
//    "The quick brown fox jumped over the lazy dog"
// );

// console.log(lengthOfString);

// function findLongestWordLength(str) {
//    const splitWords = str.split(" ");
//    console.log(splitWords);

//    if (
//       splitWords[0].length >
//       (splitWords[1].length &&
//          splitWords[2].length &&
//          splitWords[3].length &&
//          splitWords[4].length &&
//          splitWords[5].length &&
//          splitWords[6].length &&
//          splitWords[7].length &&
//          splitWords[8].length)
//    ) {
//       const longestWord = splitWords[0];
//       console.log(`The longest word is`, longestWord);
//    } else if (
//       splitWords[1].length > splitWords[2].length &&
//       splitWords[1].length > splitWords[3].length &&
//       splitWords[1].length > splitWords[4].length &&
//       splitWords[1].length > splitWords[5].length &&
//       splitWords[1].length > splitWords[6].length &&
//       splitWords[1].length > splitWords[7].length &&
//       splitWords[1].length > splitWords[8].length
//    ) {
//       let longestWord = splitWords[1];
//       console.log(`The longest word is`, longestWord);
//    } else if (
//       splitWords[2].length > splitWords[2].length > splitWords[3].length &&
//       splitWords[2].length > splitWords[4].length &&
//       splitWords[2].length > splitWords[5].length &&
//       splitWords[2].length > splitWords[6].length &&
//       splitWords[2].length > splitWords[7].length &&
//       splitWords[2].length > splitWords[8].length
//    ) {
//       let longestWord = splitWords[2];
//       console.log(`The longest word is`, longestWord);
//    } else if (
//       splitWords[3].length > splitWords[4].length &&
//       splitWords[3].length > splitWords[5].length &&
//       splitWords[3].length > splitWords[6].length &&
//       splitWords[3].length > splitWords[7].length &&
//       splitWords[3].length > splitWords[8].length
//    ) {
//       let longestWord = splitWords[3];
//       console.log(`The longest word is`, longestWord);
//    } else if (
//       splitWords[4].length > splitWords[5].length &&
//       splitWords[4].length > splitWords[6].length &&
//       splitWords[4].length > splitWords[7].length &&
//       splitWords[4].length > splitWords[8].length
//    ) {
//       let longestWord = splitWords[5];
//       console.log(`The longest word is`, longestWord);
//    } else if (
//       splitWords[5].length > splitWords[6].length &&
//       splitWords[5].length > splitWords[7].length &&
//       splitWords[5].length > splitWords[8].length
//    ) {
//       let longestWord = splitWords[5];
//       console.log(`The longest word is`, longestWord);
//    } else if (
//       splitWords[6].length > splitWords[7].length &&
//       splitWords[6].length > splitWords[8].length
//    ) {
//       let longestWord = splitWords[6];
//       console.log(`The longest word is`, longestWord);
//    } else if (splitWords[7].length > splitWords[8].length) {
//       let longestWord = splitWords[7];
//       console.log(`The longest word is`, longestWord);
//    } else {
//       let longestWord = splitWords[8];
//       console.log(`The longest word is`, longestWord);
//    }
// }

// const lengthOfString = findLongestWordLength(
//    "The quick brown fox jumped over the lazy dog"
// );

// console.log(lengthOfString);

// function repeatStringNumTimes(str, num) {
//    let repeatedStrings = [];
//    for (let i = num; i > 0; i--) {
//       if (i > 0) {
//          // `add one instance of the repeatedStr to the array and update it as the new array`;
//          repeatedStrings = str.concat(repeatedStrings);
//       }
//    }
//    return repeatedStrings;
// }

// result = repeatStringNumTimes("die", 5);
// console.log(result);

// function repeatStringNumTimes(str, num) {
//    let repeatedStrings = [];
//    for (let i = num; i > 0; i--) {
//       repeatedStrings = str.concat(repeatedStrings);
//    }
//    return String(repeatedStrings);
// }

// const result = repeatStringNumTimes("abc", 10);
// console.log(result);

// const repeatedStr = `die`;
// const iterations = 5;
// let repeatedStrings = [];
// for (let i = iterations; i > 0; i--) {
//    if (i > 0) {
//       // `add one instance of the repeatedStr to the array and update it as the new array`;
//       repeatedStrings = repeatedStr.concat(repeatedStrings);
//    }
//    console.log(repeatedStrings);
// }

// const userField = String(userFields[i2]);
// //This turns the data from userFields into string type data and calls it userField

// const splitWords = str.split(" ");
// let longestWordLength = 0;
// for (let i = 0; i < splitWords.length; i++) {
//    const wordInQuestion = splitWords[i];

//    if (longestWordLength < wordInQuestion.length) {
//       longestWordLength = wordInQuestion.length;
//       console.log(`The longest word is`, longestWordLength);
//    }
// }

function mutation(arr) {
   const baseStr = arr[0].toLowerCase();
   const strToSearchFor = arr[1].toLowerCase();
   const chars = strToSearchFor.split("");
   const uniqueChars = [...new Set(chars)];
   console.log(uniqueChars);

   for (let i = 0; i < uniqueChars.length; i++) {
      const char = uniqueChars[i];
      console.log(char);
      if (!baseStr.includes(char)) {
         //! is the logical 'not' sign.  It basically means if basestr 'does not' in this instance, include.
         console.log(`${baseStr} does not include ${char}`);
         return false;
      }
   }

   return true; //This is outside the loop so that the loop is able to complete itself before evaluating true.
}

console.log(mutation(["Alien", "LinEl"]));

// let [string1, string2] = ["hello", "hell"];

// const firstChar = string1[0];
// const secondChar = string1[1];
// const [strToSearchFor] = string2.split("");
// const indexOfStr = string1.indexOf(strToSearchFor);
// console.log(
//    `The ${strToSearchFor} in ${string1} is found at the ${indexOfStr} index. `
// );

// if (indexOfStr >= 0) {
//    console.log(`${string1} has ${strToSearchFor} in it.`);
// } else {
//    console.log(`${string1} does not have ${strToSearchFor} in it.`);
// }
