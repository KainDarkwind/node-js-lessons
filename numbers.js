const priceOfSquirtgun = 3.1;
const floorOfSquirtgun = Math.floor(priceOfSquirtgun);
console.log(`The floor of this item is: ${floorOfSquirtgun}`);
const ceilOfSquirtgun = Math.ceil(priceOfSquirtgun);
console.log(`The ceiling of this item is: ${ceilOfSquirtgun}`);
const roundedPrice = Math.round(priceOfSquirtgun);
console.log(`The rounded price of this item is: ${roundedPrice}`);
const smallestNum = Math.min(3, 5, 1);
console.log(`The smallest number is: ${smallestNum}`);
const prices = [3.99, 7.99, 0.99];
const lowestPrice = Math.min(...prices); //Needs spread operator ... or it will return NaN (not a number) due to prices being an array.
console.log(`The lowest price is: ${lowestPrice}`);
const highestPrice = Math.max(...prices);
console.log(`The highest price is: ${highestPrice}`);

console.log(`Here is a random number: ${Math.random()}`);

function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min; // .5 * 7.5 + 1 = 8.5
}

const randomArbitraryNum = getRandomArbitrary(1, 16);
console.log(`Here is your random arbitrary number: ${randomArbitraryNum}`);

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max + 1 - min) + min); //max is normally exclusive, min is inclusive, so +1 allows you to include the max.
}

const randomInt = getRandomInt(1, 16);
console.log(`Here is your random Integer: ${randomInt}`);

const weirdness = console.log(Math.round(`Pizza`));
const isNaN = Number.isNaN(weirdness);
console.log(`The weirdness is not a number: ${isNaN}`);

const convertedNum = Number(Math.ceil(`34gorgon`));
console.log(convertedNum);

function financial(x) {
   return Number.parseFloat(x).toFixed(2);
} //to fixed rounds (similar to math.Round), but returns a string, rather than a number.

const priceOfCup = `3.233`;

function round(num, numOfDecPlaces) {
   return Number(Number(num).toFixed(numOfDecPlaces));
}

const roundedPriceOfCup = round(priceOfCup, 2);
console.log(`The rounded price is: ${roundedPriceOfCup}`);
