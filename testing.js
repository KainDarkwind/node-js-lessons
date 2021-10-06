// const user = {
//    email: "ratchet",
//    password: "trifling",
//    createdAt: 20210803,
//    id: 20219999,
//    emailTld: "com",
//    socialProfiles: [
//       {
//          site: "facebook",
//          siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
//          username: "",
//          image: {
//             sm: "",
//             orig: "",
//          },
//       },
//       {
//          site: "twitter",
//          siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
//          username: "",
//          image: {
//             sm: "",
//             md: "",
//             orig: "",
//          },
//       },
//    ],
// };

// const userKeys = Object.keys(user);
// const userValues = Object.values(user);

// const activeUser = deepCopy(user);
// activeUser.isActive = true;
// activeUser.createdAt = getEpochMs(user.createdAt);
// const hyperactiveUser = removeExcessImages(activeUser.socialProfiles[0].image);
//console.log("hyperuser", hyperactiveUser);
//console.log("User:", user);

// let image = {};
// function removeExcessImages(obj) {
//    //search socialProfiles[all].image[all]
//    for (let i = 0; i < obj.length; i++) {
//       //find images !== 'orig' as key
//       //delete them.
//    }
//    //console.log("The obj.length is:", obj.length);
//    //return object without images.
//    return obj;
// }

// function deepCopy(obj) {
//    const str = JSON.stringify(obj);

//    return safelyParseJson(str);
// }

// function safelyParseJson(str) {
//    try {
//       JSON.parse(str);
//    } catch {
//       return str;
//    }
//    return JSON.parse(str);
// }

// function getEpochMs(value) {
//    const originalDate = value.toString();
//    const formattedYear = originalDate.slice(0, 4);
//    const formattedMonth = originalDate.slice(4, 6) - 1;
//    const formattedDay = originalDate.slice(6);
//    const formattedDate = new Date(formattedYear, formattedMonth, formattedDay);
//    const epochMs = formattedDate.getTime();

//    return epochMs;
// }

/*function firstRecurringChar(str){
   counts = {}
   for (let i = 0; i < str.length; i++) {
if (counts.hasOwnProperty(char) === true){return char}
else {add char to counts}

}*/

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//    let newArr = [];
//    arr1.forEach((number) => {
//       if (arr2.includes(number) === false) {
//          newArr = newArr.concat(number);
//       }
//    });

//    arr2.forEach((number) => {
//       if (arr1.includes(number) === false) {
//          newArr = newArr.concat(number);
//       }
//    });

//    console.log(newArr);
//    return newArr;
// }

// const htmlEntities = [
//    {
//       result: " ",
//       description: "non-breaking space",
//       name: "&nbsp",
//       number: "&#160",
//    },
//    {
//       result: "<",
//       description: "less than",
//       name: "&lt",
//       number: "&#60",
//    },
//    {
//       result: ">",
//       description: "greater than",
//       name: "&gt;",
//       number: "&#62;",
//    },
//    {
//       result: "&",
//       description: "ampersand",
//       name: "&amp;",
//       number: "&#38;",
//    },
//    {
//       result: `"`,
//       description: "double quotation mark",
//       name: "&quot;",
//       number: "&#34;",
//    },
//    {
//       result: "'",
//       description: "single quotation mark (apostrophe)",
//       name: "&apos;",
//       number: "&#39;",
//    },
//    {
//       result: "¢",
//       description: "cent",
//       name: "&cent;",
//       number: "&#162;",
//    },
//    {
//       result: "£",
//       description: "pound",
//       name: "&pound;",
//       number: "&#163;",
//    },
//    {
//       result: "¥",
//       description: "yen",
//       name: "&yen;",
//       number: "&#165;",
//    },
//    {
//       result: "€",
//       description: "euro",
//       name: "&euro;",
//       number: "&#8364;",
//    },
//    {
//       result: "©",
//       description: "copyright",
//       name: "&copy;",
//       number: "&#169;",
//    },
//    {
//       result: "®",
//       description: "registered trademark",
//       name: "&reg;",
//       number: "&#174;",
//    },
// ];

// convertHTML("Dolce & Gabbana");

// //string to array of characters

