const mostInsecurePasswords = [
   "123456",
   "123456789",
   "password1",
   "skywalker",
   "1010101010",
   "1racecar1",
   "obama2016",
];

const secondMostInsecurePasswords = [
   ["mypassword", true],
   ["password1", true],
   ["zxcvbnm", true],
   [1234567890, false],
   ["gosteelers", true],
   [51015202530, false],
   ["Password1", true],
];

const allInsecurePasswords = [
   { id: 1, text: "123456" },
   { id: 2, text: "password" },
   { id: 3, text: "12345678" },
   { id: 4, text: "qwerty" },
   { id: 5, text: "123456789" },
   { id: 6, text: "12345" },
   { id: 7, text: "1234" },
   { id: 8, text: "111111" },
   { id: 9, text: "1234567" },
   { id: 10, text: "dragon" },
   { id: 11, text: "123123" },
   { id: 12, text: "baseball" },
   { id: 13, text: "abc123" },
   { id: 14, text: "football" },
   { id: 15, text: "monkey" },
   { id: 16, text: "letmein" },
   { id: 17, text: "696867" },
   { id: 18, text: "shadow" },
   { id: 19, text: "master" },
   { id: 20, text: "666666" },
   { id: 21, text: "qwertyuiop" },
   { id: 22, text: "123321" },
   { id: 23, text: "mustang" },
   { id: 24, text: "1234567890" },
   { id: 25, text: "michaeljordan" },
   { id: 26, text: "654321" },
   { id: 27, text: "superman" },
   { id: 28, text: "1qaz2wsx" },
   { id: 29, text: "999999999" },
   { id: 30, text: "121212" },
   { id: 31, text: "000000" },
   { id: 32, text: "qazwsx" },
   { id: 33, text: "123qwe" },
   { id: 34, text: "killer" },
   { id: 35, text: "trustno1m8" },
   { id: 36, text: "jordan" },
   { id: 37, text: "jennifer" },
   { id: 38, text: "zxcvbnm" },
   { id: 39, text: "asdfgh" },
   { id: 40, text: "hunter" },
   { id: 41, text: "buster" },
   { id: 42, text: "soccer" },
   { id: 43, text: "harley" },
   { id: 44, text: "batman" },
   { id: 45, text: "andrew" },
   { id: 46, text: "tigger" },
   { id: 47, text: "sunshine" },
   { id: 48, text: "iloveyou" },
   { id: 49, text: "2000" },
   { id: 50, text: "charlie" },
   { id: 51, text: "robert" },
   { id: 52, text: "thomas" },
   { id: 53, text: "hockey" },
   { id: 54, text: "ranger" },
   { id: 55, text: "harrypotter" },
   { id: 56, text: "starwars" },
   { id: 57, text: "klaster" },
   { id: 58, text: "112233" },
   { id: 59, text: "george" },
   { id: 60, text: "computer" },
   { id: 61, text: "michelle" },
   { id: 62, text: "jessica" },
   { id: 63, text: "pepper" },
   { id: 64, text: "1111" },
   { id: 65, text: "zxcvbn" },
   { id: 66, text: "555555" },
   { id: 67, text: "11111111" },
   { id: 68, text: "131313" },
   { id: 69, text: "freedom" },
   { id: 70, text: "777777" },
   { id: 71, text: "pass" },
   { id: 72, text: "maggie" },
   { id: 73, text: "159753" },
   { id: 74, text: "aaaaaa" },
   { id: 75, text: "ginger" },
   { id: 76, text: "princess" },
   { id: 77, text: "joshua" },
   { id: 78, text: "cheese" },
   { id: 79, text: "amanda" },
   { id: 80, text: "summer" },
   { id: 81, text: "love" },
   { id: 82, text: "ashley" },
   { id: 83, text: "nicole" },
   { id: 84, text: "chelsea" },
   { id: 85, text: "biteme" },
   { id: 86, text: "matthew" },
   { id: 87, text: "access" },
   { id: 88, text: "yankees" },
   { id: 89, text: "987654321" },
   { id: 90, text: "dallas" },
   { id: 91, text: "austin" },
   { id: 92, text: "thunder" },
   { id: 93, text: "taylor" },
   { id: 94, text: "matrix" },
   { id: 95, text: "minecraft" },
];

//Lists should be combined
//Lists should not contain obama2016
//Lists should not contain skywalker
//Lists should not contain boolean values
//Numbers in the list should be in string format.
//Strings in the list should be lowercased.
//List should contain both the password and the reversed form of the password.
//There should be no duplicate passwords.
//There should be no passwords shorter than 9 characters.

const flatSecondMostInsecurePasswords = secondMostInsecurePasswords
   .flat()
   .filter((password) => {
      return typeof password != "boolean";
   });

const extractedAllInsecurePasswords = allInsecurePasswords.map((password) => {
   return password.text;
});

const originalTriplePasswords = [
   ...extractedAllInsecurePasswords,
   ...flatSecondMostInsecurePasswords,
   ...mostInsecurePasswords,
];

const nobamaList = originalTriplePasswords.filter((password) => {
   return password != "obama2016" && password != "skywalker";
});

const normalizedPasswords = nobamaList.map((password) => {
   return String(password).toLowerCase().trim();
});

const mirroredPasswords = normalizedPasswords.map((password) => {
   return password.split("").reverse().join("");
});

