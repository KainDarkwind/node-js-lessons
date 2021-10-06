const users = [
   { name: "will", isActive: true, createdAt: 1629770678781 },
   { name: "mike", isActive: true, createdAt: 1629770678881 },
   { name: "rachel", isActive: false, createdAt: 1629770678981 },
];

const mostRecentUsers = users.filter((user) => {
   return user.createdAt >= 1629770678881;
});

console.log(mostRecentUsers);

//filter is always waiting for a true (adds to list) or false (does not add to list).
