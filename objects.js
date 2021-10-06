const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

console.log(user.email);

function getEmail() {
   //get the user's email from the input with jQuery

   return "kain@gmail.com";
}

function getPassword() {
   //get the user's password from the input with jQuery

   return "cocksfordays";
}

function getCreatedAt() {
   //generate createdAt number
   return 20210407;
}

function getId() {
   // generate id string
   return "023048";
}

const newUser = { ...user }; //shallow copy via spread
// Another way to do this is with Object.assign({}, user)  The {} is a blank object.  It takes two parameters, in this case we're assigning user and a blank object together, aka a copy of user.

newUser.isActive = true;
newUser.tokenExpiredAt = user.createdAt + 86400000;
newUser.isCoolPerson = true;
newUser.isCoolPerson = false;
delete newUser.isCoolPerson;
delete newUser.email;

console.log(user);
console.log(newUser);
