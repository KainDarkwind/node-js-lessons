const lessonCreatedAt = new Date(2020, 8, 11, 19, 42, 0, 500);
//console.log(lessonCreatedAt);
const loggedAt = Date.now(); //This is a number with miliseconds past the epoch.
//console.log("seconds past the epoch", loggedAt);

const testedAt = new Date(2020, 8, 12, 6); //This produces a date with the specific criteria input.
const testedAtAsString = testedAt.toString();
const testedAtAsNum = testedAt.getTime();
//console.log("testedat.gettime():", testedAtAsNum);

const createdAt = new Date(Date.now()); //This produces a date at the very moment the function runs.
//console.log("createdAt is:", createdAt);

const year = createdAt.getFullYear();
//console.log(year);
const month = createdAt.getMonth();
//console.log(month);
const day = createdAt.getDate();
//console.log(day);
const hour = createdAt.getHours();
const minutes = createdAt.getMinutes();
const seconds = createdAt.getSeconds();
const milliseconds = createdAt.getMilliseconds();
//console.log("Milliseconds:", milliseconds);

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
//console.log(dateFormat);

const dateFormat2 =
   formattedYear +
   formattedDateDelimiter2 +
   formattedMonth +
   formattedDateDelimiter2 +
   formattedDay;
//console.log(dateFormat2);

const dateFormat3 = formattedYear + formattedMonth + formattedDay;
//console.log(dateFormat3);

const timeFormat =
   formattedHour +
   formattedTimeDelimiter +
   formattedMinutes +
   formattedTimeDelimiter +
   formattedSeconds +
   formattedTimeDelimiter +
   formattedMilliseconds;
//console.log(timeFormat);

const epochMs = getEpochMs(20210803);
console.log("Miliseconds are:", epochMs);

const insertedDate = new Date("2021", 07, 03); //This produces a date with the specific criteria input.
const dateAsString = insertedDate.toString();
const dateAsNum = insertedDate.getTime();
//console.log("date as string", dateAsString);
console.log("date as number", dateAsNum);

function getEpochMs(value) {
   const originalDate = value.toString();
   const formattedYear = originalDate.slice(0, 4);
   const formattedMonth = originalDate.slice(4, 6) - 1;
   const formattedDay = originalDate.slice(6);
   const formattedDate = new Date(formattedYear, formattedMonth, formattedDay);
   const epochMs = formattedDate.getTime();

   return epochMs;
}
