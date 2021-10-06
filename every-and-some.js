const users = [
   {
      name: "will",
      isActive: true,
      createdAt: 1629770678781,
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "wchurch3",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "dicefreaks",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "kaindarkwind",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   },
   {
      name: "mike",
      isActive: true,
      createdAt: 1629770678881,
      socialProfiles: [
         {
            site: "codecamp",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "mikezetlow",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "mzetlow",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   },
   {
      name: "rachel",
      isActive: false,
      createdAt: 1629770678981,
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "hotbabe69",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "fiending4will",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   },
];

const isEveryUserOnFb = users.every((user) => {
   //go through social profiles
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site;
   });
   console.log(siteNames);
   return siteNames.includes("facebook");
   //if site === facebook
   /*if (siteNames.includes("facebook")) {
      return true;
   } else {
      return false;
   } */
   //this user is on facebook, so return true
   //else return false.
});

console.log(isEveryUserOnFb);

const numbers = [1, 2, 3, -4, 5];

// const isEveryNumberPos = numbers.every((number) => {
//    //go through numbers

//    if (number > 0) {
//    }
//    //if number > 0
//    //this number postive, so return true
//    //else return false.
// });

function checkPositive(arr) {
   console.log("arr is", arr);
   const isNumPos = arr.every((num) => {
      if (num > 0) {
         return true;
      }
   });
   console.log("isNumPos is", isNumPos);
   return isNumPos;
}
const result = checkPositive([1, 2, 3, -4, 5]);
console.log(result);

//some checks for 'any true' (and if yes, says true.)
//every checks for 'any false' (and if no, says true.)
//'any false' can be considered the opposite (false) of every.
//'all false' can be considered the opposite (false) of some.
