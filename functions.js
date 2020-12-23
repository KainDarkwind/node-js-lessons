//in (pass 'the function') ->

//do something
// related to the input/output = pure function
// cause an effect elsewhere in the app = side effect

// Get something out (return) ->

//Input string
//Reverse string
//Output reversed string

function toReverse(str) {
   if (typeof str === "string") {
      const chars = str.split(""); //Split string into characters.
      const reversedChars = chars.reverse(); //reverse the characters.
      const reversedStr = reversedChars.join(""); //put the chars back together.
      return reversedStr;
   } else {
      return "Error: please input a string.";
   }
}

//function toReverse(str) {
//     try {
//         const chars = str.split(""); //Split string into characters.
//         const reversedChars = chars.reverse(); //reverse the characters.
//         const reversedStr = reversedChars.join(""); //put the chars back together.
//         return reversedStr;
//      } catch {
//         return "Error: please input a string.";
//      }
//   }

const reversedString = toReverse(123);

console.log(reversedString);

//given a string and Number, check the length of string.  If length is over unmber, return true, else return false.

function checkIsOver(str, num) {
   if (str.length > num) {
      return true;
   } else {
      return false;
   }
}

const isOver = checkIsOver(5, "mine");
console.log(isOver);

var names = [
   "Hole-in-one!",
   "Eagle",
   "Birdie",
   "Par",
   "Bogey",
   "Double Bogey",
   "Go Home!",
];

console.log(names[1]);
function golfScore(par, strokes) {
   // Only change code below this line

   if (strokes === 1) {
      return names[0];
   } else if (strokes <= par - 2) {
      return names[1];
   } else if (strokes === par - 1) {
      return names[2];
   } else if (strokes === par) {
      return names[3];
   } else if (strokes === par + 1) {
      return names[4];
   } else if (strokes === par + 2) {
      return names[5];
   } else if (strokes >= par + 3) {
      return names[6];

      // Only change code above this line
   }
}

golfScore(5, 4);

function truncateString(str, num) {
   if (str.length > num) {
      const shortString = str.slice(0, num);
      console.log(shortString);
      const appendedEllipse = "...";
      return shortString + appendedEllipse;
   } else {
      return str;
   }
}

truncatedString = truncateString(
   "A-tisket a-tasket A green and yellow basket",
   "A-tisket a-tasket A green and yellow basket".length
);

console.log(truncatedString);

const $ = jQuery;
jQuery("#your-id").hide();

getUserInput();
[("a", "b")], join("");
_.fill([`c`, `h`, `u`, `r`, `c`, `h`], `*`, 1, 5);
