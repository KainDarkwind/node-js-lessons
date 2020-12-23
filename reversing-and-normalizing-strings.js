// const email = "will@gmail.com";

// const listOfEmailParts = email.split("@");
// Split removes the item it is searching for, and places the other pieces into an array.  An empty string "" will return a split up list of each individual character.

// console.log(listOfEmailParts);
// const localEmail = listOfEmailParts[0];
// const domainEmail = listOfEmailParts[1];

// console.log(`The local portion of the email is`, localEmail);

const greeting = "hello";
const greetingChars = greeting.split("");
console.log(greetingChars);
const copyOfGreetingChars = [...greetingChars];
const reverseGreetingChars = copyOfGreetingChars.reverse();
console.log(`Reversed characters:`, reverseGreetingChars);
console.log(`Original characters:`, greetingChars);
const newGreeting = reverseGreetingChars.join("");
console.log(`Here's our new greeting:`, newGreeting);
console.log(`Here is our new greeting in an array`, [newGreeting]);

const comboGreeting = [newGreeting].concat([greeting]);
console.log(`Here is our old greeting and our new greeting:`, comboGreeting);

console.log(`Here is our old greeting and new greeting in an array`, [
   comboGreeting,
]);

// const query = "GOOGLE FONTS "; //non-normalized data
// const dbEntries = ["google fonts", "google maps"]; //normalized results in your database.
// const dbEntry = dbEntries[0];
// const lowerCaseDbEntry = dbEntry.toLowerCase(); //lowercases DB entry
// const trimmedDbEntry = lowerCaseDbEntry.trim(); //trims lowercase DB entry
// const lowerCaseQuery = query.toLowerCase(); //lowercases query
// const trimmedQuery = lowerCaseQuery.trim(); //trims lowercase query

// const isInDb = trimmedQuery === trimmedDbEntry; //this compares the two variables, and sees if they are equal.  It then applies that result to a boolean variable called isInDb.
// if (isInDb) {
//    console.log("Here is your result"); //This will run the console log if isInDb is true.
// } else {
//    console.log(`Sorry, couldn't find anything for ${query}.`); //This will run the console log if isInDb is not true.
// }
