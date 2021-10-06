function getUserId(num) {
   return num;
}

function getUser(callback) {
   const userId = callback(Date.now()); //callback is sometimes 'cb'.
   return {
      name: "Will",
      id: userId,
   };
}

/*const user = getUser(getUserId);
console.log(user);*/

const users = [
   {
      name: "Will",
      isActive: true,
   },
   {
      name: "Mike",
      isActive: true,
   },
   {
      name: "Rachel",
      isActive: false,
   },
];

/*for (let i = 0; i < users.length; i++) {
   console.log(users[i].name);
}*/

users.forEach(logUserName);

function logUserName(user) {
   //console.log(user.isActive);
} //This function can literally replace the 'logUserName' in the forEach statement above.  This makes it an anonymous function that only fires in that statement, rather than a function that can be used elsewhere.

users.forEach(function (user) {
   //  console.log(user.name);
});

users.forEach((gob) => {
   //console.log(gob.name);
}); //This is in arrow format, I also changed 'user' to 'gob' to demonstrate how the naming format is dictated by me, not the array that I'm accessing.

let activeUsers = [];

users.forEach((user) => {
   if (user.isActive) {
      activeUsers = activeUsers.concat(user);
   }
});

/*"list to be acted on".forEach((part of list) => {
    stuff we want to do
})*/

console.log(activeUsers);

/*"list to be acted on".forEach((part of list) => {
    stuff we want to do
})*/

console.log(activeUsers);
