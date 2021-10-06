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

const formattedUsers = users.map((user) => {
   const newUser = { ...user }; //Make a copy so you don't destroy the original array.
   newUser.createdAt = Date.now();
   delete newUser.isActive;
   newUser.name = user.name.toLowerCase();
   return newUser;
});

console.log(formattedUsers);
console.log(users);

const stringedUsers = formattedUsers.map((user) => {
   const newUser = { ...user };
   newUser.createdAt = String(user.createdAt);
   return newUser;
});

console.log(stringedUsers);