const penultimatePasswords = [...normalizedPasswords, ...mirroredPasswords];

console.log(penultimatePasswords);

longPasswords = penultimatePasswords.filter((password) => {
   return password.length >= 9;
});

const unacceptablePasswords = [...new Set(longPasswords)];

console.log(unacceptablePasswords);

function getUnacceptablePasswords() {
   const newMostInsecurePasswords = [...mostInsecurePasswords];
   const flatSecondMostInsecurePasswords = secondMostInsecurePasswords.filter(
      (password) => {
         return true;
      }
   );

   const mostRecentUsers = users.filter((user) => {
      return user.createdAt >= 1629770678881;
   });

   const initialUnacceptablePasswords = [
      ...newMostInsecurePasswords,
      ...flatSecondMostInsecurePasswords,
   ];

   //Right here I removed all of the duplicate passwords.
   // const uniqueUnacceptablePasswords = [
   //    ...new Set(initialUnacceptablePasswords),
   // ];

   const firstRemainingUnacceptablePasswords =
      initialUnacceptablePasswords.slice(
         0,
         initialUnacceptablePasswords.indexOf("skywalker")
      );

   const secondRemainingUnacceptablePasswords =
      initialUnacceptablePasswords.slice(
         initialUnacceptablePasswords.indexOf("skywalker") + 1
      );

   const skywalkerlessUnacceptablePasswords = [
      ...firstRemainingUnacceptablePasswords,
      ...secondRemainingUnacceptablePasswords,
   ];

   const firstObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         0,
         skywalkerlessUnacceptablePasswords.indexOf("obama2016")
      );

   const secondObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         skywalkerlessUnacceptablePasswords.indexOf("obama2016") + 1
      );

   const cleanedUnacceptablePasswords = [
      ...firstObamalessUnacceptablePasswords,
      ...secondObamalessUnacceptablePasswords,
   ];

   // let booleanFreePasswords = [];
   // cleanedUnacceptablePasswords.forEach((passwordInQuestion) => {
   //    if (typeof passwordInQuestion !== "boolean") {
   //       booleanFreePasswords = booleanFreePasswords.concat(passwordInQuestion); //if the password is not a boolean (true/false), we are sticking it into the array.
   //    }
   // });

   const booleanFreePasswords = cleanedUnacceptablePasswords.filter(
      (password) => {
         return typeof password !== "boolean";
      }
   );

   let stringedPasswords = [];
   booleanFreePasswords.forEach((passwordInQuestion) => {
      if (typeof passwordInQuestion === "number") {
         const stringPassword = String(passwordInQuestion);
         stringedPasswords = stringedPasswords.concat(stringPassword); //If the password is a number, we turn it to a string and put it into the array.
      } else {
         stringedPasswords = stringedPasswords.concat(passwordInQuestion); //If the password isn't a number, we leave it alone but put it into the array.
      }
   });

   // const stringedPasswords = booleanFreePasswords.map((password) => {
   //    const newPassword = { ...password };

   // });

   // const stringedUsers = formattedUsers.map((user) => {
   //    const newUser = { ...user };
   //    newUser.createdAt = String(user.createdAt);
   //    return newUser;
   // });

   let mirroredPasswords = [];
   stringedPasswords.forEach((passwordInQuestion) => {
      const passwordLetters = passwordInQuestion.split(""); //splitting at a blank string splits the string into an array of its parts.
      const copyOfPasswordLetters = [...passwordLetters]; //We will then make a copy of that array of parts with the spread ... operator.  We want to keep the original list intact.
      const reversedPasswordLetters = copyOfPasswordLetters.reverse(); //this switches the order of the array.

      const reversedPasswords = reversedPasswordLetters.join(""); //this puts the letters, now reversed, back into a string from the array.

      mirroredPasswords = mirroredPasswords.concat(
         stringedPasswords,
         reversedPasswords
      ); //We will then add that reversed string plus the non-reversed to the true final array.
   });

   let normalizedPasswords = [];
   mirroredPasswords.forEach((passwordInQuestion) => {
      //For each item in the array, we are going to lowercase it with:
      lowerTrimmedPassword = passwordInQuestion.toLowerCase().trim();
      normalizedPasswords = normalizedPasswords.concat(lowerTrimmedPassword);
   });

   const mappedPasswords = allInsecurePasswords.map((passwords) => {
      const newPasswords = { ...passwords }; //Make a copy so you don't destroy the original array.
      const newPasswordTexts = newPasswords.text;
      // console.log("this map is returning", newPasswordTexts);
      return newPasswordTexts;
   });

   penultimatePasswords = normalizedPasswords.concat(mappedPasswords);
   // console.log("The penultimate passwords are", penultimatePasswords);

   const longPasswords = penultimatePasswords.filter((password) => {
      return password.length >= 9;
   });

   // console.log("The long passwords are", longPasswords);

   const unacceptablePasswords = [...new Set(longPasswords)]; //Running set to remove any crafty palindrome passwords from the final list.

   const arePasswordsLongEnough = unacceptablePasswords.every((password) => {
      if (password.length >= 9) {
         return true;
      }
   });
   console.log("PWs long enuff?", arePasswordsLongEnough);

   const isQwertyHere = unacceptablePasswords.some((password) => {
      if (password.includes("qwerty")) {
         return true;
      }
   });
   console.log("Qwerty here?", isQwertyHere);

   return unacceptablePasswords;
}
