const lessonCreatedAt = new Date(2020, 8, 11, 19, 42, 0, 500);
console.log(lessonCreatedAt);
const loggedAt = Date.now(); //This is a number with miliseconds past the epoch.
console.log(loggedAt);

const testedAt = new Date(2020, 8, 12, 6); //This produces a date with the specific criteria input.
const testedAtAsString = testedAt.toString();
const testedAtAsNum = testedAt.getTime();
console.log(testedAtAsNum);

const createdAt = new Date(Date.now()); //This produces a date at the very moment the function runs.
console.log(createdAt);

const year = createdAt.getFullYear();
console.log(year);
const month = createdAt.getMonth();
console.log(month);
const day = createdAt.getDate();
console.log(day);
const hour = createdAt.getHours();
const minutes = createdAt.getMinutes();
const seconds = createdAt.getSeconds();
const milliseconds = createdAt.getMilliseconds();

const formattedYear = String(year);
const formattedMonth = String(month + 1);
const formattedDay = String(day);
const formattedHour = String(hour);
const formattedMinutes = String(minutes);
const formattedSeconds = String(seconds);
const formattedMilliseconds = String(milliseconds);
const formattedDateDelimiter = "/";
const formattedDateDelimiter2 = "-";
const formattedTimeDelimiter = ":";

const dateFormat =
   formattedYear +
   formattedDateDelimiter +
   formattedMonth +
   formattedDateDelimiter +
   formattedDay;
console.log(dateFormat);

const dateFormat2 =
   formattedYear +
   formattedDateDelimiter2 +
   formattedMonth +
   formattedDateDelimiter2 +
   formattedDay;
console.log(dateFormat2);

const timeFormat =
   formattedHour +
   formattedTimeDelimiter +
   formattedMinutes +
   formattedTimeDelimiter +
   formattedSeconds +
   formattedTimeDelimiter +
   formattedMilliseconds;
console.log(timeFormat);
