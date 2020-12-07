const name = "    Will Church   ";
const trimmedName = name.trim();
const leftTrimmedName = name.trimStart(); // can also use trimLeft()
const rightTrimmedName = name.trimEnd(); //can also use trimRight()

console.log(`hello ${trimmedName}`);
console.log(`The left/start trimmed name is ${leftTrimmedName}.`);
console.log(`The right/end trimmed name is ${rightTrimmedName}.`);

const nameLength = name.length;
const trimmedNameLength = trimmedName.length;
const leftTrimmedNameLength = leftTrimmedName.length;
console.log(`the length of ${name} is ${nameLength}`);
console.log(`the length of ${trimmedName} is ${trimmedNameLength}`);
console.log(`the length of ${leftTrimmedName} is ${leftTrimmedNameLength}`);

const upperCasedName = name.toUpperCase();
console.log(`HEY ${upperCasedName}!`);

const lowerCasedName = name.toLowerCase();
console.log(`shhhh...hi ${lowerCasedName}.`);

const email = "Will@gmail.com";
const lowerCasedEmail = email.toLowerCase();
console.log(`Normalized email address: ${lowerCasedEmail}`);

console.log(`The trimmed name is ${trimmedName}.`);

let birthday = `10/25/1980`;

const indexOfMonth = birthday.indexOf("1");
console.log(`The string 1 is found at the ${indexOfMonth} of ${birthday}`);

const firstChar = birthday[0];
const secondChar = birthday[1];
console.log(`the first char of ${birthday} is ${firstChar}`);
console.log(`the second char of ${birthday} is ${secondChar}`);

const indexOfFirstSlash = birthday.indexOf(`/`);
console.log(
   `The first slash in ${birthday} is found at the ${indexOfFirstSlash} index`
);

const indexOfSecondSlash = birthday.indexOf("/", 3);
console.log(
   `The second slash in ${birthday} is found at the ${indexOfSecondSlash} index.`
);

const indexOfLastSlash = birthday.lastIndexOf("/");
console.log(
   `The last slash in ${birthday} is found at the ${indexOfLastSlash} index.`
);

const indexOfSecondLastSlash = birthday.lastIndexOf("/", 4);
console.log(
   `The second to last slash in ${birthday} is found at the ${indexOfSecondLastSlash} index.`
);

const strToSearchFor = "Will";
const indexOfStr = birthday.indexOf(strToSearchFor);
console.log(
   `The ${strToSearchFor} in ${birthday} is found at the ${indexOfStr} index. `
);

if (indexOfStr >= 0) {
   console.log(`${birthday} has ${strToSearchFor} in it.`);
} else {
   console.log(`${birthday} does not have ${strToSearchFor} in it.`);
}

const charToSearchFor = "9";
if (birthday.indexOf(charToSearchFor) >= 0) {
   console.log(
      `${birthday} has at least one ${charToSearchFor} in it and that char is first located at the ${birthday.indexOf(
         charToSearchFor
      )} index.`
   );
} else {
   console.log(`${birthday} does not have any ${charToSearchFor} in it.`);
}

birthday = `10/25/1925`;
const delimiter = `/`;
const indexOfMonthDayDelimiter = birthday.indexOf(delimiter);
const indexOfDayYearDelimiter = birthday.lastIndexOf(delimiter);
const month = birthday.slice(0, indexOfMonthDayDelimiter);
const day = birthday.slice(
   indexOfMonthDayDelimiter + 1,
   indexOfDayYearDelimiter
);
const year = birthday.slice(indexOfDayYearDelimiter + 1);
console.log(`The month in ${birthday} is ${month}`);
console.log(`The day in ${birthday} is ${day}`);
console.log(`The year in ${birthday} is ${year}`);

yearToSearchFor = `1980`;
if (birthday.includes(yearToSearchFor)) {
   console.log(
      `The birthday ${birthday} includes the year: ${yearToSearchFor}.`
   );
} else {
   console.log(
      `The birthday ${birthday} doesn't include the year: ${yearToSearchFor}.`
   );
}