// function convertHTML(str) {
//    const splitStr = str.split("");
//    const chars = splitStr.map((char) => {
//       if (char === "<") {
//          return "&lt;";
//       }
//       if (char === ">") {
//          return "&gt;";
//       }
//       if (char === "&") {
//          return "&amp;";
//       }
//       if (char === `"`) {
//          return "&quot;";
//       }
//       if (char === "'") {
//          return "&apos;";
//       } else {
//          return char;
//       }
//    });
//    const rejoinedStr = chars.join("");
//    // console.log(splitStr);
//    // console.log(chars);
//    // console.log(rejoinedStr);
//    return rejoinedStr;
// }

// (given a str) get str passed from function call
// (convert to a list of chars) use .split("")
// (go over each char) use .map to go over array.
// if char === "result" replace with "name"  5 if statements to make it work.

// const formattedUsers = users.map((user) => {
//    const newUser = { ...user }; //Make a copy so you don't destroy the original array.
//    newUser.createdAt = Date.now();
//    delete newUser.isActive;
//    newUser.name = user.name.toLowerCase();
//    return newUser;
// });

// const mostRecentUsers = users.filter((user) => {
//    return user.createdAt >= 1629770678881;
// });

// const squareList = (arr) => {
//    // Only change code below this line

//    const noDecimalArray = arr.filter((num) => {
//       return !String(num).includes(".");
//    });

//    const noNegativeArray = noDecimalArray.filter((num) => {
//       return !String(num).includes("-");
//    });

//    const squaredArray = noNegativeArray.map((num) => {
//       return num * num;
//    });

//    return squaredArray;
//    // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

const user = {
   email: "email",
   password: "password",
   createdAt: getCreatedAt(),
   id: getId(),
   emailTld: "getTld(email)",
   socialProfiles: [
      {
         site: "facebook",
         siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
         username: "",
         image: {
            sm: "",
            orig: "",
         },
      },
      {
         site: "twitter",
         siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
         username: "",
         image: {
            sm: "",
            md: "",
            orig: "",
         },
      },
   ],
};

const activeUser = deepCopy(user);
activeUser.isActive = true;
activeUser.createdAt = getEpochMs(user.createdAt);
//removeSmAndMdImages(activeUser.socialProfiles);
activeUser.socialProfiles.forEach((socialProfile) => {
   if (socialProfile.image.hasOwnProperty("sm")) {
      delete socialProfile.image.sm;
   }
   if (socialProfile.image.hasOwnProperty("md")) {
      delete socialProfile.image.md;
   }
});

const users = [user, activeUser];
const currentUsers = users
   .map((user) => {
      //Now map over each of the 2 objects in users to create a new array where each object in the array has the same 5 properties: id, email, password, createdAt, and isActive. The values for each object should be the values they previously had. Note: if an object did not previously have an isActive property, give it one and set its value to false. The result of your map should be stored in a const named normalizedUsers.
      const newUser = {
         id: user.id,
         email: user.email,
         password: user.password,
         createdAt: user.createdAt,
         isActive: getIsActive(user),
      };
      return newUser;
   })
   .filter((normalizedUser) => {
      //But we’re not done yet! Chain a filter method to your map method to return only the users where isActive is true. Rename normalizedUsers to currentUsers. currentUsers should contain only one object in the array.
      return normalizedUser.isActive;
   });

console.log(currentUsers);

function getIsActive(user) {
   if (user.isActive) {
      return user.isActive;
   } else {
      return user.isActive === false;
   }
}

function deepCopy(obj) {
   const str = JSON.stringify(obj);

   return safelyParseJson(str);
}

function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}
function getEpochMs(value) {
   const originalDate = value.toString();
   const formattedYear = originalDate.slice(0, 4);
   const formattedMonth = originalDate.slice(4, 6) - 1;
   const formattedDay = originalDate.slice(6);
   const formattedDate = new Date(formattedYear, formattedMonth, formattedDay);
   const epochMs = formattedDate.getTime();

   return epochMs;
}

function getCreatedAt() {
   //generate createdAt number
   return 20210407;
}

function getId() {
   // generate id string
   return "023048";
}
