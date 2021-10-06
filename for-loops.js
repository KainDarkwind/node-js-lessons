const holidays = [
   [`Holiday`, `Date`, `Is a federal holiday?`],
   [`New Year's Day`, 20200101, true],
   [`Martin Luther King Jr. Day`, 20200120, true],
   [`Susan B. Anthony Day`, 20200215, false],
   [`Washington's Birthday`, 20200217, true],
   [`Good Friday`, 20200410, false],
   [`Memorial Day`, 20200525, true],
   [`Independence Day`, 20200604, true],
   [`Labor Day`, 20200907, true],
   [`Sophia's Birthday`, 20201019, false],
   [`Veterans Day`, 20201111, true],
   [`Thanksgiving Day`, 20201126, true],
   [`Christmas Day`, 20201225, true],
];

//Create a list of solely federal holidays
let federalHolidays = [];
for (let i = 0; i < holidays.length; i++) {
   // console.log(holidays[i]);
   // if federal, keep
   const holidayInQuestion = holidays[i];
   const isfederalHoliday = holidayInQuestion[2]; // true or false we are reading the 2 index (3rd) value of the array, for each line of this for loop.

   //if (isFederalHoliday === true) { is another way to do this shown below.
   if (typeof isfederalHoliday === "boolean" && isfederalHoliday) {
      federalHolidays = federalHolidays.concat([holidays[i]]);
   } else {
      //else, skip nonfederal holiday
   }
}

console.log(federalHolidays);

const number = 10;
const numberString = String(number);
console.log(`${numberString} is the number ${number} converted into a string.`);

const string = "15";
const stringNumber = Number(string);
console.log(`${stringNumber} is the string ${string} converted into a number.`);

// Create a list of holiday dates; only the dates from holidays

let holidayDates = [];
for (let i = 0; i < holidays.length; i++) {
   // The for loop runs through holidays for its entire length.
   //holidays[0] is the first item in holidays index.
   //holidays[i] is each item in holidays.
   // console.log(holidays[i]);
   // if federal, keep

   const holiday = holidays[i];
   const holidayDate = holiday[1]; // date  Specifically, this is the object in the 1 index of the holidays array.
   console.log(`The date of the holiday is `, holidayDate);

   if (typeof holidayDate === "number" && holidayDate) {
      holidayDates = holidayDates.concat([holidays[i]]);
      //When you concat a variable, it provides a bunch of separate items into a big array.  When you concat a variable surrounded by [], it formats it as an array or array of array.
   } else {
      //else, skip nonfederal holiday
   }
   // console.log(`this is what the const holiday is`, holidays[i]);
}
console.log(holidayDates);
