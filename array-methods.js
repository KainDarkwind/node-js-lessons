//arrays === lists

const days = [
   `Sunday`,
   `Monday`,
   `Tuesday`,
   `Wednesday`,
   `Thursday`,
   `Friday`,
   `Saturday`,
   `Christmas`,
   `New Year's`,
];

// const firstDay = days[0];
// console.log(`The first day in the array is ${firstDay}`);
// const daysLength = days.length;
// console.log(`The length of the array is ${daysLength}.`);
// const lastDay = days[daysLength - 1];
// console.log(`The last day of the array is ${lastDay}`);

// const favoriteDay = "Wednesday";
// const indexOfWednesday = days.indexOf(favoriteDay);
// console.log(
//    `${favoriteDay} is found at the ${indexOfWednesday} index of the days array`
// );

// const specificDay = "Thor's Day";

// if (days.indexOf(specificDay) === -1) {
//    console.log(`No, ${specificDay} is not a day.`);
// } else {
//    console.log(
//       `Yes, ${specificDay} is a day.  It was found at the ${days.indexOf(
//          specificDay
//       )} index in the list of days.`
//    );
// }

// if (days.includes(specificDay)) {
//    console.log(
//       `Yes, ${specificDay} is a day.  It was found at the ${days.indexOf(
//          specificDay
//       )} index in the list of days.`
//    );
// } else {
//    console.log(`No, ${specificDay} is not a day.`);
// }

// const replaceableDay = "Thursday";
// const indexofReplaceableDay = days.indexOf(replaceableDay);
// console.log(
//    `We are going to replace ${replaceableDay} at the ${indexofReplaceableDay} in the list of days.`
// );

// const newDays = [...days]; // Array.from(days) also works.
// newDays[indexofReplaceableDay] = specificDay;
// console.log(`Here's a list of our old days:`, days);
// console.log(`Here's a list of our new days:`, newDays);

const holidays = [
   `New Year's Day (Jan 1)`,
   `Martin Luther King Jr. Day (Jan 20)`,
   `Susan B. Anthony Day (Feb 15)`,
   `Washington's Birthday (Feb 17)`,
   `Good Friday (Apr 10)`,
   `Memorial Day (May 25)`,
   `Independence Day (Jul 4)`,
   `Labor Day (Sep 7)`,
]; //This is an array in string format

const newHolidaysFromHr = [
   [`Veterans Day (November 11)`, 2020, "Megan"],
   [`Thanksgiving Day (November 28)`, 2020, "Megan"],
   [`Christmas Day (December 25)`, 2020, "Megan"],
]; //This is an array in array format.

const firstDay = holidays[0];
console.log(`The first day in this array is ${firstDay}.`);
const daysLength = holidays.length;
console.log(`The length of this array is ${daysLength}`);

const specificHoliday = "Christmas (Dec 25)"; //This creates a variable called specificHoliday and has set its value to Christmas etc.

const replaceableHoliday = "Washington's Birthday (Feb 17)"; //This creates a variable called replaceableHoliday and has set its value to Washtington's etc.
const indexofReplaceableHoliday = holidays.indexOf(replaceableHoliday); //This creates a variable called indexofReplaceableHoliday and set its value to the index of the holiday array.
console.log(
   `We are going to replace ${replaceableHoliday} at the ${indexofReplaceableHoliday} in the list of days.`
);

const newHolidays = [...holidays]; // Array.from(days) also works.  //This spreads out the information in the holiday array and assigns it to a variable called newHolidays.
newHolidays[indexofReplaceableHoliday] = specificHoliday;
//This takes the specificHoliday mentioned above and places it in the newHoliday array at the spot where the replaceableHoliday mentioned above was located.
console.log(`Here's a list of our old holidays:`, holidays);
console.log(`Here's a list of our new holidays:`, newHolidays);
console.log(`Here's a list of our new holidays from HR`, newHolidaysFromHr);

// const allHolidays = newHolidays.concat(newHolidaysFromHr); `same as spread ...syntax shown below`
const allHolidays = [...newHolidays, ...newHolidaysFromHr];
//This takes the spread of the newHolidays and the newHolidaysFromHR and puts them into a new array called allHolidays.

const allFlatHolidays = allHolidays.flat();
console.log(`Here is a list of ALL holidays flattened:`, allFlatHolidays);
//This 'flattens' or removes the mutliple tiers of data withiin an array.  We use this when you are combining arrays of different value types.

const allUniqHolidays = [...new Set(allFlatHolidays)];
console.log(`Here is a list of ALL unique holidays:`, allUniqHolidays); //This removes duplicate entries.  Go look up the Set operator if you can't figure it from the console logs.

const firstHolidays = allUniqHolidays.slice(0, allUniqHolidays.indexOf(2020));
//This goes through the allUniqHolidays array from the beginning to the index of 2020, and takes everything prior to 2020, putting it in a variable called firstHolidays.
console.log(`Here are the first holidays:`, firstHolidays);

const secondHalfStartingHoliday = "Thanksgiving Day (November 28)";
const secondHolidays = allUniqHolidays.slice(
   allUniqHolidays.indexOf(secondHalfStartingHoliday)
);
//This does the same thing as above, but we had to declare the starting point before it would work.
console.log(`Here are the second holidays:`, secondHolidays);

const allCleanedUpHolidays = firstHolidays.concat(secondHolidays);
//This puts the first and second lists into a new and final list we called allCleanedUpHolidays.

console.log(`Here's the final list of holidays:`, allCleanedUpHolidays);
