// Given a number (4)
// Pad it with zeros, n amount of times (up to 3 chars)

// 4 => 004
// 40 => 040
// 400 => 400
// 4000 => 4000 or return error saying it exceeded padding.

function padLeft(num, width, char) {
   const numAsStr = String(num);
   let padding = "";
   for (let i = 0; i < width; i++) {
      padding += char;
   }
   console.log("Padding is", padding);

   const concattedStr = padding + numAsStr;

   if (numAsStr.length >= width) {
      return numAsStr;
   }
   const slicedStr = concattedStr.slice(-width);
   return slicedStr;
}

const num = 6;
const paddedNum = padLeft(num, 2, "0"); //Ask why number 0 worked as string.
console.log(paddedNum);

const numAsStr = String(num);
const newPaddedNum = numAsStr.padStart(4, "0");
console.log("Here is your NEW padded num:", newPaddedNum);
