const users = [
   ["Will", "Church", "Will@gmail.com"],
   ["Mike", "Zetlow", "mike@email.com"],
   ["Rachel", "Ziethlow", "babe@gmail.com"],
];

// Please provide a list of email address for our mailing list

let emails = [];

for (let i = 0; i < users.length; i++) {
   const user = users[i];
   //    console.log(`This is the list of users`, user); // users[0], users[1], users[2]
   const firstName = user[0]; //users[i][0]; works too.
   const lastName = user[1];
   const email = user[2];
   console.log(`${firstName} is the first name of the user`);
   console.log(`${lastName} is the last name of the user`);
   console.log(`${email} is the email of the user`);

   //    const delimiter = `@`;
   //    const indexOfLocalEmail = email.indexOf(delimiter);
   //    console.log(`The index of local email is ${indexOfLocalEmail}.`);
   //    const localEmail = email.slice(0, indexOfLocalEmail);
   //    console.log(`The value of local email is ${localEmail}.`);

   emails = emails.concat(email);
}

// console.log(`This is a list of emails: ${emails}`);
// console.log(`This is a list of emails in array form:`, emails);

let normalizedUsers = [];
//This is going to be our resulting array.  It is empty, but we will populate it with data below using concat.

for (let i = 0; i < users.length; i++) {
   const userFields = users[i];
   //This goes through the entire list of data and returns an individual array for each line of data.

   let newUserFields = [];
   //This creates an empty array called newUserFields.  We will populate it with concatenated data below.

   for (let i2 = 0; i2 < userFields.length; i2++) {
      //This is a nested For Loop.  Use i2 to represent the second index.  Other than being a loop within a loop, it works exactly the same as a normal For Loop.

      const userField = String(userFields[i2]);
      //This turns the data from userFields into string type data and calls it userField

      const lowerCasedField = userField.toLowerCase();
      // This turns the data in userField into lower cased data, and calls it lowerCasedField.

      newUserFields = newUserFields.concat(lowerCasedField);
      // This places the lowerCasedField data into the newUserFields array.
   }

   normalizedUsers = normalizedUsers.concat([newUserFields]);
   // This places the newUserFields array into the normalizedUsers array.
}

console.log(normalizedUsers);
